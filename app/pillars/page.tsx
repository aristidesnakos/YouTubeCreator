import Link from 'next/link'

export default function Pillars() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Content Pillars
          </h1>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              + Create Pillar
            </button>
            <Link
              href="/"
              className="px-6 py-3 text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Organize Your Content
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create up to 10 content pillars to categorize your videos. Each pillar represents a thematic category like "Tutorials", "Reviews", or "Vlogs".
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                You haven't created any content pillars yet.
              </p>
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Create Your First Pillar
              </button>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
            💡 Content Pillar Tips
          </h3>
          <ul className="list-disc list-inside text-blue-800 dark:text-blue-300 space-y-1">
            <li>Choose clear, descriptive names for your pillars</li>
            <li>Use different colors to easily distinguish between pillars</li>
            <li>Limit to 3-5 main pillars for better focus</li>
            <li>You can always edit or reorganize pillars later</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
