import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Load activities data
    const loadActivities = async () => {
      try {
        const response = await fetch('/activities.json');
        const data = await response.json();
        setActivities(data.categories);
      } catch (error) {
        console.error('Error loading activities:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury-950 flex items-center justify-center">
        <div className="text-luxury-300">Loading activities...</div>
      </div>
    );
  }

  const getActivityImage = (categoryName) => {
    const images = {
      'Hiking': '/images/Nature/panorama_geiranger.jpg',
      'Biking': '/images/Nature/trollstigen_activities.jpg',
      'Kayaking': '/images/Nature/geirangerfjorden_daytrips.jpg',
      'Other Water Activities': '/images/Nature/geirangerfjorden_daytrips.jpg',
      'City Walks': '/images/front page background image.jpeg',
      'Other Activities': '/images/Nature/panorama_geiranger.jpg',
      'Winter Activities': '/images/Accommodations/chalet stranda/ski resort/Emil Sollie_EKS_5028.JPG',
      'Private Zodiac Charter': '/images/Nature/geirangerfjorden_daytrips.jpg',
      'Sightseeing with Driver/Guide': '/images/Nature/panorama_geiranger.jpg'
    };
    return images[categoryName] || '/images/Nature/panorama_geiranger.jpg';
  };

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/trollstigen_activities.jpg"
            alt="Trollstigen activities"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              {t('nav.activities', translations.nav.activities)}
            </h1>
            <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
              {t('home.services.activities.description', translations.home.services.activities.description)}
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((category, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="mb-6">
                  <ImageContainer
                    src={getActivityImage(category.name)}
                    alt={category.name}
                    className="w-full"
                    aspectRatio="4/3"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-luxury-100 mb-4">
                    {category.name}
                  </h3>

                  {/* Duration Information */}
                  {category.durations && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-primary-400 mr-2" />
                        <span className="text-sm font-medium text-luxury-200">
                          Duration Options
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.durations.map((duration, durIndex) => (
                          <span
                            key={durIndex}
                            className="bg-luxury-800 text-luxury-300 px-3 py-1 rounded-full text-sm"
                          >
                            {duration}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Single Duration */}
                  {category.duration && (
                    <div className="mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-primary-400 mr-2" />
                        <span className="text-sm text-luxury-300">
                          {category.duration}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Locations */}
                  {category.locations && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-primary-400 mr-2" />
                        <span className="text-sm font-medium text-luxury-200">
                          Available Locations
                        </span>
                      </div>
                      <div className="space-y-2">
                        {Array.isArray(category.locations) ? (
                          // Handle array of locations (like Winter Activities)
                          category.locations.map((location, index) => (
                            <div key={index} className="bg-luxury-800 p-3 rounded-lg">
                              <div className="font-medium text-luxury-100">
                                {location}
                              </div>
                            </div>
                          ))
                        ) : (
                          // Handle object of locations with activities (like Hiking, Biking)
                          Object.entries(category.locations).map(([location, activities]) => (
                            <div key={location} className="bg-luxury-800 p-3 rounded-lg">
                              <div className="font-medium text-luxury-100 mb-1">
                                {location}
                              </div>
                              <div className="text-sm text-luxury-300">
                                {Array.isArray(activities) ? activities.join(', ') : activities}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}

                  {/* Direct Activities List */}
                  {category.activities && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Users className="h-4 w-4 text-primary-400 mr-2" />
                        <span className="text-sm font-medium text-luxury-200">
                          Activities Available
                        </span>
                      </div>
                      <div className="space-y-1">
                        {category.activities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="text-sm text-luxury-300 bg-luxury-800 px-3 py-2 rounded"
                          >
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Notes */}
                  {category.note && (
                    <div className="mb-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-4 w-4 text-primary-400 mr-2 mt-0.5" />
                        <span className="text-sm text-luxury-300">
                          {category.note}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
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

export default Activities; 