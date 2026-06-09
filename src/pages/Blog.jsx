import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShieldAlert } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import BlogCard from '../components/BlogCard';
import { blogs, blogCategories } from '../data/blogs';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Wellness Whispers"
        subtitle="Guides for Self-Care & Healing"
        image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&q=80"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <div className="container-max page-padding mt-12 space-y-12">
        
        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-luxury border border-aqua-100/10">
          
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search wellness guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-colors text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-aqua-400 text-white shadow-md'
                    : 'bg-spa-light hover:bg-aqua-55 text-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Blogs Grid */}
        <div>
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-luxury space-y-4">
              <ShieldAlert size={48} className="text-gray-300 mx-auto" />
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">No Articles Found</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto font-poppins">
                We couldn't find any articles matching "{searchQuery}". Try modifying your search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="btn-primary"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
