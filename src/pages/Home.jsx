import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Calendar, ArrowRight, ShieldCheck, Heart, Award, Coffee, Clock } from 'lucide-react';
import { services } from '../data/services';
import { team } from '../data/team';
import { testimonials } from '../data/testimonials';
import { blogs } from '../data/blogs';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import TeamCard from '../components/TeamCard';
import FAQAccordion from '../components/FAQAccordion';
import Newsletter from '../components/Newsletter';
import PricingCard from '../components/PricingCard';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80',
    title: 'Experience the Art of Deep Relaxation',
    subtitle: 'Relax. Rejuvenate. Renew.',
    tag: 'Premium Luxury Spa Resort',
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80',
    title: 'Sacred Sanctuary for Mind and Body',
    subtitle: 'Holistic healing therapies tailored for you.',
    tag: 'Expert Organic Skincare',
  },
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80',
    title: 'Nourish Your Soul and Restore Balance',
    subtitle: 'Step away from the noise, step into serenity.',
    tag: 'Award Winning Massages',
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const featuredServices = services.filter(s => s.featured).slice(0, 3);
  const featuredTherapists = team.slice(0, 3);
  const featuredBlogs = blogs.filter(b => b.featured).slice(0, 3);
  const homeTestimonials = testimonials.slice(0, 3);

  return (
    <div className="overflow-hidden bg-spa-light dark:bg-black transition-colors duration-500">
      
      {/* Hero Slideshow Section */}
      <section className="relative h-[85vh] md:h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Dark/Aqua gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-aqua-950/90 via-aqua-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-spa-light dark:from-black via-transparent to-transparent opacity-90" />
          </motion.div>
        </AnimatePresence>

        <div className="container-max page-padding relative z-10 w-full text-white">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-400"
            >
              <Sparkles size={14} className="animate-spin-slow" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                {heroSlides[currentSlide].tag}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-poppins text-lg text-aqua-100 max-w-xl"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/appointment" className="btn-gold flex items-center gap-2">
                <Calendar size={18} />
                <span>Reserve Appointment</span>
              </Link>
              <Link to="/services" className="btn-secondary flex items-center gap-2">
                <span>View Treatments</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentSlide === i ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Luxury Amenities Section */}
      <section className="py-24 relative">
        <div className="container-max page-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award size={36} />,
                title: "Certified Experts",
                desc: "All treatments are handled by certified therapists with years of international experience."
              },
              {
                icon: <ShieldCheck size={36} />,
                title: "Pure Organics",
                desc: "We exclusively use organic, botanical ingredients and natural essential oils."
              },
              {
                icon: <Coffee size={36} />,
                title: "VIP Amenities",
                desc: "Access steam sauna rooms, relaxation lounges, herbal teas, and private showers."
              },
              {
                icon: <Heart size={36} />,
                title: "Holistic Care",
                desc: "A combination of ancient wisdom, physical massage, and modern energy therapies."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 border border-aqua-100/10 dark:border-white/5 space-y-4 hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-aqua-400 dark:text-aqua-300 bg-aqua-50 dark:bg-aqua-950/40 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-24 bg-gradient-to-b from-transparent to-aqua-50/20 dark:to-gray-950/30">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Exquisite Handpicked Treatments</span>
            <h2 className="section-title">Our Signature Experiences</h2>
            <div className="luxury-divider" />
            <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Treat yourself to our premium healing treatments. Each service has been crafted carefully to restore harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary">
              <span>Explore All Treatments</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotion / CTA Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Background Image with parallax feeling */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
            alt="Promotion Spa"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aqua-950 via-aqua-950/80 to-transparent" />
        </div>

        <div className="container-max page-padding relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">Limited Luxury Offer</span>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight">
              Enjoy 20% Off Your First Royal Treatment
            </h2>
            <p className="font-poppins text-sm md:text-base text-aqua-100 max-w-lg leading-relaxed">
              Register an account online today or book your initial appointment. Experience pure relaxation with our signature welcome gift.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/appointment" className="btn-gold flex items-center gap-2">
                <Calendar size={18} />
                <span>Claim Offer Now</span>
              </Link>
              <Link to="/contact" className="btn-secondary">
                <span>Inquire Custom Events</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Package Pricing */}
      <section className="py-24">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Wellness Memberships</span>
            <h2 className="section-title">Luxury Spa Tiers</h2>
            <div className="luxury-divider" />
            <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Select one of our membership or package combinations. Each package offers access to exclusive services and privileges.
            </p>
          </div>

          <PricingCard />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-aqua-50/20 dark:to-gray-950/30">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Masters of Wellness</span>
            <h2 className="section-title">Meet Our Therapists</h2>
            <div className="luxury-divider" />
            <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Our specialists are trained across worldwide massage systems, holistic health practices, and medical-grade beauty procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTherapists.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/team" className="btn-primary">
              <span>View All Therapists</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Stories of Serenity</span>
            <h2 className="section-title">Loved by Our Guests</h2>
            <div className="luxury-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {homeTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Blog Articles */}
      <section className="py-24 bg-gradient-to-b from-transparent to-aqua-50/20 dark:to-gray-950/30">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Sanctuary Blog</span>
            <h2 className="section-title">Latest Wellness Whispers</h2>
            <div className="luxury-divider" />
            <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Follow our guides for skincare, nutrition, breathing wellness, and physical restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog" className="btn-primary">
              <span>Explore All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24">
        <div className="container-max page-padding space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="luxury-divider" />
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* Newsletter signup */}
      <Newsletter />

    </div>
  );
}
