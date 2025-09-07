import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bike, Camera, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import ImageContainer from '../../components/common/ImageContainer';

const Biking = () => {
  const { t } = useLanguage();

  const bikingLocations = [
    {
      location: 'Ålesund',
      description: 'Urban e-bike tours through Art Nouveau architecture',
      routes: ['Art Nouveau e-bike tour', 'E-bike and hike combination'],
      image: '/images/front page background image.jpeg'
    },
    {
      location: 'Storfjord Hotel',
      description: 'Mountain biking with spectacular fjord views',
      routes: ['Valle Seatra loop', 'Svartloken loop'],
      image: '/images/Nature/panorama_geiranger.jpg'
    },
    {
      location: 'Valldal/Juvet',
      description: 'Scenic routes through dramatic valleys',
      routes: ['Nysaetra trail', 'Trollstigen approach'],
      image: '/images/Nature/trollstigen_activities.jpg'
    },
    {
      location: 'Stranda/Union Øye',
      description: 'Fjord-side cycling with mountain backdrops',
      routes: ['Norangsdalen valley', 'Flofjellet ascent'],
      image: '/images/Nature/geirangerfjorden_daytrips.jpg'
    },
    {
      location: 'Andalsnes',
      description: 'Gateway to the famous Trollstigen road',
      routes: ['Venjedalen trail', 'Trollstigen cycling'],
      image: '/images/Nature/trollveggen_aviation.jpg'
    },
    {
      location: 'Geiranger',
      description: 'UNESCO World Heritage cycling routes',
      routes: ['Vesteraas & Flydalsjuvet', 'Dalsnibba road'],
      image: '/images/Nature/panorama_geiranger.jpg'
    }
  ];

  const highlights = [
    {
      icon: Bike,
      title: 'E-Bike Options',
      description: 'Electric bikes available to help you conquer any terrain with ease'
    },
    {
      icon: Clock,
      title: 'Flexible Tours',
      description: '2-3 hours for scenic rides, up to 4-6 hours for challenging adventures'
    },
    {
      icon: Camera,
      title: 'Scenic Routes',
      description: 'Carefully selected paths showcasing Norway\'s most beautiful landscapes'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Guides who know the best routes, hidden gems, and safety considerations'
    }
  ];

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/trollstigen_activities.jpg"
            alt="Norwegian biking adventures"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              Biking Adventures
            </h1>
            <p className="text-xl text-luxury-300 mb-8 max-w-3xl mx-auto">
              Explore Norway's stunning landscapes on two wheels. From leisurely e-bike tours through historic cities to challenging mountain trails, discover the fjords from a unique perspective.
            </p>
            <div className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg text-xl font-semibold">
              <Clock className="h-5 w-5 mr-2" />
              2-6 Hours Available
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Why Choose Our Biking Tours
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

      {/* Biking Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Biking Locations
            </h2>
            <p className="text-lg text-luxury-300 max-w-3xl mx-auto">
              Cycle through diverse Norwegian landscapes, from coastal paths to mountain trails, each offering unique challenges and breathtaking views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikingLocations.map((location, index) => (
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
                    <h4 className="text-sm font-medium text-luxury-200 mb-2">Available Routes:</h4>
                    <div className="space-y-2">
                      {location.routes.map((route, routeIndex) => (
                        <div
                          key={routeIndex}
                          className="bg-luxury-800 text-luxury-300 px-3 py-2 rounded text-sm"
                        >
                          {route}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Safety Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Equipment & Safety
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-100 mb-3">Quality Bikes</h3>
              <p className="text-luxury-300">High-quality mountain bikes and e-bikes, regularly maintained and suited for Norwegian terrain.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-100 mb-3">Safety First</h3>
              <p className="text-luxury-300">Helmets, safety equipment, and comprehensive briefings ensure your adventure is both thrilling and safe.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-100 mb-3">Photo Stops</h3>
              <p className="text-luxury-300">Strategic stops at the most photogenic viewpoints to capture your Norwegian biking adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
            Ready to Explore on Two Wheels?
          </h2>
          <p className="text-lg text-luxury-300 mb-8 max-w-2xl mx-auto">
            Whether you prefer leisurely e-bike tours or challenging mountain trails, we'll create the perfect biking experience for your skill level and interests.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact" className="btn-primary inline-block">
              Book Your Biking Tour
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

export default Biking;
