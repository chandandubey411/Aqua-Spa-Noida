import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';
import { Award, Compass, ShieldCheck } from 'lucide-react';

export default function Team() {
  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Meet Our Specialists"
        subtitle="Masters of Healing"
        image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80"
        breadcrumbs={[{ label: 'Our Team' }]}
      />

      {/* Intro section */}
      <section className="py-16 container-max page-padding text-center space-y-6 max-w-3xl mx-auto">
        <span className="section-subtitle">Certified Specialists</span>
        <h2 className="section-title">The Healing Hands of Aqua Spa</h2>
        <div className="luxury-divider" />
        <p className="font-poppins text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Every specialist at Aqua Spa Gaur City 2 holds global certifications, bringing together decades of collective experience in therapeutic recovery, deep tissue releases, skin analysis, and holistic chakra balancing.
        </p>

        {/* Credentials badge list */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-poppins">
          <div className="flex items-center gap-1.5">
            <Award className="text-aqua-400" size={16} />
            <span>CIDESCO Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="text-aqua-400" size={16} />
            <span>CIBTAC Accredited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Compass className="text-aqua-400" size={16} />
            <span>Ayurvedic Doctors</span>
          </div>
        </div>
      </section>

      {/* Grid of Team Cards */}
      <section className="container-max page-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
