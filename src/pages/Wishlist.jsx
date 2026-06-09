import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { useWishlist } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Your Wishlist"
        subtitle="Saved Rituals of Peace"
        image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&q=80"
        breadcrumbs={[{ label: 'Wishlist' }]}
      />

      <div className="container-max page-padding mt-12 space-y-8">
        
        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-luxury space-y-6 max-w-lg mx-auto border border-aqua-100/10"
          >
            <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/20 text-red-400 flex items-center justify-center mx-auto">
              <Heart size={28} className="fill-none text-red-500" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Your Wishlist is Empty</h3>
              <p className="font-poppins text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                You haven't saved any therapeutic treatments yet. Start browsing our signature wellness experiences.
              </p>
            </div>

            <Link to="/services" className="btn-primary">
              <span>Browse Treatments</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">
                Saved Treatments ({wishlist.length})
              </h3>
              <Link to="/services" className="text-sm font-semibold text-aqua-400 hover:text-aqua-600 flex items-center gap-1.5 transition-colors">
                <ArrowLeft size={16} /> Keep Exploring
              </Link>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {wishlist.map((service, idx) => (
                  <ServiceCard key={service.id} service={service} index={idx} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
}
