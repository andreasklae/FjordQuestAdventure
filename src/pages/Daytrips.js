import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const Daytrips = () => {
  const [daytrips, setDaytrips] = useState([]);
  const [expandedTrip, setExpandedTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Load daytrips data
    const loadDaytrips = async () => {
      try {
        const response = await fetch('/daytrips.json');
        const data = await response.json();
        setDaytrips(data.trips);
      } catch (error) {
        console.error('Error loading daytrips:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDaytrips();
  }, []);

  const toggleItinerary = (index) => {
    setExpandedTrip(expandedTrip === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury-950 flex items-center justify-center">
        <div className="text-luxury-300">Loading daytrips...</div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/geirangerfjorden_daytrips.jpg"
            alt="Geirangerfjord daytrips"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              {t('nav.daytrips', translations.nav.daytrips)}
            </h1>
            <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
              {t('home.services.daytrips.description', translations.home.services.daytrips.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Daytrips Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {daytrips.map((trip, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-luxury-100">
                      {trip.trip_name}
                    </h2>
                    <div className="flex items-center text-luxury-400">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="text-sm">
                        {trip.trip_start} - {trip.trip_end}
                      </span>
                    </div>
                  </div>

                  <p className="text-luxury-300 mb-6 leading-relaxed">
                    {trip.description}
                  </p>

                  <div className="mb-6">
                    <ImageContainer
                      src={trip.image}
                      alt={trip.trip_name}
                      className="w-full rounded-lg"
                      aspectRatio="4/3"
                    />
                  </div>

                  <button
                    onClick={() => toggleItinerary(index)}
                    className="w-full btn-secondary flex items-center justify-center mb-4 focus:ring-0 focus:outline-none"
                  >
                    <span>View Itinerary</span>
                    {expandedTrip === index ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    )}
                  </button>

                  {expandedTrip === index && (
                    <div className="border-t border-luxury-800 pt-6">
                      <h3 className="text-lg font-semibold text-luxury-100 mb-4">
                        Detailed Itinerary
                      </h3>
                      <div className="space-y-4">
                        {trip.itinerary.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-16 text-sm text-luxury-400 font-medium">
                              {item.start_time}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <MapPin className="h-4 w-4 text-primary-400 mr-2" />
                                <h4 className="font-medium text-luxury-100">
                                  {item.destination}
                                </h4>
                                <span className="ml-auto text-sm text-luxury-400">
                                  {item.duration}
                                </span>
                              </div>
                              <p className="text-sm text-luxury-300">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-luxury-800">
                    <Link to="/contact" className="w-full btn-primary block text-center">
                      {t('common.bookNow', translations.common.bookNow)}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Daytrips; 