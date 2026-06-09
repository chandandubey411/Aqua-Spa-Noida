import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { blogs } from '../data/blogs';
import { useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) setQuery('');
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const serviceResults = query.length > 1
    ? services.filter(s => s.title.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];
  const blogResults = query.length > 1
    ? blogs.filter(b => b.title.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
          onClick={onClose}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl glass-card p-6 shadow-luxury-lg"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <Search size={20} className="text-aqua-400 flex-shrink-0" />
              <input autoFocus value={query} onChange={e => setQuery(e.target.value)}
                placeholder="Search services, blogs, treatments..."
                className="flex-1 text-lg bg-transparent text-gray-800 dark:text-white placeholder-gray-400 outline-none" />
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {query.length > 1 && (
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-4">
                {serviceResults.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</div>
                    {serviceResults.map(s => (
                      <Link key={s.id} to={`/services/${s.slug}`} onClick={onClose}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-aqua-50 dark:hover:bg-aqua-900/20 transition-colors">
                        <img src={s.image} alt={s.title} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <div className="text-sm font-medium text-gray-800 dark:text-white">{s.title}</div>
                          <div className="text-xs text-gray-500">{s.category} · ${s.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {blogResults.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Blog Articles</div>
                    {blogResults.map(b => (
                      <Link key={b.id} to={`/blog/${b.slug}`} onClick={onClose}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-aqua-50 dark:hover:bg-aqua-900/20 transition-colors">
                        <img src={b.image} alt={b.title} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <div className="text-sm font-medium text-gray-800 dark:text-white line-clamp-1">{b.title}</div>
                          <div className="text-xs text-gray-500">{b.category}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {serviceResults.length === 0 && blogResults.length === 0 && (
                  <div className="text-center py-6 text-gray-400">No results found for "{query}"</div>
                )}
              </div>
            )}

            {query.length === 0 && (
              <div className="flex flex-wrap gap-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                <span className="text-xs text-gray-400 mr-2">Popular:</span>
                {['Swedish Massage', 'Facial', 'Couples Spa', 'Hot Stone', 'Aromatherapy'].map(term => (
                  <button key={term} onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 rounded-full bg-aqua-50 dark:bg-aqua-900/20 text-aqua-600 dark:text-aqua-400 hover:bg-aqua-100 transition-colors">
                    {term}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
