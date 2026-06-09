import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ZoomIn } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { gallery, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter images
  const filteredImages = gallery.filter((img) => {
    return selectedCategory === 'All' || img.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Prepare slides for lightbox
  const slides = filteredImages.map(img => ({
    src: img.url,
    title: img.title,
    description: img.category
  }));

  return (
    <div className="bg-spa-light dark:bg-black min-h-screen transition-colors duration-500 pb-24">
      <PageBanner
        title="Sanctuary Gallery"
        subtitle="Visual Tour of Peace"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <div className="container-max page-padding mt-12 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-aqua-400 text-white shadow-md'
                  : 'bg-white hover:bg-aqua-50 text-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-luxury cursor-pointer bg-gray-100 dark:bg-gray-900"
              >
                <img
                  src={img.thumb}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-aqua-950/80 via-aqua-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">{img.category}</span>
                      <h4 className="font-playfair text-base font-bold leading-tight mt-0.5">{img.title}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Integrations */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={slides}
        />
      )}
    </div>
  );
}
