import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { UnderConstructionProvider, useUnderConstruction } from './contexts/UnderConstructionContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SkipLink from './components/common/SkipLink';
import ScrollToTop from './components/common/ScrollToTop';
import UnderConstruction from './components/common/UnderConstruction';
import Home from './pages/Home';
import Daytrips from './pages/Daytrips';
import Activities from './pages/Activities';
import CarRental from './pages/CarRental';
import Accommodation from './pages/Accommodation';
import Aviation from './pages/Aviation';
import Contact from './pages/Contact';
import Hiking from './pages/activities/Hiking';
import Biking from './pages/activities/Biking';
import WaterActivities from './pages/activities/WaterActivities';

function AppContent() {
  const isUnderConstruction = useUnderConstruction();

  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-luxury-950 text-luxury-100">
        <SkipLink />
        <Header />
        <main id="main-content" className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daytrips" element={<Daytrips />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/hiking" element={<Hiking />} />
            <Route path="/activities/biking" element={<Biking />} />
            <Route path="/activities/water-activities" element={<WaterActivities />} />
            <Route path="/car-rental" element={<CarRental />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/aviation" element={<Aviation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <UnderConstructionProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </UnderConstructionProvider>
  );
}

export default App; 