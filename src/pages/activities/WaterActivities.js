import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Waves, Camera, MapPin, Droplets, Wind } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import ImageContainer from '../../components/common/ImageContainer';

const WaterActivities = () => {
  const { t } = useLanguage();

  const waterActivities = [
    {
      name: 'Kayaking',
      duration: '2-6 hours',
      description: 'Paddle through pristine fjords and experience Norway from the water. Perfect for all skill levels with stunning mountain reflections.',
      highlights: ['Silent exploration', 'Wildlife spotting', 'Photographer\'s paradise', 'All skill levels welcome'],
      image: '/images/Nature/geirangerfjorden_daytrips.jpg'
    },
    {
      name: 'Rafting',
      duration: '3-4 hours',
      description: 'Experience the thrill of Norwegian rapids with professional guides. Navigate exciting whitewater while surrounded by dramatic landscapes.',
      highlights: ['Adrenaline rush', 'Team adventure', 'Professional guides', 'Safety equipment included'],
      image: '/images/Nature/trollveggen_aviation.jpg'
    },
    {
      name: 'Canyoning',
      duration: '3-4 hours',
      description: 'Descend through spectacular gorges using ropes, slides, and jumps. An adventurous way to explore Norway\'s hidden water features.',
      highlights: ['Technical adventure', 'Hidden gorges', 'Rappelling & jumping', 'Unique perspective'],
      image: '/images/Nature/trollstigen_activities.jpg'
    },
    {
      name: 'Snorkeling',
      duration: '3-4 hours',
      description: 'Discover the surprisingly rich underwater world of Norwegian fjords. Crystal clear waters reveal unique marine life and underwater landscapes.',
      highlights: ['Crystal clear waters', 'Marine life', 'Unique experience', 'Professional equipment'],
      image: '/images/Nature/panorama_geiranger.jpg'
    }
  ];

  const highlights = [
    {
      icon: Waves,
      title: 'Pristine Waters',
      description: 'Experience some of the world\'s clearest and most pristine waters in the Norwegian fjords'
    },
    {
      icon: Clock,
      title: 'Flexible Duration',
      description: 'From 2-hour gentle kayaking to full-day multi-activity adventures'
    },
    {
      icon: Camera,
      title: 'Unique Perspectives',
      description: 'See Norway\'s dramatic landscapes from water level - a completely different viewpoint'
    },
    {
      icon: MapPin,
      title: 'Expert Guides',
      description: 'Certified water sports instructors ensure safety while maximizing your experience'
    }
  ];

  const safetyFeatures = [
    {
      icon: Droplets,
      title: 'Professional Equipment',
      description: 'High-quality wetsuits, life jackets, and safety gear for all weather conditions'
    },
    {
      icon: Wind,
      title: 'Weather Monitoring',
      description: 'Continuous weather assessment to ensure optimal and safe conditions for all activities'
    },
    {
      icon: MapPin,
      title: 'Certified Instructors',
      description: 'All guides are certified in water safety and first aid, with extensive local knowledge'
    }
  ];

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/geirangerfjorden_daytrips.jpg"
            alt="Norwegian water activities"
            className="w-full h-full"
            aspectRatio="16/9"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              Water Activities
            </h1>
            <p className="text-xl text-luxury-300 mb-8 max-w-3xl mx-auto">
              Immerse yourself in Norway's pristine waters. From peaceful kayaking through mirror-like fjords to thrilling whitewater rafting, experience the Norwegian landscape from its most dramatic perspective.
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
              Why Choose Our Water Activities
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

      {/* Water Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Available Water Activities
            </h2>
            <p className="text-lg text-luxury-300 max-w-3xl mx-auto">
              Choose from a variety of water-based adventures, each offering unique thrills and perspectives on Norway's spectacular aquatic landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {waterActivities.map((activity, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="mb-6">
                  <ImageContainer
                    src={activity.image}
                    alt={activity.name}
                    className="w-full"
                    aspectRatio="4/3"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-luxury-100">
                      {activity.name}
                    </h3>
                    <div className="flex items-center text-primary-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-luxury-300 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-luxury-200 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="bg-luxury-800 text-luxury-300 px-3 py-2 rounded text-sm"
                        >
                          {highlight}
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

      {/* Safety & Equipment Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
              Safety & Equipment
            </h2>
            <p className="text-lg text-luxury-300 max-w-3xl mx-auto">
              Your safety is our top priority. We provide professional-grade equipment and maintain the highest safety standards for all water activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-luxury-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Conditions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-luxury-900 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-luxury-100 mb-4">
                Best Conditions
              </h2>
              <p className="text-luxury-300">
                Our water activities are available year-round, with each season offering unique experiences and conditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-luxury-100 mb-3">Summer (June - August)</h3>
                <p className="text-luxury-300">Warmest water temperatures, longest days, and most stable weather conditions. Perfect for beginners and extended adventures.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-luxury-100 mb-3">Winter (December - February)</h3>
                <p className="text-luxury-300">Dramatic winter landscapes, potential Northern Lights, and unique cold-water experiences. Requires appropriate gear and preparation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-100 mb-6">
            Ready to Dive In?
          </h2>
          <p className="text-lg text-luxury-300 mb-8 max-w-2xl mx-auto">
            Experience Norway's pristine waters with expert guides and professional equipment. From peaceful kayaking to thrilling rafting - we'll match you with the perfect water adventure.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact" className="btn-primary inline-block">
              Book Your Water Adventure
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

export default WaterActivities;
