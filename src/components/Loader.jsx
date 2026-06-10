import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-spa-light dark:bg-black transition-colors duration-500">
      <div className="relative flex items-center justify-center">
        {/* Animated background rings */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute w-40 h-40 rounded-full border border-aqua-300 dark:border-aqua-700"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-56 h-56 rounded-full border border-gold-400/30"
        />
        
        {/* Floating Core Mandala / Logo */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: 360 }}
          transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 20, ease: "linear" }
          }}
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-aqua-400 to-aqua-700 flex items-center justify-center shadow-luxury p-0.5"
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center p-3">
            <img src="/logo.svg" alt="Aqua Spa Logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="font-playfair text-2xl font-bold tracking-widest text-aqua-700 dark:text-aqua-300">AQUA SPA</h2>
        <p className="font-poppins text-xs uppercase tracking-[0.3em] text-gold-500 mt-2">Relax. Rejuvenate. Renew.</p>
      </motion.div>
    </div>
  );
}
