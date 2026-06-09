import { motion } from 'framer-motion';
import { Award, Compass, Heart, Shield, Landmark, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const stats = [
  { value: '15+', label: 'Years of Sanctuary' },
  { value: '25+', label: 'Luxury Therapists' },
  { value: '45k+', label: 'Rejuvenated Guests' },
  { value: '100%', label: 'Organic Essential Oils' }
];

const values = [
  {
    icon: <Landmark size={28} className="text-aqua-400" />,
    title: 'Imperial Facilities',
    desc: 'Indulge in temperature-regulated pools, private steam suites, eucalyptus-infused saunas, and custom meditation gardens.'
  },
  {
    icon: <Heart size={28} className="text-aqua-400" />,
    title: 'Individual Focus',
    desc: 'Each guest undergoes a brief diagnostic consultation to customize oil blends, music preferences, and therapist stroke styles.'
  },
  {
    icon: <Flame size={28} className="text-aqua-400" />,
    title: 'Ancient Wisdom',
    desc: 'We combine traditional systems like Ayurveda, Swedish strokes, and Thai compression with modern skincare sciences.'
  },
  {
    icon: <Award size={28} className="text-aqua-400" />,
    title: 'Award Winning Excellence',
    desc: 'Recognized consecutively as Noida\'s premier luxury wellness destination for outstanding service standards.'
  }
];

const etiquette = [
  {
    title: 'Arrival Time',
    desc: 'We recommend arriving 15 minutes before your scheduled treatment to complete consultation forms and enjoy a cooling organic tea.'
  },
  {
    title: 'Valuables & Attire',
    desc: 'Robes, slippers, and lockers are provided. Please leave jewelry and valuables at home; we are not responsible for lost items.'
  },
  {
    title: 'Sanctuary Silence',
    desc: 'To preserve our peaceful ambiance, please set all mobile devices to silent mode or turn them off. We respect all guests\' silence.'
  },
  {
    title: 'Health Conditions',
    desc: 'Kindly notify our reception of any medical conditions, allergies, or pregnancies during booking to ensure your session is safe.'
  }
];

export default function About() {
  return (
    <div className="bg-spa-light dark:bg-black transition-colors duration-500">
      <PageBanner
        title="About Our Sanctuary"
        subtitle="Our Story & Philosophy"
        image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Brand History */}
      <section className="py-24">
        <div className="container-max page-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="section-subtitle">Since 2011</span>
              <h2 className="section-title">The Birth of Aqua Spa</h2>
              <div className="luxury-divider" style={{ justifyContent: 'flex-start' }} />
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
                Founded with a vision to create a peaceful escape in the heart of Noida, Aqua Spa has grown into a premier destination for luxury relaxation and holistic wellness. Our sanctuary offers an escape from the chaotic demands of modern urban life.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
                We believe that health is not simply the absence of sickness, but a vibrant state of balance between physical relaxation, mental peace, and spiritual ease. Our therapies are designed to activate the body\'s natural self-healing mechanisms, leaving you fully refreshed.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-aqua-50/50 dark:bg-aqua-950/20 border border-aqua-100/10">
                <Compass className="text-aqua-400 animate-spin-slow flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-playfair text-lg font-bold text-gray-900 dark:text-white">Our Sanctuary Mission</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-poppins">
                    Providing world-class organic treatments and restorative wellness in an elegant, serene atmosphere.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
                    alt="Spa Lounge"
                    className="w-full h-64 object-cover rounded-3xl shadow-luxury"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
                    alt="Spa Stones"
                    className="w-full h-48 object-cover rounded-3xl shadow-luxury"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80"
                    alt="Spa Massage"
                    className="w-full h-48 object-cover rounded-3xl shadow-luxury"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80"
                    alt="Spa Oils"
                    className="w-full h-64 object-cover rounded-3xl shadow-luxury"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white dark:bg-gray-900 border border-aqua-100 dark:border-white/5 flex items-center justify-center shadow-lg">
                <Sparkles className="text-gold-400" size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Statistics Grid */}
      <section className="py-20 bg-aqua-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="container-max page-padding relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-2"
              >
                <div className="font-playfair text-4xl md:text-6xl font-bold text-gold-400">
                  {stat.value}
                </div>
                <p className="font-poppins text-xs md:text-sm uppercase tracking-wider text-aqua-200">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Spa Values */}
      <section className="py-24 bg-gradient-to-b from-transparent to-aqua-50/20 dark:to-gray-950/30">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Our Integrity</span>
            <h2 className="section-title">Core Rejuvenation Pillars</h2>
            <div className="luxury-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 flex items-start gap-5 border border-aqua-100/10 dark:border-white/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 rounded-xl bg-aqua-50 dark:bg-aqua-950/40 text-aqua-400 flex-shrink-0">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">{val.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Etiquette & Guidelines */}
      <section className="py-24">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Etiquette & Guidance</span>
            <h2 className="section-title">Preparing For Your Session</h2>
            <div className="luxury-divider" />
            <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Please take a moment to review our standard spa etiquettes to guarantee a smooth, peaceful, and beneficial wellness experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {etiquette.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-luxury border border-gray-100 dark:border-gray-800 space-y-3"
              >
                <div className="flex items-center gap-2 text-aqua-400">
                  <ShieldAlert size={18} />
                  <h4 className="font-playfair text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
