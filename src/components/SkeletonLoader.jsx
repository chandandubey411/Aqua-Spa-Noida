export default function SkeletonLoader({ type = 'card', count = 3 }) {
  const cards = Array(count).fill(0);

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {cards.map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury border border-aqua-100/10 animate-pulse">
            <div className="h-56 bg-gray-200 dark:bg-gray-800" />
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/6" />
              </div>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
              </div>
              <div className="flex gap-2 pt-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
              </div>
              <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-xl flex-1" />
                <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-xl flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className="space-y-4 w-full">
        {cards.map((_, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-glass border border-aqua-100/10 animate-pulse">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-lg flex-shrink-0" />
            <div className="flex-1 space-y-3 py-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3" />
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
