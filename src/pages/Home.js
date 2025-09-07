import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Plane, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('home.services.daytrips.title', translations.home.services.daytrips.title),
      description: t('home.services.daytrips.description', translations.home.services.daytrips.description),
      icon: Calendar,
      image: '/images/Nature/geirangerfjorden_daytrips.jpg',
      link: '/daytrips'
    },
    {
      title: t('home.services.activities.title', translations.home.services.activities.title),
      description: t('home.services.activities.description', translations.home.services.activities.description),
      icon: MapPin,
      image: '/images/Nature/trollstigen_activities.jpg',
      link: '/activities'
    },
    {
      title: t('home.services.accommodation.title', translations.home.services.accommodation.title),
      description: t('home.services.accommodation.description', translations.home.services.accommodation.description),
      icon: MapPin,
      image: '/images/Accommodations/thief/Living-room-window-the-oslo-suite-THE-THIEF.jpg',
      link: '/accommodation'
    },
    {
      title: t('carRental.title', translations.carRental.title),
      description: t('carRental.description', translations.carRental.description),
      icon: Car,
      image: '/images/porche/optimized/FNP08686-Forbedret-NR.jpg',
      link: '/car-rental'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/front page background image.jpeg"
            alt="Norwegian fjords"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <img
              src="/images/white_logo_transparent_background.png"
              alt="Fjord Quest Adventure"
              className="h-48 md:h-64 lg:h-80 w-auto mx-auto mb-8 max-w-full"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-light text-luxury-200 mb-8 text-balance">
            {t('hero.tagline', translations.hero.tagline)}
          </h2>
          
          <Link
            to="/contact"
            className="inline-flex items-center btn-primary text-lg px-8 py-4 group"
          >
            {t('hero.cta', translations.hero.cta)}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              {t('home.intro.title', translations.home.intro.title)}
            </h2>
            <p className="text-lg text-luxury-300 leading-relaxed">
              {t('home.intro.description', translations.home.intro.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-luxury-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              {t('home.services.title', translations.home.services.title)}
            </h2>
            <p className="text-lg text-luxury-300 max-w-3xl mx-auto mb-8">
              Every experience is completely tailor-made and adaptable to your preferences. 
              We work closely with you to create the perfect Norwegian adventure that matches your interests, timeline, and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group cursor-pointer hover:scale-105 transition-transform duration-200">
                <Link to={service.link}>
                  <div className="p-6">
                    <div className="mb-4">
                      <ImageContainer
                        src={service.image}
                        alt={service.title}
                        className="w-full rounded-lg"
                        aspectRatio="4/3"
                      />
                    </div>
                    <div className="flex items-center mb-3">
                      <service.icon className="h-6 w-6 text-primary-400 mr-3" />
                      <h3 className="text-xl font-semibold text-luxury-100">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-luxury-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors duration-200">
                      {t('common.learnMore', translations.common.learnMore)}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
                {t('home.services.transport.title', translations.home.services.transport.title)}
              </h2>
              <p className="text-lg text-luxury-300 leading-relaxed mb-8">
                {t('home.services.transport.description', translations.home.services.transport.description)}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-4"></div>
                  <span className="text-luxury-300">Mercedes V-Class luxury vehicles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-4"></div>
                  <span className="text-luxury-300">Professional drivers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-4"></div>
                  <span className="text-luxury-300">Flexible pickup locations</span>
                </div>
              </div>
            </div>
            <div>
              <ImageContainer
                src="/images/placeholder.jpg"
                alt="Mercedes V-Class Transport"
                className="w-full rounded-lg"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 