import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star, Clock, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceCard({ service, index = 0 }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(service.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(service);
    toast(inWishlist ? 'Removed from wishlist' : '❤️ Added to wishlist', {
      style: { borderRadius: '12px', background: '#023E8A', color: '#fff' },
      duration: 2000,
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img src={service.image} alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {service.popular && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #FFD166, #FFC233)', color: '#1A1A1A' }}>
              ⭐ Popular
            </span>
          )}
          {service.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
              Featured
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button onClick={handleWishlist}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300">
          <Heart size={16} className={inWishlist ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
        </button>

        {/* Price tag */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-sm font-bold text-gray-900"
          style={{ background: 'linear-gradient(135deg, #FFD166, #FFC233)' }}>
          ${service.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <span className="text-xs font-medium text-aqua-400 uppercase tracking-wider">{service.category}</span>
            <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white mt-0.5 group-hover:text-aqua-600 transition-colors">
              {service.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap mt-1">
            <Clock size={12} />
            <span>{service.duration}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{service.description}</p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.benefits.slice(0, 3).map((b, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-aqua-50 dark:bg-aqua-900/20 text-aqua-600 dark:text-aqua-400">
              {b}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link to={`/services/${service.slug}`}
            className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold border-2 border-aqua-400 text-aqua-400 hover:bg-aqua-400 hover:text-white transition-all duration-300">
            View Details
          </Link>
          <Link to="/appointment"
            className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-luxury"
            style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
