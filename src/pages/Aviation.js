import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Plane, Camera, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const Aviation = () => {
  const { t } = useLanguage();

  const flightRoute = [
    {
      location: 'Ålesund',
      description: 'Departure from the Art Nouveau city, overlooking the stunning archipelago',
      image: '/images/front page background image.jpeg'
    },
    {
      location: 'Geiranger',
      description: 'Fly over the UNESCO World Heritage Geirangerfjord with its dramatic waterfalls',
      image: '/images/Nature/geirangerfjorden_daytrips.jpg'
    },
    {
      location: 'Hellesylt',
      description: 'Witness the majestic Hellesylt waterfall from a unique aerial perspective',
      image: '/images/Nature/panorama_geiranger.jpg'
    },
    {
      location: 'Hjørundfjorden',
      description: 'Soar through the dramatic peaks surrounding this pristine fjord',
      image: '/images/Nature/trollveggen_aviation.jpg'
    }
  ];

  const highlights = [
    {
      icon: Camera,
      title: 'Unparalleled Views',
      description: 'Experience Norway\'s most iconic landscapes from the best vantage point'
    },
    {
      icon: Clock,
      title: 'Perfect Duration',
      description: 'One hour of pure wonder - enough time to see everything without fatigue'
    },
    {
      icon: Wind,
      title: 'Weather Dependent',
      description: 'Flights are subject to weather conditions for your safety and optimal experience'
    },
    {
      icon: Plane,
      title: 'Professional Pilots',
      description: 'Expert local pilots with extensive knowledge of the region'
    }
  ];

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/trollveggen_aviation.jpg"
            alt="Trollveggen mountain aerial view"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-luxury-100 mb-6">
            {t('aviation.title', translations.aviation.title)}
          </h1>
          <p className="text-2xl md:text-3xl text-luxury-200 mb-8">
            {t('aviation.subtitle', translations.aviation.subtitle)}
          </p>
          <div className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg text-xl font-semibold">
            <Clock className="h-6 w-6 mr-3" />
            {t('aviation.duration', translations.aviation.duration)}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-8">
              A Journey Above the Clouds
            </h2>
            <p className="text-xl text-luxury-300 leading-relaxed mb-12">
              {t('aviation.description', translations.aviation.description)}
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-luxury-100 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-luxury-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flight Route */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Your Flight Route
            </h2>
            <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
              Experience the most spectacular sights of Western Norway in one unforgettable hour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flightRoute.map((stop, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="order-2 lg:order-1 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-100">
                        {stop.location}
                      </h3>
                    </div>
                    <p className="text-luxury-300 leading-relaxed">
                      {stop.description}
                    </p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <ImageContainer
                      src={stop.image}
                      alt={stop.location}
                      className="w-full"
                      aspectRatio="4/3"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-8">
              Ready for Takeoff?
            </h2>
            <p className="text-xl text-luxury-300 mb-12">
              Book your helicopter adventure today and create memories that will last a lifetime. 
              Our experienced team will ensure every detail is perfect for your aerial journey.
            </p>
            
            <div className="bg-luxury-950 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">1 Hour</div>
                  <div className="text-luxury-300">Flight Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">4 Stops</div>
                  <div className="text-luxury-300">Scenic Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">All Year</div>
                  <div className="text-luxury-300">Weather Permitting</div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-block text-center">
                {t('common.bookNow', translations.common.bookNow)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aviation; 