import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';

export default function Pricing() {
  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Sanctuary Memberships & Packages"
        subtitle="Exclusive Access & Pricing"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80"
        breadcrumbs={[{ label: 'Pricing Packages' }]}
      />

      {/* Intro info */}
      <section className="py-16 container-max page-padding text-center space-y-6 max-w-3xl mx-auto">
        <span className="section-subtitle">Wellness Investment</span>
        <h2 className="section-title">Nourish Your Body and Mind Regularly</h2>
        <div className="luxury-divider" />
        <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Unlock maximum benefits by subscribing to our monthly memberships or purchasing multi-session cards. Members receive 10% off organic retail products, priority scheduling, and VIP room allocations.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="container-max page-padding pb-16">
        <PricingCard />
      </section>

      {/* FAQ on Membership pricing */}
      <section className="py-16 bg-gradient-to-b from-transparent to-aqua-50/20 dark:to-gray-950/30">
        <div className="container-max page-padding space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Membership & Package Questions</h2>
            <div className="luxury-divider" />
          </div>

          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
