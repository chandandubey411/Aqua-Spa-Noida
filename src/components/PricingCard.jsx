import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Day Escape",
    price: "129",
    duration: "2 Hours",
    description: "Perfect for a quick mid-week refresh and rejuvenation.",
    features: [
      "60-Min Swedish Massage",
      "Organic Facial Express",
      "Access to Steam room & Sauna",
      "Complimentary Herbal Teas"
    ],
    popular: false,
    gradient: "from-aqua-300 to-aqua-500"
  },
  {
    name: "Aqua Signature",
    price: "249",
    duration: "4 Hours",
    description: "Our signature luxury wellness package covering body & mind.",
    features: [
      "75-Min Hot Stone Massage",
      "Luxury Hydra Facial",
      "Royal Lavender Body Scrub",
      "Gourmet spa lunch & champagne",
      "Premium skincare goody bag"
    ],
    popular: true,
    gradient: "from-aqua-400 to-aqua-700"
  },
  {
    name: "Imperial Couple's",
    price: "399",
    duration: "5 Hours",
    description: "The ultimate private journey for two, with bubbles and roses.",
    features: [
      "90-Min side-by-side massages",
      "Premium Couple's Facials",
      "Private Jacuzzi rose bath",
      "Premium cheese platter & wine",
      "Custom aromatherapy kit to go"
    ],
    popular: false,
    gradient: "from-gold-400 to-gold-600"
  }
];

export default function PricingCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {packages.map((pkg, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`relative group flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-gray-900 border-2 transition-all duration-500 hover:-translate-y-2 ${
            pkg.popular 
              ? 'border-aqua-400 shadow-luxury-lg dark:border-aqua-500' 
              : 'border-transparent shadow-luxury hover:border-aqua-100 dark:hover:border-gray-800'
          }`}
        >
          {pkg.popular && (
            <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-gold-400 to-gold-500 shadow-md">
              👑 Most Popular
            </span>
          )}

          <div>
            <div className="space-y-2 mb-6">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {pkg.description}
              </p>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white">
                ${pkg.price}
              </span>
              <span className="text-sm font-medium text-gray-400">
                / {pkg.duration}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {pkg.features.map((feat, fidx) => (
                <li key={fidx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-aqua-50 dark:bg-aqua-950 flex items-center justify-center text-aqua-400 flex-shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/appointment"
            className={`w-full py-4 rounded-xl text-center font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
              pkg.popular 
                ? 'bg-gradient-to-r from-aqua-400 to-aqua-700 text-white shadow-luxury hover:shadow-luxury-lg' 
                : 'bg-aqua-50 text-aqua-600 hover:bg-aqua-400 hover:text-white dark:bg-gray-800 dark:text-aqua-300 dark:hover:bg-aqua-500 dark:hover:text-white'
            }`}
          >
            <span>Book Experience</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
