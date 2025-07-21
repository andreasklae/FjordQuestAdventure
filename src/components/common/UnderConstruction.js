import React from 'react';

function UnderConstruction() {
  return (
    <div 
      className="min-h-screen bg-luxury-950 flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('/images/front page background image.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <img 
          src="/images/white_logo_transparent_background.png" 
          alt="Fjord Quest Adventure Logo" 
          className="w-80 md:w-[32rem] lg:w-[40rem] mb-8"
        />
        <h1 className="text-luxury-100 text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Website Under Construction
        </h1>
        <p className="text-luxury-200 text-xl md:text-2xl lg:text-3xl text-center max-w-2xl">
          We're working on something amazing. Check back soon!
        </p>
      </div>
    </div>
  );
}

export default UnderConstruction; 