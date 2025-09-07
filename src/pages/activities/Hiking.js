import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mountain, Camera, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import ImageContainer from '../../components/common/ImageContainer';

const Hiking = () => {
  const { t } = useLanguage();

  const hikingLocations = [
    {
      location: 'Ålesund',
      description: 'Urban hiking with stunning city and archipelago views',
      hikes: ['Sukkertoppen', 'Aksla active walk', 'Godøya'],
      image: '/images/front page background image.jpeg'
    },
    {
      location: 'Storfjord Hotel',
      description: 'Mountain peaks with panoramic fjord vistas',
      hikes: ['Hautua', 'Frostatind', 'Giskemonibba', 'Lauparen'],
      image: '/images/Nature/panorama_geiranger.jpg'
    },
    {
      location: 'Valldal/Juvet',
      description: 'Dramatic peaks in the heart of the fjords',
      hikes: ['Rugga', 'Mefjellet', 'Store Trolltind'],
      image: '/images/Nature/trollstigen_activities.jpg'
    },
    {
      location: 'Stranda/Union Øye',
      description: 'Iconic peaks overlooking pristine fjords',
      hikes: ['Urke', 'Urkeegga', 'Saska', 'Slogen'],
      image: '/images/Nature/geirangerfjorden_daytrips.jpg'
    },
    {
      location: 'Andalsnes',
      description: 'Gateway to the dramatic Romsdal mountains',
      hikes: ['Litlefjellet', 'Nesaksla', 'Romsdalseggen'],
      image: '/images/Nature/trollveggen_aviation.jpg'
    },
    {
      location: 'Geiranger',
      description: 'UNESCO World Heritage hiking with waterfall views',
      hikes: ['Vesteraas Gaard', 'Geitfonnegga', 'Skageflå'],
      image: '/images/Nature/panorama_geiranger.jpg'
    }
  ];

  const highlights = [
    {
      icon: Mountain,
      title: 'All Skill Levels',
      description: 'From gentle walks to challenging mountain peaks, we have hikes for everyone'
    },
    {
      icon: Clock,
      title: 'Flexible Duration',
      description: '2-3 hours for shorter hikes, up to 6-10 hours for full-day adventures'
    },
    {
      icon: Camera,
      title: 'Spectacular Views',
      description: 'Experience Norway\'s most iconic landscapes from the best vantage points'
    },
    {
      icon: MapPin,
      title: 'Expert Guidance',
      description: 'Local guides share stories, ensure safety, and find the perfect trails for you'
    }
  ];

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/panorama_geiranger.jpg"
            alt="Norwegian mountain hiking"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              Hiking Adventures
            </h1>
            <p className="text-xl text-luxury-300 mb-8 max-w-3xl mx-auto">
              Discover Norway's breathtaking mountains and fjords on foot. From gentle coastal walks to challenging mountain peaks, experience the raw beauty of Norwegian nature with expert local guides.
            </p>
            <div className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg text-xl font-semibold">
              <Clock className="h-5 w-5 mr-2" />
              2-10 Hours Available
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Why Choose Our Hiking Tours
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-100 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-luxury-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiking Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Hiking Locations
            </h2>
            <p className="text-lg text-luxury-300 max-w-3xl mx-auto">
              Explore diverse landscapes across Western Norway, each offering unique perspectives and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hikingLocations.map((location, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="mb-6">
                  <ImageContainer
                    src={location.image}
                    alt={location.location}
                    className="w-full"
                    aspectRatio="4/3"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-luxury-100 mb-3">
                    {location.location}
                  </h3>
                  <p className="text-luxury-300 mb-4">
                    {location.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-luxury-200 mb-2">Available Hikes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.hikes.map((hike, hikeIndex) => (
                        <span
                          key={hikeIndex}
                          className="bg-luxury-800 text-luxury-300 px-3 py-1 rounded-full text-sm"
                        >
                          {hike}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
            Ready for Your Hiking Adventure?
          </h2>
          <p className="text-lg text-luxury-300 mb-8 max-w-2xl mx-auto">
            Contact us to plan your perfect hiking experience. We'll match you with the ideal trails based on your fitness level, interests, and available time.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact" className="btn-primary inline-block">
              Book Your Hiking Tour
            </Link>
            <Link to="/activities" className="btn-secondary inline-block">
              Back to All Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hiking;
