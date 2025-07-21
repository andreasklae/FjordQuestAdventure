import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home', translations.nav.home), href: '/' },
    { name: t('nav.daytrips', translations.nav.daytrips), href: '/daytrips' },
    { name: t('nav.activities', translations.nav.activities), href: '/activities' },
    { name: t('nav.carRental', translations.nav.carRental), href: '/car-rental' },
    { name: t('nav.accommodation', translations.nav.accommodation), href: '/accommodation' },
    { name: t('nav.aviation', translations.nav.aviation), href: '/aviation' },
    { name: t('nav.contact', translations.nav.contact), href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-luxury-950/95 backdrop-blur-sm border-b border-luxury-800 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-0 ${
                  isActive(item.href)
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-white hover:text-primary-200 focus:text-primary-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-primary-200 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-base font-medium uppercase">
                {language === 'en' ? 'NO' : 'EN'}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-primary-200 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-200 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-luxury-900 border-t border-luxury-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    isActive(item.href)
                      ? 'text-primary-400 bg-luxury-800'
                      : 'text-white hover:text-primary-200 hover:bg-luxury-800 focus:text-primary-200 focus:bg-luxury-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 