import React, { useState, useEffect } from 'react';
import '../assets/styles/home.css';
import SignupModal from './SignupModal';
import basketballPlayer from '../assets/pictures/homepage1.jpg';
import image2 from '../assets/pictures/homepage2.jpg';
import image3 from '../assets/pictures/homepage.jpg';
import image4 from '../assets/pictures/homepage3.jpg';
import image5 from '../assets/pictures/homepage4.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // imported images
  const slideImages = [
    basketballPlayer,
    image2,
    image3,
    image4,
    image5
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (slideImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slideImages.length]);

  if (slideImages.length === 0) return null;

  return (
    <div className="home-container">
      {/* Slideshow background */}
      <div className="slideshow-container">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="content-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to DEL Basketball</h1>
          <p className="hero-subtitle">
            Where Passion Meets Performance
          </p>
          <div className="hero-text">
            <p>
              Join the elite basketball community where athletes push their limits,
              develop their skills, and achieve greatness together. Our comprehensive
              training programs and competitive leagues are designed to bring out
              the best in every player.
            </p>
          </div>
          <button 
            className="cta-button"
            onClick={() => setIsModalOpen(true)}
          >
            Join DEL Basketball
          </button>
        </div>
      </div>

      {/* Slideshow dots */}
      {slideImages.length > 1 && (
        <div className="slideshow-dots">
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;