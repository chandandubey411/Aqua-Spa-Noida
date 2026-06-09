import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Award, Calendar } from 'lucide-react';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2">

      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        <img src={member.image} alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Rating badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-gray-900"
          style={{ background: 'linear-gradient(135deg, #FFD166, #FFC233)' }}>
          <Star size={12} className="fill-current" />
          {member.rating} ({member.reviews})
        </div>

        {/* Social Links - show on hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {[
            { icon: Instagram, href: member.social.instagram },
            { icon: Linkedin, href: member.social.linkedin },
            { icon: Twitter, href: member.social.twitter },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href}
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-aqua-700 hover:bg-aqua-400 hover:text-white transition-all">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white group-hover:text-aqua-600 transition-colors">
            {member.name}
          </h3>
          <div className="text-xs font-semibold text-aqua-400 uppercase tracking-wider mt-0.5">{member.role}</div>
        </div>

        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
          <Award size={13} className="text-gold-400" />
          {member.experience} Experience · {member.specialization}
        </p>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.certifications.map((cert, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-aqua-50 dark:bg-aqua-900/20 text-aqua-600 dark:text-aqua-400 border border-aqua-100 dark:border-aqua-800">
              {cert}
            </span>
          ))}
        </div>

        <Link to="/appointment"
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-luxury"
          style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
          <Calendar size={14} /> Book with {member.name.split(' ')[0]}
        </Link>
      </div>
    </motion.div>
  );
}
