import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, List, X, SlidersHorizontal } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { services, serviceCategories } from '../data/services';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutMode, setLayoutMode] = useState('grid'); // grid | list
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter logic
  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category.toLowerCase() === selectedCategory.toLowerCase() || (selectedCategory === 'Massage Therapy' && service.category === 'Massage Therapy') || (selectedCategory === 'Facial Treatments' && service.category === 'Facial Treatments') || (selectedCategory === 'Body Treatments' && service.category === 'Body Treatments') || (selectedCategory === 'Hydro Therapy' && service.category === 'Hydro Therapy') || (selectedCategory === 'Aromatherapy' && service.category === 'Aromatherapy') || (selectedCategory === 'Wellness Therapy' && service.category === 'Wellness Therapy') || (selectedCategory === 'Couples Packages' && service.category === 'Couples Packages');
    
    // Exact mapping check
    const matchesCatValue = selectedCategory === 'All' || 
      service.category.toLowerCase().replace(/\s+/g, '') === selectedCategory.toLowerCase().replace(/\s+/g, '');

    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCatValue && matchesSearch;
  });

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-20">
      <PageBanner
        title="Our Restorative Treatments"
        subtitle="Exclusive Treatment Guide"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
        breadcrumbs={[{ label: 'Treatments' }]}
      />

      <div className="container-max page-padding mt-12 space-y-8">
        
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-luxury border border-aqua-100/10">
          
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-transparent focus:outline-none focus:border-aqua-300 transition-colors text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Desktop Category Filter list */}
          <div className="hidden lg:flex flex-wrap items-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-aqua-400 text-white shadow-md'
                    : 'bg-spa-light hover:bg-aqua-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden w-full md:w-auto items-center justify-between gap-4">
            <button
              onClick={() => setShowFiltersMobile(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-spa-light dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold text-sm hover:bg-aqua-50 transition-colors flex-1 md:flex-initial"
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </button>

            {/* Layout Toggles */}
            <div className="flex items-center gap-1.5 p-1 bg-spa-light dark:bg-gray-800 rounded-xl">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  layoutMode === 'grid' 
                    ? 'bg-white dark:bg-gray-700 text-aqua-400 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  layoutMode === 'list' 
                    ? 'bg-white dark:bg-gray-700 text-aqua-400 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Desktop Layout Toggle */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 bg-spa-light dark:bg-gray-800 rounded-xl">
            <button
              onClick={() => setLayoutMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                layoutMode === 'grid' 
                  ? 'bg-white dark:bg-gray-700 text-aqua-400 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setLayoutMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                layoutMode === 'list' 
                  ? 'bg-white dark:bg-gray-700 text-aqua-400 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <List size={18} />
            </button>
          </div>

        </div>

        {/* Mobile Filter Drawer / Backdrop */}
        <AnimatePresence>
          {showFiltersMobile && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFiltersMobile(false)}
                className="fixed inset-0 z-40 bg-black"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-80 max-w-full z-50 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4 dark:border-gray-800">
                    <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">Filter Categories</h3>
                    <button onClick={() => setShowFiltersMobile(false)} className="text-gray-500 hover:text-gray-700">
                      <X size={20} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowFiltersMobile(false);
                        }}
                        className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                          selectedCategory === cat
                            ? 'bg-aqua-400 text-white shadow-md'
                            : 'bg-spa-light hover:bg-aqua-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setShowFiltersMobile(false);
                  }}
                  className="w-full py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Services List / Grid */}
        <div>
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-luxury space-y-4"
            >
              <SlidersHorizontal size={48} className="text-gray-300 mx-auto" />
              <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">No Treatments Found</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto font-poppins">
                We couldn't find any treatment matches for "{searchQuery}". Try revising your search terms or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout 
              className={
                layoutMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6 max-w-4xl mx-auto'
              }
            >
              <AnimatePresence>
                {filteredServices.map((service, index) => {
                  if (layoutMode === 'grid') {
                    return <ServiceCard key={service.id} service={service} index={index} />;
                  }

                  // List Item layout
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={service.id}
                      className="group flex flex-col sm:flex-row bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-luxury border border-aqua-100/10 hover:shadow-luxury-lg transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-xs font-semibold text-aqua-400 uppercase tracking-wider">{service.category}</span>
                              <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mt-0.5">{service.title}</h3>
                            </div>
                            <span className="font-bold text-lg text-gold-500">${service.price}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 font-poppins">{service.description}</p>
                        </div>

                        <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <span className="text-xs text-gray-500 font-medium font-poppins">⏱ {service.duration}</span>
                          <div className="flex gap-2">
                            <Link 
                              to={`/services/${service.slug}`}
                              className="px-4 py-2 text-xs font-semibold border-2 border-aqua-400 text-aqua-400 rounded-lg hover:bg-aqua-400 hover:text-white transition-all"
                            >
                              View Details
                            </Link>
                            <Link 
                              to="/appointment"
                              className="px-4 py-2 text-xs font-semibold text-white rounded-lg hover:shadow-md transition-all"
                              style={{ background: 'linear-gradient(135deg, #00B4D8, #023E8A)' }}
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
