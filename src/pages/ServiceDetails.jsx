import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Heart, Star, CheckCircle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';

export default function ServiceDetails() {
  const { slug } = useParams();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white">Treatment Not Found</h2>
        <p className="text-gray-500 font-poppins">We couldn't find the requested spa service.</p>
        <Link to="/services" className="btn-primary">
          <ArrowLeft size={16} /> Return to Treatments
        </Link>
      </div>
    );
  }

  const isWish = isInWishlist(service.id);

  const handleWishlist = () => {
    toggleWishlist(service);
    toast(isWish ? 'Removed from wishlist' : '❤️ Added to wishlist', {
      style: { borderRadius: '12px', background: '#023E8A', color: '#fff' },
      duration: 2000,
    });
  };

  // Get related services (same category, different id)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      
      {/* Header Area */}
      <div className="relative h-80 md:h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-spa-light dark:from-black via-gray-950/60 to-transparent" />
        </div>

        <div className="container-max page-padding relative z-10 w-full pb-8 md:pb-12 text-white">
          <div className="max-w-4xl space-y-4">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition-colors text-sm font-semibold uppercase tracking-wider">
              <ArrowLeft size={16} /> Back to Treatments
            </Link>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-aqua-400 text-white">
                {service.category}
              </span>
              {service.popular && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-gray-900 bg-gold-400">
                  ⭐ Popular
                </span>
              )}
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white drop-shadow-sm">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="container-max page-padding mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left / Center Details Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-luxury border border-aqua-100/10 space-y-6"
            >
              <h2 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Treatment Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins text-base">
                {service.description}
              </p>

              <div className="h-px bg-gray-100 dark:border-gray-800" />

              <h2 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">Key Healing Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-aqua-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-poppins">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-luxury border border-aqua-100/10 space-y-6"
            >
              <h2 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">What to Expect During Your Treatment</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins text-sm">
                Each treatment begins with a brief wellness diagnostic where your specialist will review muscle tensions, oil selections, and stroke pressure. Following the service, you are invited to rest in our VIP relaxation lounge with premium green teas.
              </p>
              <div className="flex gap-4 p-4 bg-aqua-50/50 dark:bg-aqua-950/20 rounded-2xl border border-aqua-100/10 items-center">
                <ShieldCheck className="text-aqua-400 flex-shrink-0" size={28} />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-poppins">
                  We use 100% organic, botanical-certified essential oils. Fully sanitised facilities guaranteed.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar Booking & Summary Widget */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-luxury border-2 border-aqua-100/50 dark:border-gray-800 space-y-6 text-center"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-aqua-400 uppercase tracking-widest">Pricing & Duration</span>
                <div className="font-playfair text-5xl font-bold text-gray-900 dark:text-white">
                  ${service.price}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500 font-poppins pt-2">
                  <Clock size={16} />
                  <span>Duration: {service.duration}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <Link to="/appointment" className="w-full btn-primary flex justify-center py-4 rounded-xl shadow-lg">
                  Book This Treatment
                </Link>
                <button
                  onClick={handleWishlist}
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide border-2 transition-all flex items-center justify-center gap-2 ${
                    isWish
                      ? 'bg-red-50 border-red-200 text-red-500'
                      : 'border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Heart size={16} className={isWish ? 'fill-red-500' : ''} />
                  <span>{isWish ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Related Treatments Slider */}
        {relatedServices.length > 0 && (
          <div className="mt-24 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="section-subtitle">Similar Therapies</span>
              <h2 className="section-title">Related Treatments</h2>
              <div className="luxury-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((rel, idx) => (
                <div
                  key={rel.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury border border-aqua-100/10 hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-3">
                    <span className="text-xs font-semibold text-aqua-400 uppercase tracking-wider">{rel.category}</span>
                    <h4 className="font-playfair text-lg font-bold text-gray-900 dark:text-white leading-tight">{rel.title}</h4>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-800">
                      <span className="text-sm font-bold text-gold-500">${rel.price}</span>
                      <Link to={`/services/${rel.slug}`} className="text-xs font-semibold text-aqua-400 hover:text-aqua-600 flex items-center gap-1">
                        View <ArrowRight size={12} />
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
