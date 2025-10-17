// Database types based on PRD schema

export interface Profile {
  id: string
  email: string
  youtube_channel_id: string | null
  youtube_channel_name: string | null
  created_at: string
}

export interface OAuthToken {
  id: string
  user_id: string
  access_token: string
  refresh_token: string
  expiry_date: string | null
  created_at: string
}

export interface ContentPillar {
  id: string
  user_id: string
  name: string
  color_code: string | null
  created_at: string
}

export interface Video {
  id: string
  user_id: string
  youtube_video_id: string
  content_pillar_id: string | null
  title: string | null
  published_at: string | null
  created_at: string
}

// YouTube API types

export interface YouTubeChannel {
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
    thumbnails: {
      default: { url: string }
      medium: { url: string }
      high: { url: string }
    }
  }
  statistics: {
    viewCount: string
    subscriberCount: string
    videoCount: string
  }
}

export interface YouTubeVideo {
  id: string
  snippet: {
    title: string
    description: string
    publishedAt: string
    thumbnails: {
      default: { url: string }
      medium: { url: string }
      high: { url: string }
    }
    categoryId: string
    tags?: string[]
  }
  statistics: {
    viewCount: string
    likeCount: string
    commentCount: string
  }
  contentDetails: {
    duration: string
  }
}

export interface YouTubeAnalytics {
  views: number
  estimatedMinutesWatched: number
  averageViewDuration: number
  subscribersGained: number
  subscribersLost: number
}
