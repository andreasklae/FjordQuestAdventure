# Fjord Quest Adventure - Luxury Travel Website

A premium React-based website for **Fjord Quest Adventure**, a Norwegian luxury travel company specializing in high-end vacation experiences for discerning travelers.

## 🌟 Features

- **Modern Design**: Dark luxury blue color scheme with premium typography
- **Multi-language Support**: English and Norwegian language toggle
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Accessibility**: WCAG compliant with screen reader support and keyboard navigation
- **Dynamic Content**: Loads daytrips from JSON, activities from JSON, and accommodations from Markdown
- **Image Optimization**: Fixed aspect ratio containers prevent layout shifts
- **Premium Services**: Showcases daytrips, activities, car rental, aviation, and accommodations

## 🎯 Pages

- **Home**: Hero section with featured services and company introduction
- **Daytrips**: Dynamic content from `daytrips.json` with detailed itineraries
- **Activities**: Dynamic content from `activities.json` with location-based activities
- **Car Rental**: Porsche rental service with image gallery (6,500 NOK/day)
- **Accommodation**: Parses `accommodations.md` and groups by region
- **Aviation**: Helicopter sightseeing tour (Ålesund → Geiranger → Hellesylt → Hjørundfjorden)
- **Contact**: Comprehensive contact form with budget and season selection

## 🛠️ Tech Stack

- **React 18** with functional components and hooks
- **Tailwind CSS** for styling with custom luxury color palette
- **React Router** for navigation
- **Lucide React** for icons
- **React Markdown** for parsing accommodation content

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or ensure you have all the project files
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── ImageContainer.js    # Fixed aspect ratio image component
│   │   └── SkipLink.js         # Accessibility skip link
│   └── layout/
│       ├── Header.js           # Navigation header
│       └── Footer.js           # Site footer
├── contexts/
│   └── LanguageContext.js      # Language switching context
├── data/
│   └── translations.js         # English/Norwegian translations
├── pages/
│   ├── Home.js                 # Landing page
│   ├── Daytrips.js             # Dynamic daytrips from JSON
│   ├── Activities.js           # Dynamic activities from JSON
│   ├── CarRental.js            # Porsche rental with gallery
│   ├── Accommodation.js        # Parsed from Markdown
│   ├── Aviation.js             # Helicopter tours
│   └── Contact.js              # Contact form
├── App.js                      # Main app component
├── index.js                    # React entry point
└── index.css                   # Tailwind CSS with custom styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue scale for accents and CTAs
- **Luxury**: Dark blue/slate scale for backgrounds and text
- **Background**: Deep navy (#0f172a) for luxury feel

### Typography
- **Primary Font**: Inter for body text
- **Heading Font**: Poppins for headings
- **Luxury Font**: Playfair Display for elegant accents

### Components
- **btn-primary**: Primary action buttons
- **btn-secondary**: Secondary action buttons
- **card**: Consistent card styling
- **hero-gradient**: Elegant overlay gradients

## 🌍 Internationalization

The website supports English (default) and Norwegian:
- Language toggle in header
- Persistent language selection via localStorage
- Comprehensive translations in `src/data/translations.js`

## ♿ Accessibility Features

- **WCAG 2.1 AA compliant**
- Skip links for keyboard navigation
- Proper ARIA labels and roles
- Focus management
- Screen reader support
- High contrast colors
- Reduced motion support

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Responsive breakpoints for all screen sizes
- Touch-friendly interface
- Optimized images for mobile devices

## 🖼️ Content Management

### Daytrips
Edit `daytrips.json` to add/modify daytrip offerings with:
- Trip names and descriptions
- Detailed itineraries with times and locations
- Images and duration information

### Activities
Edit `activities.json` to manage activity categories:
- Activity types and durations
- Location-based offerings
- Terms and conditions

### Accommodations
Edit `accommodations.md` to update hotel information:
- Hotel details and descriptions
- Room types and amenities
- Dining options and facilities

## 🚗 Transport Service

Features Mercedes V-Class shuttle service:
- Airport/hotel pickup and drop-off
- Professional drivers
- Flexible scheduling
- Luxury 7-seater vehicles

## 💰 Pricing

- **Porsche Rental**: 6,500 NOK per day
- **Helicopter Tour**: 1-hour sightseeing flight
- **Custom Packages**: Contact for pricing

## 📞 Contact Information

- **Email**: info@fjordquest.no
- **Phone**: +47 123 45 678
- **Location**: Ålesund, Norway
- **Response Time**: Within 24 hours

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌟 Key Features in Detail

### Dynamic Content Loading
- Daytrips and activities load from JSON files
- Accommodations parsed from Markdown
- Image galleries with lightbox functionality

### Premium User Experience
- Smooth animations and transitions
- Loading states and error handling
- Optimized performance
- SEO-friendly structure

### Contact Form
Comprehensive inquiry form with:
- Personal information fields
- Budget selection with multiple currencies
- Season preference
- Custom message area

## 🎯 Future Enhancements

- Backend integration for form submissions
- Content management system
- Online booking functionality
- Payment processing
- User accounts and profiles
- Review and rating system

## 📄 License

This project is proprietary and confidential. All rights reserved by Fjord Quest Adventure.

---

**Fjord Quest Adventure** - Experience the untamed beauty of Norway with unparalleled luxury. 
>>>>>>> cursorReactMigrate
