import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home', translations.nav.home), href: '/' },
    { name: t('nav.daytrips', translations.nav.daytrips), href: '/daytrips' },
    { name: t('nav.activities', translations.nav.activities), href: '/activities' },
    { name: t('nav.carRental', translations.nav.carRental), href: '/car-rental' },
    { name: t('nav.accommodation', translations.nav.accommodation), href: '/accommodation' },
    { name: t('nav.contact', translations.nav.contact), href: '/contact' }
  ];

  return (
    <footer className="bg-luxury-950 border-t border-luxury-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-4 focus:outline-none focus:ring-0">
              <img
                src="/images/white_icon_transparent_background.png"
                alt="Fjord Quest Adventure Icon"
                className="h-12 w-auto flex-shrink-0"
              />
              <img
                src="/images/white logo transparrent text only.png"
                alt="Fjord Quest Adventure"
                className="h-8 w-auto max-w-48 object-contain"
              />
            </Link>
            <p className="text-luxury-300 text-sm leading-relaxed">
              {t('home.intro.description', translations.home.intro.description)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-luxury-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-luxury-300 hover:text-luxury-100 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-luxury-100 font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-luxury-300 text-sm">Hello@fjordquestadventure.no</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-luxury-300 text-sm">+47 978 99 507</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-luxury-300 text-sm">Ålesund, Norway</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-luxury-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-400 text-sm">
            © {new Date().getFullYear()} Fjord Quest Adventure. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-luxury-400 hover:text-luxury-300 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-luxury-400 hover:text-luxury-300 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 