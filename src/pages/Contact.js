import React, { useState } from 'react';
import { Send, User, Phone, Mail, Users, DollarSign, Calendar, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ImageContainer from '../components/common/ImageContainer';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '',
    budget: '',
    currency: 'NOK',
    season: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        people: '',
        budget: '',
        currency: 'NOK',
        season: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currencies = [
    { code: 'NOK', symbol: 'kr' },
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' }
  ];

  const seasons = [
    { value: 'winter', label: t('contact.seasons.winter', translations.contact.seasons.winter) },
    { value: 'spring', label: t('contact.seasons.spring', translations.contact.seasons.spring) },
    { value: 'summer', label: t('contact.seasons.summer', translations.contact.seasons.summer) },
    { value: 'fall', label: t('contact.seasons.fall', translations.contact.seasons.fall) }
  ];

  return (
    <div className="bg-luxury-950 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 bg-luxury-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageContainer
            src="/images/Nature/panorama_geiranger.jpg"
            alt="Norwegian fjords panorama"
            className="w-full h-full opacity-30"
            aspectRatio="16/9"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-luxury-100 mb-6">
              {t('contact.title', translations.contact.title)}
            </h1>
            <p className="text-xl text-luxury-300 max-w-3xl mx-auto">
              {t('contact.subtitle', translations.contact.subtitle)}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-luxury-200 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    {t('contact.form.name', translations.contact.form.name)}
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-lg text-luxury-100 placeholder-luxury-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-luxury-200 mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    {t('contact.form.phone', translations.contact.form.phone)}
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-lg text-luxury-100 placeholder-luxury-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+47 123 45 678"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-luxury-200 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  {t('contact.form.email', translations.contact.form.email)}
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-lg text-luxury-100 placeholder-luxury-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Number of People */}
                <div>
                  <label htmlFor="people" className="block text-sm font-medium text-luxury-200 mb-2">
                    <Users className="h-4 w-4 inline mr-2" />
                    {t('contact.form.people', translations.contact.form.people)}
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    id="people"
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-lg text-luxury-100 placeholder-luxury-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="2"
                  />
                </div>

                {/* Season */}
                <div>
                  <label htmlFor="season" className="block text-sm font-medium text-luxury-200 mb-2">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    {t('contact.form.season', translations.contact.form.season)}
                  </label>
                  <select
                    id="season"
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-lg text-luxury-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select preferred season</option>
                    {seasons.map(season => (
                      <option key={season.value} value={season.value}>
                        {season.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-luxury-200 mb-2">
                  <DollarSign className="h-4 w-4 inline mr-2" />
                  {t('contact.form.budget', translations.contact.form.budget)}
                </label>
                <div className="flex">
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-l-lg text-luxury-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-r-lg text-luxury-100 placeholder-luxury-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="50000"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-luxury-200 mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  {t('contact.form.message', translations.contact.form.message)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-luxury-800 border border-luxury-700 rounded-lg text-luxury-100 placeholder-luxury-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your dream trip to Norway..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t('contact.form.submit', translations.contact.form.submit)}
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900 border border-green-700 rounded-lg text-green-100">
                  Thank you for your inquiry! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900 border border-red-700 rounded-lg text-red-100">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-100 mb-4">
              Get in Touch
            </h2>
            <p className="text-luxury-300 max-w-2xl mx-auto">
              Ready to start planning your Norwegian adventure? We're here to help create the perfect itinerary for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-luxury-100 mb-2">Email</h3>
              <p className="text-luxury-300">info@fjordquest.no</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-luxury-100 mb-2">Phone</h3>
              <p className="text-luxury-300">+47 123 45 678</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-luxury-100 mb-2">Response Time</h3>
              <p className="text-luxury-300">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 