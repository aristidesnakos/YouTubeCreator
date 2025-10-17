import Link from 'next/link'

export default function Upload() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Upload Video
          </h1>
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <form className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Video File *
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-primary-500 transition-colors cursor-pointer">
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Drag and drop your video file here, or click to browse
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Supported formats: MP4, MOV, AVI, FLV, WMV (max 256 GB)
                </p>
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Title * <span className="text-gray-500">(max 100 characters)</span>
              </label>
              <input
                type="text"
                id="title"
                maxLength={100}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter video title"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Description <span className="text-gray-500">(max 5,000 characters)</span>
              </label>
              <textarea
                id="description"
                rows={6}
                maxLength={5000}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter video description"
              />
            </div>

            {/* Content Pillar */}
            <div>
              <label htmlFor="pillar" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Content Pillar *
              </label>
              <select
                id="pillar"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a content pillar</option>
              </select>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                Create content pillars in the <Link href="/pillars" className="text-primary-600 hover:underline">Content Pillars</Link> page first.
              </p>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Tags <span className="text-gray-500">(comma-separated, max 500 characters total)</span>
              </label>
              <input
                type="text"
                id="tags"
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., tutorial, beginner, programming"
              />
            </div>

            {/* Privacy Status */}
            <div>
              <label htmlFor="privacy" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Privacy Status *
              </label>
              <select
                id="privacy"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
                <option value="private">Private</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a category</option>
                <option value="1">Film & Animation</option>
                <option value="2">Autos & Vehicles</option>
                <option value="10">Music</option>
                <option value="15">Pets & Animals</option>
                <option value="17">Sports</option>
                <option value="19">Travel & Events</option>
                <option value="20">Gaming</option>
                <option value="22">People & Blogs</option>
                <option value="23">Comedy</option>
                <option value="24">Entertainment</option>
                <option value="25">News & Politics</option>
                <option value="26">Howto & Style</option>
                <option value="27">Education</option>
                <option value="28">Science & Technology</option>
                <option value="29">Nonprofits & Activism</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Upload to YouTube
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
