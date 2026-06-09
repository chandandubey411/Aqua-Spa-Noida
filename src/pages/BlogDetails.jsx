import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, Calendar, Tag, ArrowLeft, ArrowRight, BookOpen, Share2 } from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { blogs } from '../data/blogs';
import PageBanner from '../components/PageBanner';

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white">Article Not Found</h2>
        <p className="text-gray-500 font-poppins">The wellness guide you are looking for does not exist.</p>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  // Get related blogs (same category, different id)
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      
      {/* Blog Details Header Banner */}
      <div className="relative h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-spa-light dark:from-black via-gray-950/70 to-transparent" />
        </div>

        <div className="container-max page-padding relative z-10 w-full pb-8 md:pb-12 text-white">
          <div className="max-w-4xl space-y-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/85 hover:text-white mb-2 transition-all text-sm font-semibold uppercase tracking-wider">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-aqua-400 text-white">
              {blog.category}
            </span>

            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {blog.title}
            </h1>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 pt-2 font-poppins">
              <div className="flex items-center gap-2">
                <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full object-cover border border-white/20" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog Article Content */}
      <div className="container-max page-padding mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article Text */}
          <div className="lg:col-span-2 space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-luxury border border-aqua-100/10 space-y-6 text-gray-700 dark:text-gray-300 font-poppins leading-relaxed"
            >
              {/* Excerpt callout */}
              <p className="text-lg font-medium text-aqua-600 dark:text-aqua-400 italic border-l-4 border-aqua-400 pl-4 mb-8">
                {blog.excerpt}
              </p>

              {/* Main content body paragraphs */}
              <p className="text-base">
                Maintaining wellness in the fast-paced, high-stress environment of modern cities like Noida presents unique challenges. While we often focus on clean eating and gym memberships, true rejuvenation involves addressing physical, mental, and biochemical states simultaneously. This guide highlights standard science-backed habits that can restore systemic balance.
              </p>
              
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mt-8">The Physiology of Stress and Relief</h3>
              <p>
                When stress becomes chronic, our adrenal glands continuously release cortisol and adrenaline. This triggers minor systemic inflammation, slows cell turnover, tightens deep muscle bands, and causes insomnia. Therapeutic spa sessions, particularly hot stone treatments and targeted massage strokes, stimulate the vagus nerve. This triggers the parasympathetic nervous system, lowers heart rates, reduces cortisol, and allows muscles to heal.
              </p>

              <blockquote className="my-6 p-6 rounded-2xl bg-aqua-50/50 dark:bg-aqua-950/20 border border-aqua-100/10 font-medium text-center italic text-aqua-700 dark:text-aqua-300">
                "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time."
              </blockquote>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mt-8">Holistic Steps to Incorporate Today</h3>
              <p>
                1. <strong>Consistent Hydration:</strong> Drinking pure mineralized water keeps tissues supple and accelerates detoxification processes during and after deep body scrubs.<br />
                2. <strong>Mindful Breathing:</strong> Just 5 minutes of focused diaphragmatic breathing before sleeping can lower blood pressure and help relax tension areas.<br />
                3. <strong>Detoxifying Aromatherapy:</strong> Utilizing therapeutic-grade lavender or eucalyptus extracts in diffuser arrays helps balance mood and supports healthy respiration.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mt-8">Conclusion</h3>
              <p>
                Wellness is a long-term commitment. Taking short breaks to unplug, refresh your muscles, and hydrate is critical. Incorporating self-care and professional treatments helps sustain performance and supports overall wellbeing.
              </p>

              {/* Tags and Share */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-800 mt-12">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag size={16} className="text-aqua-400" />
                  {blog.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-spa-light dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Mock Social Share */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Share2 size={12} /> Share
                  </span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
                      <Facebook size={14} className="fill-current" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-sky-400 hover:bg-sky-500 text-white flex items-center justify-center transition-colors">
                      <Twitter size={14} className="fill-current" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors">
                      <Linkedin size={14} className="fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Author Profile Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-luxury border border-aqua-100/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <img src={blog.authorImage} alt={blog.author} className="w-20 h-20 rounded-full object-cover border-2 border-aqua-300" />
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <h4 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">{blog.author}</h4>
                  <span className="text-xs text-aqua-400 font-semibold uppercase tracking-wider">({blog.authorRole})</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-poppins">
                  Dedicated to sharing standard self-care practices, aromatherapy advice, and wellness insights. Assisting guests in achieving physical and mental balance.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - Sticky widgets */}
          <div className="space-y-8">
            
            {/* Quick Consultation CTA */}
            <div className="bg-aqua-900 text-white p-8 rounded-3xl shadow-luxury border border-aqua-800 text-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 space-y-4">
                <BookOpen size={36} className="text-gold-400 mx-auto animate-bounce" />
                <h3 className="font-playfair text-xl font-bold">Interested in a Treatment?</h3>
                <p className="font-poppins text-xs text-aqua-100 leading-relaxed">
                  Book a session with one of our certified specialists to receive a custom oils and skincare treatment plan.
                </p>
                <Link to="/appointment" className="w-full btn-gold inline-flex justify-center py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-md">
                  Book Appointment Now
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Related Blogs Carousel */}
        {relatedBlogs.length > 0 && (
          <div className="mt-24 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="section-subtitle">Read More</span>
              <h2 className="section-title">Related Articles</h2>
              <div className="luxury-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((rel, idx) => (
                <div
                  key={rel.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury border border-aqua-100/10 hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-3">
                    <span className="text-xs font-semibold text-aqua-400 uppercase tracking-wider">{rel.category}</span>
                    <h4 className="font-playfair text-base font-bold text-gray-900 dark:text-white leading-snug line-clamp-2">{rel.title}</h4>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                      <span className="text-xs text-gray-400 font-medium font-poppins">{rel.date}</span>
                      <Link to={`/blog/${rel.slug}`} className="text-xs font-semibold text-aqua-400 hover:text-aqua-600 flex items-center gap-1">
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
