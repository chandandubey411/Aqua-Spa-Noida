import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Heart, ArrowRight } from 'lucide-react';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const footerLinks = {
  Services: [
    { label: 'Massage Therapy', to: '/services?category=Massage+Therapy' },
    { label: 'Facial Treatments', to: '/services?category=Facial+Treatments' },
    { label: 'Body Treatments', to: '/services?category=Body+Treatments' },
    { label: 'Hydrotherapy', to: '/services?category=Hydro+Therapy' },
    { label: 'Couples Packages', to: '/services?category=Couples+Packages' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
  Support: [
    { label: 'Book Appointment', to: '/appointment' },
    { label: 'Pricing & Packages', to: '/pricing' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'FAQ', to: '/contact#faq' },
    { label: 'Gift Cards', to: '/appointment' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #00B4D8, #023E8A, #FFD166, #00B4D8)' }} />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #023E8A, transparent)' }} />
      </div>

      {/* Newsletter Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Join Our Wellness Community</h3>
              <p className="text-gray-400 text-sm">Get exclusive offers, wellness tips & early access to new treatments.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 lg:w-72 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-aqua-400 transition-colors"
              />
              <button className="btn-primary whitespace-nowrap px-6 py-3 text-sm">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
                <span className="text-white font-playfair font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-2xl" style={{ background: 'linear-gradient(135deg, #00B4D8, #48CAE4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Aqua Spa</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">Noida</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium luxury spa, wellness & beauty treatments designed for mind, body & soul. Experience ultimate relaxation in Noida's finest wellness sanctuary.
            </p>
            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400 hover:text-aqua-400 transition-colors">
                <MapPin size={16} className="text-aqua-400 flex-shrink-0" />
                <span>245 Aqua Wellness Avenue, Sector 18, Noida</span>
              </div>
              <a href="tel:+18005557721" className="flex items-center gap-3 text-gray-400 hover:text-aqua-400 transition-colors">
                <Phone size={16} className="text-aqua-400 flex-shrink-0" />
                <span>+1 (800) 555-SPA1</span>
              </a>
              <a href="mailto:hello@aquaspa.com" className="flex items-center gap-3 text-gray-400 hover:text-aqua-400 transition-colors">
                <Mail size={16} className="text-aqua-400 flex-shrink-0" />
                <span>hello@aquaspa.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-aqua-400 flex-shrink-0" />
                <span>Mon–Sun: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-aqua-400 hover:bg-aqua-400/20 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-playfair font-semibold text-white mb-5 text-lg">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-gray-400 text-sm hover:text-aqua-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua-400/50 group-hover:bg-aqua-400 transition-colors flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>© 2024 Aqua Spa Noida. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 mx-1" /> in Noida
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-aqua-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-aqua-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
