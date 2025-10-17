import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="space-y-6">
          {/* Channel Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Channel Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Connect your YouTube channel to see your analytics here.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Subscribers
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                --
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Views
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                --
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Watch Time (hours)
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                --
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Subscriber Change (28d)
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                --
              </p>
            </div>
          </div>

          {/* Content Pillar Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Content Pillar Performance
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create content pillars to organize your videos.
            </p>
          </div>

          {/* Recent Videos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Recent Videos
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your recent videos will appear here after you upload them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
