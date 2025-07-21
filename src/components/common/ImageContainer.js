import React, { useState } from 'react';

const ImageContainer = ({ 
  src, 
  alt, 
  aspectRatio = '16/9', 
  className = '', 
  fallback = '/images/placeholder.jpg',
  onClick,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageStartedLoading, setImageStartedLoading] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageStart = () => {
    setImageStartedLoading(true);
  };

  const imageSrc = imageError ? fallback : src;

  return (
    <div 
      className={`aspect-container ${className}`}
      style={{ aspectRatio }}
      onClick={onClick}
      {...props}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-luxury-800 animate-pulse flex items-center justify-center">
          <div className="text-luxury-400 text-sm">
            {imageStartedLoading ? 'Loading...' : 'Loading image...'}
          </div>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        onLoadStart={handleImageStart}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default ImageContainer; 