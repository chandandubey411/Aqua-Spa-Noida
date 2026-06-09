import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './context/WishlistContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import BackToTop from './components/BackToTop';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Wishlist from './pages/Wishlist';

// Scroll to Top Helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Simulate luxury page loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <WishlistProvider>
        <Router>
          <ScrollToTop />
          
          <div className="flex flex-col min-h-screen bg-spa-light dark:bg-black text-spa-dark dark:text-gray-100 transition-colors duration-500">
            {/* Header / Navigation */}
            <Navbar onSearchOpen={() => setSearchOpen(true)} />

            {/* Main Content Areas */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Float Utilities */}
            <BackToTop />
            <WhatsAppFloatButton />

            {/* Search Modal */}
            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            {/* Toast System */}
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </Router>
      </WishlistProvider>
    </ThemeProvider>
  );
}
