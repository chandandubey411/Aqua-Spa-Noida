import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatButton() {
  const phone = '919876543210';
  const message = encodeURIComponent('Hello! I would like to book an appointment at Aqua Spa Gaur City 2.');
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-luxury-lg text-white"
      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      aria-label="Chat on WhatsApp">
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
      <MessageCircle size={26} fill="white" />
    </motion.a>
  );
}
