import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-7 h-full flex flex-col relative overflow-hidden group hover:shadow-luxury-lg transition-all duration-500">

      {/* Decorative quote */}
      <Quote size={48} className="absolute -top-2 -right-2 text-aqua-100 dark:text-aqua-900 rotate-180" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16}
            className={i < testimonial.rating ? 'text-gold-400 fill-gold-400' : 'text-gray-300'} />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 italic mb-6">
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, transparent, #00B4D8, transparent)' }} />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src={testimonial.image} alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-aqua-200" />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-aqua-400 flex items-center justify-center">
            <Star size={10} className="text-white fill-white" />
          </div>
        </div>
        <div>
          <div className="font-playfair font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.role}</div>
          <div className="text-xs text-aqua-400 mt-0.5">{testimonial.service}</div>
        </div>
        <div className="ml-auto text-xs text-gray-400">{testimonial.date}</div>
      </div>
    </motion.div>
  );
}
