import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    'https://www.sephora.com/contentimages/2025-03-15-march-oh-snap-site-desktop-home-page-rwd-hero-banner-v1-4-sku-us.jpg?imwidth=1090text=Slide+1', // Example images
    'https://www.sephora.com/contentimages/2025-3-15-kayali-fleur-majesty-rose-royale-eau-de-parfum-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090text=Slide+2',
    'https://www.sephora.com/contentimages/2025-03-11-slotting-just-arrived-v3-site-rwd-home-page-hero-banner-english-AMIKA-US-handoff_01.jpg?imwidth=1090text=Slide+3',
    'https://www.sephora.com/contentimages/2025-03-best-sellers-mbc2-site-homepage-rwd-hero-banner-v1-img-only-us-can-shared.jpg?imwidth=1090text=Slide+4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
    </div>
  );
};

export default ImageSlider;