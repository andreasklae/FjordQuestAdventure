import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Utensils, Bed, Car, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const Accommodation = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Load and parse accommodations markdown
    const loadAccommodations = async () => {
      try {
        const response = await fetch('/accommodations.md');
        const text = await response.text();
        const parsed = parseAccommodations(text);
        setAccommodations(parsed);
      } catch (error) {
        console.error('Error loading accommodations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAccommodations();
  }, []);

  const parseAccommodations = (markdown) => {
    const sections = markdown.split('###').filter(section => section.trim());
    const accommodations = [];

    sections.forEach(section => {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) return;

      const title = lines[0].trim();
      if (title === 'THE THIEF' || title.includes('Hotel') || title.includes('Storfjord') || title.includes('Union') || title.includes('Chalet')) {
        const accommodation = {
          name: title,
          location: '',
          website: '',
          description: '',
          amenities: [],
          roomTypes: [],
          dining: [],
          experiences: [],
          images: getAccommodationImages(title)
        };

        let currentSection = '';
        let collectingItems = false;

        lines.slice(1).forEach(line => {
          const trimmed = line.trim();
          if (!trimmed) return;

          if (trimmed.startsWith('**Location:**')) {
            accommodation.location = trimmed.replace('**Location:**', '').trim();
          } else if (trimmed.includes('[Website]')) {
            accommodation.website = trimmed.match(/\((.*?)\)/)?.[1] || '';
          } else if (trimmed.startsWith('**')) {
            currentSection = trimmed.replace(/\*\*/g, '').replace(':', '');
            collectingItems = ['Room types', 'Dining options', 'Experiences', 'Facilities', 'Amenities include'].includes(currentSection);
          } else if (trimmed.startsWith('- **') && collectingItems) {
            const item = {
              name: trimmed.match(/\*\*(.*?)\*\*/)?.[1] || '',
              description: trimmed.replace(/- \*\*.*?\*\*:?/, '').trim()
            };
            if (currentSection.includes('Room') || currentSection.includes('Suite')) {
              accommodation.roomTypes.push(item);
            } else if (currentSection.includes('Dining')) {
              accommodation.dining.push(item);
            } else if (currentSection.includes('Experience') || currentSection.includes('Facilities')) {
              accommodation.experiences.push(item);
            } else {
              accommodation.amenities.push(item);
            }
          } else if (trimmed.startsWith('- ') && collectingItems) {
            accommodation.amenities.push({
              name: trimmed.replace('- ', ''),
              description: ''
            });
          } else if (!trimmed.startsWith('**') && !collectingItems && !trimmed.includes('[Website]')) {
            accommodation.description += (accommodation.description ? ' ' : '') + trimmed;
          }
        });

        accommodations.push(accommodation);
      }
    });

    return accommodations;
  };

  const getAccommodationImages = (name) => {
    const imageMap = {
      'Hotel Brosundet': ['/images/Accommodations/Hotel brosundet/placeholder.jpg'],
      'Storfjord Hotel': ['/images/Accommodations/Storfjord hotel/placeholder.jpg'],
      'Union Øye': ['/images/Accommodations/Union øye/placeholder.jpg'],
      'Chalet Strandafjellet': ['/images/Accommodations/chalet stranda/chalet/Stue 1-1-1.jpg', '/images/Accommodations/chalet stranda/chalet/Master soverom 1-1-1.jpg'],
      'THE THIEF': [
        '/images/Accommodations/thief/Living-room-window-the-oslo-suite-THE-THIEF.jpg',
        '/images/Accommodations/thief/Night-fascade-THE-THIEF.jpg',
        '/images/Accommodations/thief/Tjuvholmen-view.jpg',
        '/images/Accommodations/thief/Sea-view-THE-THIEF.png'
      ]
    };
    return imageMap[name] || ['/images/placeholder.jpg'];
  };

  const getRegion = (name) => {
    if (name === 'THE THIEF') return 'Oslo';
    if (name.includes('Chalet')) return 'Stranda';
    return 'Ålesund Region';
  };

  const groupedAccommodations = accommodations.reduce((acc, accommodation) => {
    const region = getRegion(accommodation.name);
    if (!acc[region]) acc[region] = [];
    acc[region].push(accommodation);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury-950 flex items-center justify-center">
        <div className="text-luxury-300">Loading accommodations...</div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/dalsnibba_accommodation.jpg"
            alt="Dalsnibba mountain view"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              {t('nav.accommodation', translations.nav.accommodation)}
            </h1>
            <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
              {t('home.services.accommodation.description', translations.home.services.accommodation.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-20 bg-luxury-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Car className="h-8 w-8 text-primary-400 mr-3" />
                  <h2 className="text-2xl font-bold text-luxury-100">
                    {t('home.services.transport.title', translations.home.services.transport.title)}
                  </h2>
                </div>
                <p className="text-luxury-300 mb-6">
                  {t('home.services.transport.description', translations.home.services.transport.description)}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-luxury-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-luxury-100 mb-2">Mercedes V-Class</h3>
                    <p className="text-sm text-luxury-300">Luxury 7-seater vehicles</p>
                  </div>
                  <div className="bg-luxury-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-luxury-100 mb-2">Professional Drivers</h3>
                    <p className="text-sm text-luxury-300">Experienced local guides</p>
                  </div>
                  <div className="bg-luxury-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-luxury-100 mb-2">Flexible Pickup</h3>
                    <p className="text-sm text-luxury-300">Airport, hotel, or any location</p>
                  </div>
                  <div className="bg-luxury-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-luxury-100 mb-2">All Weather</h3>
                    <p className="text-sm text-luxury-300">Comfortable year-round travel</p>
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
        </div>
      </section>

      {/* Accommodations by Region */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedAccommodations).map(([region, hotels]) => (
            <div key={region} className="mb-20">
              <h2 className="text-3xl font-bold text-luxury-100 mb-12 text-center">
                {region}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {hotels.map((accommodation, index) => (
                  <div key={index} className="card overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="order-2 lg:order-1 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-luxury-100">
                            {accommodation.name}
                          </h3>
                          {accommodation.website && (
                            <a
                              href={accommodation.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-400 hover:text-primary-300 transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>

                        {accommodation.location && (
                          <div className="flex items-center mb-4">
                            <MapPin className="h-4 w-4 text-primary-400 mr-2" />
                            <span className="text-sm text-luxury-300">{accommodation.location}</span>
                          </div>
                        )}

                        <p className="text-luxury-300 mb-4 text-sm leading-relaxed">
                          {accommodation.description}
                        </p>

                        {accommodation.roomTypes.length > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center mb-2">
                              <Bed className="h-4 w-4 text-primary-400 mr-2" />
                              <span className="text-sm font-medium text-luxury-200">Room Types</span>
                            </div>
                            <div className="space-y-2">
                              {accommodation.roomTypes.slice(0, 3).map((room, roomIndex) => (
                                <div key={roomIndex} className="bg-luxury-800 p-3 rounded">
                                  <div className="font-medium text-luxury-100 text-sm">{room.name}</div>
                                  {room.description && (
                                    <div className="text-xs text-luxury-300 mt-1">{room.description}</div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {accommodation.dining.length > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center mb-2">
                              <Utensils className="h-4 w-4 text-primary-400 mr-2" />
                              <span className="text-sm font-medium text-luxury-200">Dining</span>
                            </div>
                            <div className="space-y-1">
                              {accommodation.dining.slice(0, 3).map((restaurant, restIndex) => (
                                <div key={restIndex} className="text-xs text-luxury-300">
                                  <strong>{restaurant.name}</strong> - {restaurant.description}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-6">
                          <Link to="/contact" className="btn-primary w-full block text-center">
                            {t('common.bookNow', translations.common.bookNow)}
                          </Link>
                        </div>
                      </div>

                      <div className="order-1 lg:order-2">
                        <ImageContainer
                          src={accommodation.images[0]}
                          alt={accommodation.name}
                          className="w-full"
                          aspectRatio="4/3"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accommodation; 