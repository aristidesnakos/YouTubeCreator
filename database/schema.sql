-- YouTube Creator Dashboard - Database Schema
-- This file contains the database schema for the MVP
-- Run these SQL statements in your Supabase SQL Editor

-- Enable Row Level Security on all tables
-- This ensures users can only access their own data

-- ============================================================================
-- PROFILES TABLE
-- ============================================================================
-- Extends the auth.users table with YouTube-specific profile information

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  youtube_channel_id VARCHAR(255) UNIQUE,
  youtube_channel_name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies: Users can only view and edit their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- ============================================================================
-- OAUTH_TOKENS TABLE
-- ============================================================================
-- Stores YouTube OAuth tokens for API access
-- Note: Tokens should be encrypted at rest using pgcrypto extension

CREATE TABLE IF NOT EXISTS public.oauth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expiry_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.oauth_tokens ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access their own tokens
CREATE POLICY "Users can manage own tokens" ON public.oauth_tokens
  USING (auth.uid() = user_id);

-- ============================================================================
-- CONTENT_PILLARS TABLE
-- ============================================================================
-- Stores content pillars for organizing videos into strategic categories

CREATE TABLE IF NOT EXISTS public.content_pillars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  color_code VARCHAR(7), -- hex color (e.g., #FF5733)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, name) -- Each user can only have one pillar with the same name
);

-- Enable Row Level Security
ALTER TABLE public.content_pillars ENABLE ROW LEVEL SECURITY;

-- Policy: Users can manage their own content pillars
CREATE POLICY "Users can manage own pillars" ON public.content_pillars
  USING (auth.uid() = user_id);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_content_pillars_user_id ON public.content_pillars(user_id);

-- ============================================================================
-- VIDEOS TABLE
-- ============================================================================
-- Stores references to YouTube videos with content pillar assignments

CREATE TABLE IF NOT EXISTS public.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  youtube_video_id VARCHAR(255) UNIQUE NOT NULL,
  content_pillar_id UUID REFERENCES public.content_pillars(id) ON DELETE SET NULL,
  title VARCHAR(100),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Policy: Users can manage their own videos
CREATE POLICY "Users can manage own videos" ON public.videos
  USING (auth.uid() = user_id);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_videos_user_id ON public.videos(user_id);
CREATE INDEX IF NOT EXISTS idx_videos_content_pillar_id ON public.videos(content_pillar_id);
CREATE INDEX IF NOT EXISTS idx_videos_youtube_video_id ON public.videos(youtube_video_id);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================
-- Function to automatically create a profile when a user signs up

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger: Create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
