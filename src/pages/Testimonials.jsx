import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldAlert } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [filterRating, setFilterRating] = useState('All');

  const filteredTestimonials = testimonials.filter((t) => {
    return filterRating === 'All' || t.rating === parseInt(filterRating);
  });

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Sanctuary Testimonials"
        subtitle="Stories of Tranquility"
        image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <div className="container-max page-padding mt-12 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="section-subtitle">Real Guests</span>
          <h2 className="section-title">Verified Wellness Reviews</h2>
          <div className="luxury-divider" />
          <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300">
            Read stories of deep relaxation, healing recoveries, and skincare transformations experienced by our esteemed guests in Noida.
          </p>
        </div>

        {/* Rating Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['All', '5', '4'].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilterRating(rating)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                filterRating === rating
                  ? 'bg-aqua-400 text-white shadow-md'
                  : 'bg-white hover:bg-aqua-50 text-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <span>{rating === 'All' ? 'All Reviews' : `${rating} Stars`}</span>
              {rating !== 'All' && <Star size={12} className="fill-current text-gold-400" />}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredTestimonials.map((t, idx) => (
              <TestimonialCard key={t.id} testimonial={t} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-luxury space-y-3">
            <ShieldAlert className="text-gray-300 mx-auto" size={48} />
            <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">No Reviews Found</h3>
            <p className="text-xs text-gray-500 max-w-xs mx-auto font-poppins">
              We couldn't find any reviews matching {filterRating} stars.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
