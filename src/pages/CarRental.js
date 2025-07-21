import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, Shield, Phone, MapPin, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const CarRental = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t } = useLanguage();

  // Porsche gallery images - all 21 optimized images (~200KB each)
  const porscheImages = [
    '/images/porche/optimized/FNP08572-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08584-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08597-Forbedret-Lang.jpg',
    '/images/porche/optimized/FNP08597-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08623-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08626-Forbedret-Lang.jpg',
    '/images/porche/optimized/FNP08626-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08634-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08638-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08642-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08645-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08650-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08651-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08652-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08656-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08660-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08678-Forbedret-NR.jpg',
    '/images/porche/optimized/FNP08678-Forbedret.Lang-NR.jpg',
    '/images/porche/optimized/FNP08686-Forbedret-Høy.jpg',
    '/images/porche/optimized/FNP08686-Forbedret-Lang.jpg',
    '/images/porche/optimized/FNP08686-Forbedret-NR.jpg'
  ];

  // Corresponding thumbnails for fast loading
  const porscheThumbnails = [
    '/images/porche/thumbs/FNP08572-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08584-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08597-Forbedret-Lang.jpg',
    '/images/porche/thumbs/FNP08597-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08623-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08626-Forbedret-Lang.jpg',
    '/images/porche/thumbs/FNP08626-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08634-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08638-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08642-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08645-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08650-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08651-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08652-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08656-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08660-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08678-Forbedret-NR.jpg',
    '/images/porche/thumbs/FNP08678-Forbedret.Lang-NR.jpg',
    '/images/porche/thumbs/FNP08686-Forbedret-Høy.jpg',
    '/images/porche/thumbs/FNP08686-Forbedret-Lang.jpg',
    '/images/porche/thumbs/FNP08686-Forbedret-NR.jpg'
  ];

  const nextImage = () => {
    setImageLoading(true);
    setCurrentImage((prev) => (prev + 1) % porscheImages.length);
  };

  const prevImage = () => {
    setImageLoading(true);
    setCurrentImage((prev) => (prev - 1 + porscheImages.length) % porscheImages.length);
  };

  const openGallery = (index) => {
    setCurrentImage(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isGalleryOpen) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeGallery();
      } else {
        // Keyboard navigation for main image carousel
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openGallery(currentImage);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, currentImage]);

  // Preload adjacent images for smoother navigation
  useEffect(() => {
    if (isGalleryOpen) {
      const preloadImages = [];
      
      // Preload next and previous images
      const nextIndex = (currentImage + 1) % porscheImages.length;
      const prevIndex = (currentImage - 1 + porscheImages.length) % porscheImages.length;
      
      [nextIndex, prevIndex].forEach(index => {
        const img = new Image();
        img.src = porscheImages[index];
        preloadImages.push(img);
      });
    }
  }, [currentImage, isGalleryOpen, porscheImages]);

  const features = [
    {
      icon: Shield,
      title: t('carRental.features.items.insurance', translations.carRental.features.items.insurance),
      description: 'Complete coverage for your peace of mind'
    },
    {
      icon: MapPin,
      title: t('carRental.features.items.delivery', translations.carRental.features.items.delivery),
      description: 'We bring the car to you, anywhere in Norway'
    },
    {
      icon: Phone,
      title: t('carRental.features.items.support', translations.carRental.features.items.support),
      description: 'Round-the-clock assistance whenever you need it'
    },
    {
      icon: Star,
      title: t('carRental.features.items.routes', translations.carRental.features.items.routes),
      description: 'Curated driving routes through Norway\'s most stunning landscapes'
    }
  ];

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/trollstigen_activities.jpg"
            alt="Trollstigen scenic driving route"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              {t('carRental.title', translations.carRental.title)}
            </h1>
            <p className="text-xl text-luxury-300 mb-8">
              {t('carRental.subtitle', translations.carRental.subtitle)}
            </p>
            <div className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg text-xl font-semibold">
              {t('carRental.price', translations.carRental.price)}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Description */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-luxury-100 mb-6">
                  Experience Ultimate Luxury
                </h2>
                <p className="text-lg text-luxury-300 leading-relaxed">
                  {t('carRental.description', translations.carRental.description)}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-semibold text-luxury-100 mb-6">
                  {t('carRental.features.title', translations.carRental.features.title)}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-luxury-100 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-luxury-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-luxury-900 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-luxury-100 mb-4">
                  Ready to Drive?
                </h3>
                <p className="text-luxury-300 mb-6">
                  Contact us to check availability and make your reservation. Our team will handle all the details.
                </p>
                <Link to="/contact" className="btn-primary w-full block text-center">
                  {t('common.bookNow', translations.common.bookNow)}
                </Link>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-6">
              <div 
                className="relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <ImageContainer
                  src={porscheImages[currentImage]}
                  alt="Porsche rental car"
                  className="w-full rounded-lg cursor-pointer"
                  aspectRatio="4/3"
                  onClick={() => openGallery(currentImage)}
                />
                
                {/* Navigation Overlay - Covers entire image */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 group">
                  {/* Left Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  {/* Right Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Fullscreen Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(currentImage);
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 z-10"
                    aria-label="View full gallery"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0-4h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                    {currentImage + 1} / {porscheImages.length}
                  </div>
                  
                  {/* Mobile swipe hint */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded md:hidden">
                    ← Swipe to navigate →
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery - All 21 optimized thumbnails */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2">
                {porscheThumbnails.map((thumbnail, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentImage ? 'ring-2 ring-primary-400 scale-105' : 'hover:scale-105'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <ImageContainer
                      src={thumbnail}
                      alt={`Porsche view ${index + 1}`}
                      className="w-full"
                      aspectRatio="1/1"
                    />
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <button
                onClick={() => openGallery(0)}
                className="btn-secondary w-full"
              >
                {t('common.viewGallery', translations.common.viewGallery)} ({porscheImages.length} Photos)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Gallery Modal - Only loads when opened */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-luxury-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-luxury-300 z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-luxury-300 z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Main Image - Only loads current image */}
            <div className="max-w-5xl max-h-[80vh] mx-auto relative">
              {imageLoading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                  <div className="text-white text-lg">Loading...</div>
                </div>
              )}
              <img
                src={porscheImages[currentImage]}
                alt={`Porsche view ${currentImage + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg">
              {currentImage + 1} / {porscheImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarRental; 