import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address', {
        style: { borderRadius: '12px', background: '#023E8A', color: '#fff' }
      });
      return;
    }
    
    setSubscribed(true);
    toast.success('Thank you for subscribing to our wellness letter!', {
      style: { borderRadius: '12px', background: '#023E8A', color: '#fff' }
    });
    setEmail('');
  };

  return (
    <section className="relative py-20 overflow-hidden bg-aqua-900 text-white">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-aqua-400 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full bg-gold-400 blur-[120px]" />
      </div>

      <div className="container-max page-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">Exclusive Wellness Club</span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold tracking-tight">
              Join Our Sanctuary of Peace
            </h2>
            <p className="font-poppins text-sm md:text-base text-aqua-100 max-w-xl mx-auto leading-relaxed">
              Subscribe to receive luxury spa offers, seasonal self-care guides, and event invitations directly to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            {subscribed ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/40 text-gold-400"
              >
                <CheckCircle2 size={20} className="animate-bounce" />
                <span className="font-semibold tracking-wide text-sm">You are on the VIP Guest List!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative w-full max-w-md flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent backdrop-blur-md text-sm pr-16"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-5 rounded-full bg-gold-400 text-spa-dark hover:bg-gold-500 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <Send size={14} />
                  <span className="hidden sm:inline font-semibold text-xs uppercase tracking-wider">Join</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
