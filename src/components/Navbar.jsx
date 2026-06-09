import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon, Heart, Search, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useWishlist } from '../context/WishlistContext';
import { useScrollPosition } from '../hooks/useScrollPosition';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services', to: '/services',
    children: [
      { label: 'All Services', to: '/services' },
      { label: 'Massage Therapy', to: '/services?category=Massage+Therapy' },
      { label: 'Facial Treatments', to: '/services?category=Facial+Treatments' },
      { label: 'Body Treatments', to: '/services?category=Body+Treatments' },
      { label: 'Couples Packages', to: '/services?category=Couples+Packages' },
    ]
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Team', to: '/team' },
  {
    label: 'More', to: '#',
    children: [
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ]
  },
];

export default function Navbar({ onSearchOpen }) {
  const { darkMode, toggleTheme } = useTheme();
  const { wishlist } = useWishlist();
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:flex bg-aqua-700 text-white text-xs py-2 px-8 justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><Phone size={12} /> +91 98765 43210</span>
          <span>Mon–Sun: 9:00 AM – 9:00 PM</span>
          <span>Shop No-27, 14th Ave, Gaur City 2, Greater Noida</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@aquaspa.com" className="hover:text-gold-400 transition-colors">hello@aquaspa.com</a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-luxury border-b border-aqua-100/50'
            : 'bg-white dark:bg-gray-900 shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-luxury overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
                <span className="text-white font-playfair font-bold text-xl">A</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #FFD166, #FFC233)' }} />
                <span className="absolute text-white font-playfair font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">A</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-xl leading-tight" style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Aqua Spa
                </div>
                <div className="text-xs text-gray-400 font-poppins tracking-widest uppercase leading-none">Gaur City 2</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  {link.children ? (
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-aqua-400 hover:bg-aqua-50 dark:hover:bg-aqua-900/20 transition-all duration-200">
                      {link.label} <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <NavLink to={link.to}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-aqua-400 bg-aqua-50 dark:bg-aqua-900/20'
                            : 'text-gray-700 dark:text-gray-200 hover:text-aqua-400 hover:bg-aqua-50 dark:hover:bg-aqua-900/20'
                        }`
                      }>
                      {link.label}
                    </NavLink>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-card py-2 shadow-luxury-lg z-50">
                        {link.children.map(child => (
                          <NavLink key={child.label} to={child.to}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:text-aqua-400 hover:bg-aqua-50 dark:hover:bg-aqua-900/20 transition-all">
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button onClick={onSearchOpen} className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-aqua-400 hover:bg-aqua-50 dark:hover:bg-aqua-900/20 transition-all" title="Search">
                <Search size={20} />
              </button>
              <Link to="/wishlist" className="relative p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-aqua-400 hover:bg-aqua-50 transition-all">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                    style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}>
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <button onClick={toggleTheme} className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-aqua-400 hover:bg-aqua-50 dark:hover:bg-aqua-900/20 transition-all" title="Toggle theme">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link to="/appointment" className="hidden lg:flex btn-primary py-2.5 px-6 text-xs">
                Book Now
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-aqua-50 transition-all">
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="font-playfair font-bold text-2xl gradient-text">Aqua Spa</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">Gaur City 2</div>
              </div>
              <nav className="p-4">
                {navLinks.map(link => (
                  <div key={link.label}>
                    {link.children ? (
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 mt-3">{link.label}</div>
                        {link.children.map(child => (
                          <NavLink key={child.label} to={child.to}
                            className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'text-aqua-400 bg-aqua-50' : 'text-gray-700 dark:text-gray-200 hover:text-aqua-400 hover:bg-aqua-50'}`}>
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    ) : (
                      <NavLink to={link.to}
                        className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'text-aqua-400 bg-aqua-50' : 'text-gray-700 dark:text-gray-200 hover:text-aqua-400 hover:bg-aqua-50'}`}>
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <Link to="/appointment" className="btn-primary w-full justify-center">Book Appointment</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
