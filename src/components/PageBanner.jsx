import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

export default function PageBanner({ title, subtitle, image, breadcrumbs = [] }) {
  return (
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80'}
          alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(2,62,138,0.85) 0%, rgba(0,180,216,0.7) 100%)' }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-8 right-8 w-32 h-32 rounded-full border border-white/10" />
      <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full border border-white/10" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-gold-400/30" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-white/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-aqua-300 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            {subtitle || 'Aqua Spa Gaur City 2'}
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">{title}</h1>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={14} /> Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
}
