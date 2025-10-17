import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            YouTube Creator Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A platform to manage your brand on YouTube
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Link
            href="/dashboard"
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Dashboard →</h2>
            <p className="text-gray-600 dark:text-gray-400">
              View your channel analytics and performance metrics
            </p>
          </Link>

          <Link
            href="/library"
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Video Library →</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Browse and manage your uploaded videos
            </p>
          </Link>

          <Link
            href="/pillars"
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Content Pillars →</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Organize your content into strategic pillars
            </p>
          </Link>

          <Link
            href="/upload"
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Upload Video →</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Upload new videos directly to YouTube
            </p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
            ⚠️ Setup Required
          </h3>
          <p className="text-yellow-800 dark:text-yellow-300">
            This is a starter template. You need to:
          </p>
          <ul className="mt-2 list-disc list-inside text-yellow-800 dark:text-yellow-300 space-y-1">
            <li>Set up Supabase project and configure environment variables</li>
            <li>Configure YouTube API credentials</li>
            <li>Run database migrations</li>
            <li>Implement OAuth authentication flow</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
