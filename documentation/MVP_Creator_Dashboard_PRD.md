# Product Requirements Document (PRD)
## MVP Creator Dashboard for YouTube Channel Management

**Version:** 1.1  
**Last Updated:** October 2025  
**Status:** Draft - Scope Reduced for True MVP

---

## MVP Scope Philosophy

This PRD has been critically evaluated to ensure **true MVP scope**. The following principles guide our implementation:

### What We're Building (MVP Core)
- ✅ YouTube channel connection via OAuth
- ✅ Direct video upload to YouTube from browser
- ✅ Simple content pillar creation and assignment (max 10 pillars)
- ✅ Basic analytics display (views, subscribers, watch time)
- ✅ Video library with content pillar filtering

### What We're NOT Building (Post-MVP)
- ❌ No Edge Functions or Deno runtime (frontend calls YouTube API directly)
- ❌ No analytics caching (live data from YouTube API only)
- ❌ No thumbnail uploads (use YouTube's auto-generated)
- ❌ No video scheduling (direct publish only)
- ❌ No playlist assignment
- ❌ No auto-refresh (manual refresh only)
- ❌ No complex time range filters
- ❌ No advanced sorting options
- ❌ No Supabase Storage (direct upload to YouTube)

### Technical Simplifications
- Frontend: React + Tailwind (no heavy UI libraries)
- State: React Query (simpler than Redux)
- Backend: Supabase for auth + database only (no server-side code)
- Database: 4 simple tables (profiles, oauth_tokens, content_pillars, videos)
- APIs: Frontend → YouTube API directly (no middleware)

**Result:** Faster development, lower costs, easier to maintain, validates core value proposition.

---

## 1. Executive Summary

The YouTube Creator Dashboard is an MVP (Minimum Viable Product) designed to streamline content management and analytics tracking for YouTube creators. The platform addresses the inefficiency of constantly switching between YouTube Studio and external spreadsheets by providing a unified interface for video uploads, content organization, and performance analytics.

### Key Value Proposition
- **Centralized Management**: Single platform for video publishing and tracking
- **Content Organization**: Assign videos to content pillars for better strategic planning
- **Analytics at a Glance**: Track key metrics (views, watch time, subscriber growth) without switching tools
- **Time Savings**: Reduce context switching and manual data entry

---

## 2. Product Overview

### 2.1 Problem Statement
YouTube creators currently face several challenges:
- Constant context switching between YouTube Studio, analytics, and content planning tools
- Manual tracking of content pillars and video categories in spreadsheets
- Fragmented view of channel performance across multiple platforms
- Time-consuming workflow for video publishing and performance monitoring

### 2.2 Solution
An integrated creator dashboard that:
- Connects directly to YouTube channels via YouTube Data API v3
- Enables video uploads with metadata management
- Organizes content through customizable content pillars
- Displays key analytics in a unified dashboard
- Reduces manual data entry and context switching

### 2.3 Target Users
- Individual YouTube creators managing their own channels
- Small content teams (1-3 people)
- Creators producing 4-20 videos per month
- Users comfortable with web-based tools

---

## 3. User Personas

### Primary Persona: Solo Content Creator
- **Name:** Sarah, Educational Content Creator
- **Channel Size:** 50K subscribers
- **Upload Frequency:** 2-3 videos per week
- **Pain Points:**
  - Spends 30+ minutes tracking video performance in spreadsheets
  - Loses track of which content pillar each video belongs to
  - Difficulty spotting trends across content types
- **Goals:**
  - Reduce time spent on administrative tasks
  - Better understand which content pillars perform best
  - Make data-driven content decisions

### Secondary Persona: Small Team Creator
- **Name:** Marcus, Tech Review Channel Owner
- **Channel Size:** 200K subscribers
- **Upload Frequency:** 5-7 videos per week
- **Pain Points:**
  - Team members lack visibility into content strategy
  - Manual coordination of upload schedules
  - Inconsistent content categorization
- **Goals:**
  - Centralize content planning and execution
  - Enable team collaboration on content strategy
  - Standardize content pillar taxonomy

---

## 4. Features & Requirements

### 4.1 Core Features (MVP)

#### Feature 1: YouTube Channel Connection
**Description:** Secure OAuth2 authentication with YouTube API

**Requirements:**
- **F1.1** Users must be able to connect their YouTube channel via OAuth2
- **F1.2** System must request and store necessary API scopes:
  - `youtube.readonly` - Read channel and video data
  - `youtube.upload` - Upload videos
  - `https://www.googleapis.com/auth/yt-analytics.readonly` - Read analytics data
- **F1.3** Display connected channel name, thumbnail, and subscriber count
- **F1.4** Allow users to disconnect and reconnect their channel
- **F1.5** Handle token refresh automatically when access token expires

**Priority:** P0 (Critical)

#### Feature 2: Video Upload Interface
**Description:** Upload videos directly to YouTube with metadata

**Requirements:**
- **F2.1** Support video file upload (formats: MP4, MOV, AVI, FLV, WMV)
- **F2.2** Maximum file size: 256 GB (YouTube limit)
- **F2.3** Required metadata fields:
  - Title (max 100 characters)
  - Description (max 5,000 characters)
  - Privacy status (Public, Unlisted, Private)
- **F2.4** Optional metadata fields:
  - Tags (max 500 characters total)
  - Category (dropdown from YouTube categories)
- **F2.5** Display upload progress with percentage
- **F2.6** Show upload success/failure notifications
- **F2.7** Assign video to content pillar during upload

**Priority:** P0 (Critical)

**MVP Note:** Direct browser upload to YouTube API. No thumbnail upload, playlist assignment, or scheduling in MVP.

#### Feature 3: Content Pillar Management
**Description:** Create and manage content pillars for video categorization

**Requirements:**
- **F3.1** Users can create custom content pillars (e.g., "Tutorials", "Reviews", "Vlogs")
- **F3.2** Each content pillar must have:
  - Name (required, max 50 characters)
  - Color code (for visual differentiation)
- **F3.3** Users can edit and delete content pillars
- **F3.4** Users can assign/reassign videos to content pillars
- **F3.5** Display content pillar tags on video cards
- **F3.6** Filter videos by content pillar
- **F3.7** Limit: 10 content pillars per user (MVP constraint)

**Priority:** P0 (Critical)

**MVP Note:** Removed description field to simplify. Reduced limit from 20 to 10 pillars.

#### Feature 4: Analytics Dashboard
**Description:** Display key YouTube analytics metrics

**Requirements:**
- **F4.1** Display channel-level metrics:
  - Total subscribers (current)
  - Total views (lifetime)
  - Subscriber change (last 28 days)
- **F4.2** Display video-level metrics:
  - Views per video
  - Publish date
  - Watch time per video
- **F4.3** Display metrics by content pillar:
  - Total views by pillar
  - Video count by pillar
- **F4.4** Manual refresh button to update analytics
- **F4.5** Display last updated timestamp

**Priority:** P0 (Critical)

**MVP Note:** Simplified to essential metrics only. No time range filters, no auto-refresh, no engagement rate calculations. Data fetched on-demand only.

#### Feature 5: Video Library
**Description:** Browse and manage uploaded videos

**Requirements:**
- **F5.1** Display video cards with:
  - Thumbnail
  - Title
  - Publish date
  - View count
  - Content pillar tag
- **F5.2** Sort by upload date (newest first)
- **F5.3** Filter by content pillar
- **F5.4** Search videos by title
- **F5.5** Pagination (20 videos per page)
- **F5.6** Quick actions:
  - View on YouTube (external link)
  - Edit content pillar assignment

**Priority:** P0 (Critical)

**MVP Note:** Simplified to single sort option and basic filtering. Removed privacy status display and detailed analytics view.

### 4.2 Non-Functional Requirements

#### NFR1: Performance
- **NFR1.1** Video upload must show progress within 2 seconds
- **NFR1.2** Dashboard analytics must load within 3 seconds
- **NFR1.3** Video library must load within 2 seconds
- **NFR1.4** Support concurrent video uploads (max 3 simultaneous)

#### NFR2: Security
- **NFR2.1** All API calls must use HTTPS
- **NFR2.2** OAuth tokens must be encrypted at rest
- **NFR2.3** Session timeout after 24 hours of inactivity
- **NFR2.4** Rate limiting: 100 API calls per user per hour
- **NFR2.5** No storage of actual video files (direct upload to YouTube)

#### NFR3: Reliability
- **NFR3.1** 99% uptime SLA
- **NFR3.2** Graceful handling of YouTube API errors
- **NFR3.3** Automatic retry logic for failed uploads (max 3 attempts)
- **NFR3.4** Data backup every 24 hours

#### NFR4: Usability
- **NFR4.1** Mobile-responsive design (desktop-first, mobile-friendly)
- **NFR4.2** Support for modern browsers (Chrome, Firefox, Safari, Edge)
- **NFR4.3** Accessible (WCAG 2.1 Level AA compliance)
- **NFR4.4** Maximum 3 clicks to reach any feature

#### NFR5: Scalability
- **NFR5.1** Support up to 1,000 concurrent users (MVP)
- **NFR5.2** Handle channels with up to 10,000 videos
- **NFR5.3** Database designed for horizontal scaling

---

## 5. Technical Architecture

### 5.1 System Architecture

```
┌─────────────┐
│   Browser   │
│  (React.js) │
└──────┬──────┘
       │
       ├────────────────┬──────────────────┐
       │                │                  │
       │ REST           │ REST             │ Direct
       │                │                  │
┌──────▼──────┐  ┌──────▼──────────┐  ┌──▼────────┐
│  Supabase   │  │   Supabase      │  │ YouTube   │
│    Auth     │  │   Database      │  │ Data API  │
│  (OAuth)    │  │  (PostgreSQL)   │  │    v3     │
└─────────────┘  └─────────────────┘  └───────────┘
                        │
                        │
                 ┌──────▼──────┐
                 │   Tables:   │
                 │  - profiles │
                 │  - pillars  │
                 │  - videos   │
                 └─────────────┘
```

**MVP Simplification:**
- Frontend calls YouTube API directly (no Edge Functions needed)
- Supabase only used for data storage and authentication
- OAuth tokens stored securely in Supabase database
- Analytics fetched on-demand from YouTube API by frontend

### 5.2 Technology Stack

#### Frontend
- **Framework:** React.js 18+ with TypeScript
- **State Management:** React Query (simpler than Redux for MVP)
- **UI Library:** Tailwind CSS with Headless UI (lighter than Material-UI)
- **File Upload:** Native HTML5 file input with YouTube's resumable upload protocol
- **Charts:** Recharts for analytics visualization (lighter bundle)
- **HTTP Client:** Supabase JavaScript Client + Axios for YouTube API

#### Backend (Supabase) - Simplified for MVP
- **Platform:** Supabase (Backend-as-a-Service)
- **Database:** PostgreSQL (built into Supabase)
- **Authentication:** Supabase Auth with Google OAuth provider
- **API:** Auto-generated REST API from Supabase (for internal data only)
- **No Edge Functions needed** - Frontend calls YouTube API directly
- **No Storage needed** - Videos upload directly to YouTube

#### External APIs
- **YouTube Data API v3:** Called directly from frontend for uploads and metadata
- **YouTube Analytics API:** Called directly from frontend for metrics
- **OAuth 2.0:** Google OAuth managed via Supabase Auth

#### Infrastructure & DevOps
- **Hosting:** Vercel or Netlify (frontend only)
- **Backend Hosting:** Supabase Cloud (managed infrastructure)
- **CI/CD:** GitHub Actions
- **Monitoring:** Browser console + Supabase Dashboard (MVP level)

### 5.3 Database Schema (MVP)

**Note:** Supabase uses PostgreSQL with built-in support for Row Level Security (RLS), which should be enabled for all tables to ensure users can only access their own data.

#### Table: profiles
```sql
-- Note: Supabase Auth creates auth.users table automatically
-- This is a public profile table that extends auth.users
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  youtube_channel_id VARCHAR(255) UNIQUE,
  youtube_channel_name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only view and edit their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
```

**MVP Note:** Removed display_name, youtube_channel_thumbnail, and updated_at to simplify.

#### Table: oauth_tokens
```sql
-- Store YouTube OAuth tokens
-- Note: Supabase Auth handles general OAuth, but YouTube tokens need custom storage
CREATE TABLE public.oauth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  access_token TEXT NOT NULL, -- encrypt using pgcrypto
  refresh_token TEXT NOT NULL, -- encrypt using pgcrypto
  expiry_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.oauth_tokens ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access their own tokens
CREATE POLICY "Users can manage own tokens" ON public.oauth_tokens
  USING (auth.uid() = user_id);
```

**MVP Note:** Removed provider, token_type, scope, and updated_at fields to simplify.

#### Table: content_pillars
```sql
CREATE TABLE public.content_pillars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  color_code VARCHAR(7), -- hex color
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, name)
);

-- Enable Row Level Security
ALTER TABLE public.content_pillars ENABLE ROW LEVEL SECURITY;

-- Policy: Users can manage their own content pillars
CREATE POLICY "Users can manage own pillars" ON public.content_pillars
  USING (auth.uid() = user_id);
```

**MVP Note:** Removed description and updated_at fields to simplify.

#### Table: videos
```sql
CREATE TABLE public.videos (
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

-- Create index for faster queries
CREATE INDEX idx_videos_user_id ON public.videos(user_id);
CREATE INDEX idx_videos_content_pillar_id ON public.videos(content_pillar_id);
```

**MVP Note:** Removed description, thumbnail_url, privacy_status, and updated_at. Analytics fetched live from YouTube API instead of caching.

**MVP Note:** Analytics tables removed. All analytics data fetched live from YouTube API on-demand.

### 5.4 API Architecture with Supabase - Simplified for MVP

**MVP Note:** Analytics tables removed. All analytics data fetched live from YouTube API on-demand.

### 5.4 API Architecture with Supabase - Simplified for MVP

#### Supabase Auto-Generated REST API
Supabase automatically generates a RESTful API for database tables:

**Database Tables (via Supabase REST API):**
- `GET /rest/v1/profiles` - Get user profile (filtered by RLS)
- `PATCH /rest/v1/profiles?id=eq.{id}` - Update profile
- `GET /rest/v1/content_pillars` - List content pillars (filtered by RLS)
- `POST /rest/v1/content_pillars` - Create content pillar
- `PATCH /rest/v1/content_pillars?id=eq.{id}` - Update content pillar
- `DELETE /rest/v1/content_pillars?id=eq.{id}` - Delete content pillar
- `GET /rest/v1/videos` - List videos with filters
- `POST /rest/v1/videos` - Create video record
- `PATCH /rest/v1/videos?id=eq.{id}` - Update video pillar assignment
- `GET /rest/v1/oauth_tokens` - Get YouTube OAuth tokens (encrypted)

#### Supabase Auth Endpoints
- `POST /auth/v1/signup` - User registration
- `POST /auth/v1/token?grant_type=password` - Login
- `POST /auth/v1/logout` - Logout
- `GET /auth/v1/user` - Get current user

#### YouTube API (Called Directly from Frontend)
**No Edge Functions Needed for MVP** - Frontend makes direct calls to YouTube API using stored OAuth tokens:

- YouTube OAuth flow handled by Supabase Auth + Google provider
- Video uploads via YouTube Data API v3 from browser
- Analytics fetched via YouTube Analytics API from browser
- Token refresh handled by frontend when needed

**Benefits:**
- Simpler architecture (no server-side code to deploy)
- Lower latency (direct API calls)
- Easier debugging (all logic in frontend)
- Reduced costs (no Edge Function execution costs)

### 5.5 Third-Party Integration: YouTube Data API v3

#### Required API Operations

**Video Management:**
- `videos.insert` - Upload video
- `videos.list` - Retrieve video details
- `videos.update` - Update video metadata
- `videos.delete` - Delete video

**Analytics:**
- `reports.query` (YouTube Analytics API) - Retrieve channel and video analytics
- Metrics: `views`, `estimatedMinutesWatched`, `averageViewDuration`, `subscribersGained`, `subscribersLost`

**Channel Information:**
- `channels.list` - Get channel metadata

**Quota Management:**
- Daily quota limit: 10,000 units (default, can be increased via Google Cloud Console)
- Upload operation: ~1,600 units per video
- Analytics query: 1 unit per query
- Strategy: Cache analytics data, implement rate limiting, request quota increase for production

---

## 6. User Experience & Interface Design

### 6.1 Key User Flows

#### Flow 1: First-Time User Onboarding
1. User lands on welcome page
2. Click "Connect YouTube Channel"
3. Redirected to Google OAuth consent screen
4. Grant permissions
5. Redirected back to dashboard
6. Welcome modal: "Create your first content pillar"
7. User creates 2-3 initial content pillars
8. Dashboard displays with empty state

#### Flow 2: Video Upload
1. User clicks "Upload Video" button from dashboard
2. Upload modal opens
3. User drags/drops or selects video file
4. Upload begins, progress bar shows
5. While uploading, user fills in:
   - Title (required)
   - Description
   - Tags
   - Content pillar selection (required)
   - Privacy status
6. User clicks "Publish"
7. Video publishes to YouTube
8. Success notification shows
9. Video appears in library immediately

#### Flow 3: Viewing Analytics
1. User lands on dashboard
2. Top cards show: Total Subscribers, Total Views, Watch Time, Subscriber Growth
3. Line chart shows subscriber growth over selected time period
4. Below: Content Pillar Performance section
   - Cards for each content pillar showing views, watch time
5. Below: Recent Videos section
   - Table/grid of recent videos with key metrics
6. User can click "View Details" on any video
7. Modal opens with detailed video analytics

### 6.2 Page Structure

#### Dashboard (Home Page)
```
┌─────────────────────────────────────────────┐
│ Header: Logo | Upload Video | Profile       │
├─────────────────────────────────────────────┤
│ Connected Channel: [Avatar] Channel Name    │
│ 123K subscribers                            │
├─────────────────────────────────────────────┤
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐   │
│ │ 123K  │ │ 5.2M  │ │ 12.5K │ │ +1.2K │   │
│ │Subs   │ │Views  │ │Watch  │ │ Subs  │   │
│ │       │ │       │ │Hours  │ │(28d)  │   │
│ └───────┘ └───────┘ └───────┘ └───────┘   │
├─────────────────────────────────────────────┤
│ Subscriber Growth [📊 Line Chart]          │
│ [7d] [28d] [90d]                           │
├─────────────────────────────────────────────┤
│ Content Pillar Performance                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│ │Tutorial  │ │ Review   │ │  Vlog    │    │
│ │1.2M views│ │ 890K v.  │ │ 650K v.  │    │
│ │15 videos │ │ 12 vid.  │ │ 8 vid.   │    │
│ └──────────┘ └──────────┘ └──────────┘    │
├─────────────────────────────────────────────┤
│ Recent Videos                               │
│ [Search] [Filter by Pillar ▼] [Sort ▼]    │
│ ┌─────────────────────────────────────┐   │
│ │ [Thumb] Title | 12K views | Tutorial│   │
│ │ Published 2 days ago                │   │
│ └─────────────────────────────────────┘   │
│ [More videos...]                           │
└─────────────────────────────────────────────┘
```

#### Video Library Page
```
┌─────────────────────────────────────────────┐
│ Header: Logo | Upload Video | Profile       │
├─────────────────────────────────────────────┤
│ Video Library                               │
│ [Search...] [Pillar ▼] [Status ▼] [Sort ▼]│
├─────────────────────────────────────────────┤
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐           │
│ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│           │
│ │Title│ │Title│ │Title│ │Title│           │
│ │12K  │ │8.5K │ │15K  │ │6.2K │           │
│ │views│ │views│ │views│ │views│           │
│ │[🏷️] │ │[🏷️] │ │[🏷️] │ │[🏷️] │           │
│ └─────┘ └─────┘ └─────┘ └─────┘           │
│ [Pagination: 1 2 3 ... 10]                 │
└─────────────────────────────────────────────┘
```

#### Content Pillars Management Page
```
┌─────────────────────────────────────────────┐
│ Header: Logo | Upload Video | Profile       │
├─────────────────────────────────────────────┤
│ Content Pillars                             │
│ [+ Create New Pillar]                       │
├─────────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐   │
│ │ 🟦 Tutorials                        │   │
│ │ Educational content and how-tos     │   │
│ │ 15 videos | 1.2M views             │   │
│ │ [Edit] [Delete]                     │   │
│ └─────────────────────────────────────┘   │
│ ┌─────────────────────────────────────┐   │
│ │ 🟩 Product Reviews                  │   │
│ │ In-depth product analysis           │   │
│ │ 12 videos | 890K views             │   │
│ │ [Edit] [Delete]                     │   │
│ └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## 7. MVP Scope & Phased Approach - Simplified

**Total Timeline: 4-6 weeks** (reduced from 10 weeks due to scope reduction)

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Set up infrastructure and authentication

**Deliverables:**
- Frontend setup (React + TypeScript + Tailwind)
- Supabase project setup (auth + database)
- Google OAuth integration via Supabase
- Basic database tables (4 tables)
- User profile creation

**Success Criteria:**
- Users can sign up and log in
- Users can connect YouTube channel via OAuth
- Channel name displays correctly
- OAuth tokens stored securely in database

**MVP Simplification:** No Edge Functions, no Storage, direct frontend setup only.

### Phase 2: Core Features (Weeks 3-4)
**Goal:** Implement essential features

**Deliverables:**
- Content pillar CRUD (simplified: name + color only)
- Video upload to YouTube (direct from browser)
- Video library display (basic list view)
- Assign videos to content pillars
- Basic filtering by pillar

**Success Criteria:**
- Users can create up to 10 content pillars
- Users can upload videos directly to YouTube
- Videos appear in library after upload
- Users can assign/filter videos by pillar

**MVP Simplification:** No thumbnail upload, no scheduling, no playlist assignment, limit to 10 pillars.

### Phase 3: Analytics & Polish (Weeks 5-6)
**Goal:** Add analytics and launch-ready polish

**Deliverables:**
- Fetch analytics from YouTube API (on-demand only)
- Display channel metrics (subscribers, views, watch time)
- Display video metrics (views, watch time per video)
- Display pillar metrics (views and count per pillar)
- Manual refresh button
- Basic error handling and loading states
- Responsive design

**Success Criteria:**
- Dashboard shows current subscriber count and views
- Analytics update when user clicks refresh
- Content pillar cards show view totals
- Works on desktop and mobile
- 3-5 beta users successfully onboard

**MVP Simplification:** No caching, no auto-refresh, no time filters, no charts (just numbers), live data only.

### Post-MVP Features (Future Phases)
Deferred to validate core value proposition first:

- **Phase 4:** Analytics Enhancement
  - Analytics caching for performance
  - Time range filters (7d, 28d, 90d)
  - Charts and visualizations
  - Engagement metrics (likes, comments)
  
- **Phase 5:** Upload Enhancement
  - Thumbnail upload
  - Video scheduling
  - Playlist assignment
  - Batch uploads

- **Phase 6:** Advanced Features
  - Auto-refresh analytics
  - Multiple sort options
  - Advanced filters
  - Content pillar descriptions
  - Team collaboration
  - Title/description optimization suggestions
  - Best time to post recommendations
  - Trending topic alerts

---

## 8. Success Metrics & KPIs

### 8.1 Product Metrics

#### Activation Metrics
- **OAuth Connection Success Rate:** >95% of users successfully connect YouTube channel
- **Time to First Upload:** <5 minutes from account creation
- **Content Pillar Creation Rate:** >80% of users create at least 2 content pillars

#### Engagement Metrics
- **Daily Active Users (DAU):** Target 200 DAU by end of Month 3
- **Weekly Active Users (WAU):** Target 500 WAU by end of Month 3
- **Average Session Duration:** >10 minutes per session
- **Feature Usage:**
  - Video upload: 60% of users upload at least 1 video per week
  - Analytics view: 80% of users check analytics at least 3x per week

#### Retention Metrics
- **Day 1 Retention:** >60%
- **Day 7 Retention:** >40%
- **Day 30 Retention:** >25%

#### Performance Metrics
- **Page Load Time:** <3 seconds for dashboard
- **Video Upload Success Rate:** >98%
- **API Error Rate:** <1% of requests

### 8.2 Business Metrics

#### User Acquisition
- **Target Users (3 months):** 100-200 active creators
- **User Acquisition Cost (UAC):** TBD based on marketing strategy
- **Referral Rate:** >10% of users refer another creator

#### User Satisfaction
- **Net Promoter Score (NPS):** Target >40
- **Customer Satisfaction (CSAT):** Target >4.0/5.0
- **Feature Request Submissions:** >5 quality requests per week

#### Revenue (if monetization planned post-MVP)
- **Conversion Rate:** Free to paid (future)
- **Average Revenue Per User (ARPU):** TBD
- **Churn Rate:** <10% monthly (future)

---

## 9. Risks & Mitigations

### Risk 1: YouTube API Quota Limits
**Impact:** High  
**Likelihood:** Medium

**Description:** YouTube API has daily quota of 10,000 units. Video uploads consume ~1,600 units each.

**Mitigation:**
- Implement aggressive caching for analytics (refresh every 6 hours)
- Use batch API requests where possible
- Monitor quota usage and alert users approaching limits
- Request quota increase from Google if needed
- Implement queue system for uploads during peak times

### Risk 2: OAuth Token Expiry/Revocation
**Impact:** High  
**Likelihood:** Medium

**Description:** Users may revoke access or tokens may expire, breaking integration.

**Mitigation:**
- Implement automatic token refresh
- Graceful error handling with clear user messaging
- Easy re-authentication flow
- Monitor token health and proactively refresh

### Risk 3: Data Privacy & Security
**Impact:** Critical  
**Likelihood:** Low

**Description:** Breach of user data or OAuth tokens could compromise YouTube channels.

**Mitigation:**
- Encrypt OAuth tokens at rest
- Use HTTPS for all communications
- Regular security audits
- Minimal data retention policy
- Compliance with GDPR/CCPA
- Bug bounty program (post-launch)

### Risk 4: Competitive Alternatives
**Impact:** Medium  
**Likelihood:** Medium

**Description:** YouTube Studio may add similar features, or competitors may launch first.

**Mitigation:**
- Focus on unique value proposition (content pillars)
- Fast iteration and user feedback incorporation
- Build strong user community
- Plan differentiation features for post-MVP

### Risk 5: Video Upload Failures
**Impact:** High  
**Likelihood:** Medium

**Description:** Large video files may fail to upload due to network issues.

**Mitigation:**
- Implement resumable uploads
- Retry logic with exponential backoff
- Clear error messages and recovery instructions
- Save draft metadata even if upload fails
- Client-side file validation before upload starts

---

## 10. Dependencies & Assumptions

### 10.1 External Dependencies
- **YouTube Data API v3:** Must remain stable and available
- **YouTube Analytics API:** Required for metrics
- **Google OAuth 2.0:** Required for authentication
- **Supabase Platform:** Managed backend infrastructure (database, auth, storage, edge functions)
- **Third-party libraries:** React, Supabase JavaScript Client, TypeScript continued support

### 10.2 Assumptions
- Users have existing YouTube channels with upload permissions
- Users have Google accounts for OAuth
- Users primarily use desktop/laptop for video uploads
- Users upload videos already edited and ready for publishing
- Average video file size: 1-5 GB
- Users comfortable with web-based applications
- Internet bandwidth sufficient for video uploads (5+ Mbps upload speed)
- YouTube API terms of service allow this use case
- No significant changes to YouTube API during development

---

## 11. Compliance & Legal Considerations

### 11.1 API Terms of Service
- Comply with YouTube API Terms of Service
- Display YouTube branding per guidelines
- Respect user data and privacy policies
- Do not cache video files
- Honor user's YouTube channel permissions

### 11.2 Data Privacy
- **GDPR Compliance:** For European users
  - Right to access data
  - Right to delete data
  - Data portability
  - Cookie consent
- **CCPA Compliance:** For California users
  - Disclosure of data collection
  - Opt-out mechanisms
- Privacy policy clearly stating data usage

### 11.3 Content Policy
- No responsibility for user-uploaded content
- Users must comply with YouTube Community Guidelines
- Terms of Service outlining acceptable use
- DMCA takedown process (if hosting any content)

---

## 12. Future Considerations

### 12.1 Scalability
- Multi-channel support (agencies managing multiple creators)
- Team collaboration features
- White-label solution for agencies
- API for third-party integrations

### 12.2 Monetization Options
- **Freemium Model:**
  - Free: 1 channel, 5 content pillars, basic analytics
  - Pro: Unlimited pillars, advanced analytics, team features ($9.99/mo)
  - Agency: Multi-channel, white-label, API access ($49.99/mo)
- **One-time purchase:** Lifetime access ($99)
- **Enterprise:** Custom pricing for large agencies

### 12.3 Platform Expansion
- Integrate with other platforms (TikTok, Instagram, Twitch)
- Cross-platform analytics comparison
- Cross-posting features
- Multi-platform content calendar

---

## 13. Open Questions

1. **Payment Model:** Will MVP be free or paid? Beta pricing strategy?
2. **Team Features:** Single-user only or support for collaborators in MVP?
3. **Video Storage:** Any need to store videos locally before upload, or direct-to-YouTube only?
4. **Analytics Depth:** Should MVP include YouTube Studio's detailed analytics or just high-level overview?
5. **Mobile App:** Web-only MVP, or native mobile apps required?
6. **Onboarding:** Self-service or assisted onboarding for beta users?
7. **Support:** Email support, live chat, or community forum?
8. **Localization:** English-only MVP or multi-language support?

---

## 14. Appendices

### Appendix A: Glossary
- **Content Pillar:** A thematic category for organizing videos (e.g., "Tutorials", "Reviews")
- **Watch Time:** Total minutes viewers spent watching a video or channel
- **Subscriber Growth:** Net change in subscriber count over a time period
- **OAuth 2.0:** Open standard for access delegation (secure API authorization)
- **MVP:** Minimum Viable Product - simplest version with core features

### Appendix B: References
- [YouTube Data API v3 Documentation](https://developers.google.com/youtube/v3)
- [YouTube Analytics API Documentation](https://developers.google.com/youtube/analytics)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [YouTube API Quota Calculator](https://developers.google.com/youtube/v3/determine_quota_cost)

### Appendix C: Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 2025 | Product Team | Initial PRD draft for MVP |

---

**Document Status:** Draft - Pending stakeholder review  
**Next Review Date:** TBD  
**Approvers:** Product Lead, Engineering Lead, Design Lead

---

*End of Document*
