import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

export default function BlogCard({ blog, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 ${featured ? 'md:flex' : ''}`}>

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-56 md:h-auto' : 'h-52'}`}>
        <img src={blog.image} alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
          {blog.category}
        </span>
        {blog.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'linear-gradient(135deg, #FFD166, #FFC233)', color: '#1A1A1A' }}>
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col justify-between ${featured ? 'md:w-1/2' : ''}`}>
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1"><Calendar size={12} />{blog.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} />{blog.readTime}</span>
          <span className="flex items-center gap-1"><User size={12} />{blog.author}</span>
        </div>

        <h3 className={`font-playfair font-bold text-gray-900 dark:text-white group-hover:text-aqua-600 transition-colors mb-3 ${featured ? 'text-xl' : 'text-lg'} leading-snug`}>
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {blog.tags.slice(0, 3).map(tag => (
            <span key={tag} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-aqua-50 dark:bg-aqua-900/20 text-aqua-600 dark:text-aqua-400">
              <Tag size={10} />{tag}
            </span>
          ))}
        </div>

        {/* Author & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full object-cover ring-2 ring-aqua-200" />
            <div>
              <div className="text-xs font-medium text-gray-800 dark:text-white">{blog.author}</div>
              <div className="text-xs text-gray-400">{blog.authorRole}</div>
            </div>
          </div>
          <Link to={`/blog/${blog.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-aqua-400 hover:text-aqua-600 transition-colors group-hover:gap-2">
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
