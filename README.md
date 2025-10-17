# YouTube Creator Dashboard

A platform to manage your brand on YouTube - MVP Starter Template

## Overview

This is a Next.js starter template for building a YouTube Creator Dashboard based on the [MVP PRD](./documentation/MVP_Creator_Dashboard_PRD.md). The dashboard allows YouTube creators to:

- 📊 View channel analytics and performance metrics
- 🎥 Upload videos directly to YouTube
- 🏷️ Organize content with customizable content pillars
- 📚 Manage video library with filtering and search
- 🔐 Secure OAuth2 authentication with YouTube

## Tech Stack

- **Frontend:** Next.js 15 with App Router, React 19, TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Query (@tanstack/react-query)
- **Backend:** Supabase (Database, Authentication)
- **APIs:** YouTube Data API v3, YouTube Analytics API
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)
- A Supabase account
- Google Cloud Console account (for YouTube API)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aristidesnakos/YouTubeCreator.git
   cd YouTubeCreator
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the schema from `database/schema.sql`
   - Enable Google OAuth provider in Authentication settings

4. **Set up YouTube API:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable YouTube Data API v3 and YouTube Analytics API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs

5. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your credentials in `.env.local`

6. **Run the development server:**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
YouTubeCreator/
├── app/                      # Next.js app directory
│   ├── dashboard/           # Dashboard page
│   ├── library/             # Video library page
│   ├── pillars/             # Content pillars management
│   ├── upload/              # Video upload page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── lib/                     # Utility functions
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helper functions
├── types/                   # TypeScript type definitions
│   └── index.ts            # Database and API types
├── database/               # Database schema
│   └── schema.sql          # Supabase SQL schema
├── documentation/          # Product documentation
│   └── MVP_Creator_Dashboard_PRD.md  # Product requirements
└── public/                 # Static assets
```

## Features (MVP Scope)

Based on the [PRD](./documentation/MVP_Creator_Dashboard_PRD.md), this template includes:

### ✅ Implemented Structure
- Next.js 15 with App Router setup
- TypeScript configuration
- Tailwind CSS styling
- Supabase client setup
- Database schema (profiles, oauth_tokens, content_pillars, videos)
- Placeholder pages for all main features
- Type definitions for database and YouTube API

### 🚧 To Be Implemented
- YouTube OAuth2 authentication flow
- Video upload to YouTube with progress tracking
- Content pillar CRUD operations
- Video library with search and filtering
- YouTube Analytics API integration
- Channel metrics dashboard
- Error handling and loading states
- Responsive design improvements

## Development

### Build for Production
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## Environment Variables

See `.env.example` for required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `NEXT_PUBLIC_YOUTUBE_API_KEY` - Your YouTube Data API key
- `NEXT_PUBLIC_YOUTUBE_CLIENT_ID` - Your Google OAuth client ID
- `NEXT_PUBLIC_YOUTUBE_CLIENT_SECRET` - Your Google OAuth client secret
- `NEXT_PUBLIC_APP_URL` - Your application URL (for OAuth redirects)

## Database Schema

The database schema is defined in `database/schema.sql` and includes:

- **profiles** - User profile information and YouTube channel connection
- **oauth_tokens** - YouTube OAuth tokens for API access
- **content_pillars** - Content categorization (max 10 per user)
- **videos** - Video metadata and content pillar assignments

See the [PRD](./documentation/MVP_Creator_Dashboard_PRD.md) for detailed schema documentation.

## Contributing

This is a starter template. Feel free to fork and customize for your needs.

## License

MIT

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [YouTube Data API](https://developers.google.com/youtube/v3)
- [YouTube Analytics API](https://developers.google.com/youtube/analytics)
- [Tailwind CSS](https://tailwindcss.com/docs)
