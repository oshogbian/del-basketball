import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import '../assets/styles/programs.css';

const Programs = () => {
  const programs = [
    {
      title: "DEL FUNDAMENTALS PROGRAM",
      description: "Perfect for beginners taking their first steps into basketball. This program focuses on building essential basketball fundamentals through fun, engaging sessions. Our experienced coaches create a supportive environment where players learn basic dribbling, shooting, passing, and defensive techniques while developing a love for the game.",
      duration: "Daily, Weekends only, Monthly",
      pricing: [
        { period: "Daily", price: "5,000" },
        { period: "Weekly", price: "20,000" },
        { period: "Monthly", price: "60,000" }
      ]
    },
    {
      title: "DEL DEVELOPMENT PROGRAM",
      description: "Designed for players with basic basketball knowledge ready to advance their game. This program builds upon fundamental skills while introducing more complex concepts like team tactics, game strategies, and advanced ball handling. Players will participate in structured scrimmages and receive personalized feedback to accelerate their development.",
      duration: "3-6 Months",
      pricing: [
        { period: "Monthly", price: "75,000" },
        { period: "3 months", price: "200,000" },
        { period: "6 months", price: "350,000" }
      ]
    },
    {
      title: "DEL ELITE PERFORMANCE",
      description: "For serious players looking to compete at high levels. This intensive program covers advanced techniques, sophisticated game strategies, and high-level conditioning. Players receive detailed performance analysis, specialized training plans, and exposure to competitive play. Includes video analysis sessions and advanced tactical workshops.",
      duration: "6-12 Months",
      pricing: [
        { period: "Monthly", price: "120,000" },
        { period: "6 months", price: "600,000" },
        { period: "Yearly", price: "1,000,000" }
      ]
    },
    {
      title: "DEL PRO PATHWAY",
      description: "Our premier program for exceptional players aiming for professional careers. This comprehensive program includes elite-level training, professional-style practice sessions, exposure to scouts, and opportunities to compete in high-profile tournaments. Players receive individualized development plans, nutrition guidance, mental conditioning, and career planning support.",
      duration: "12 Months",
      pricing: [
        { period: "Quarterly", price: "450,000" },
        { period: "6 months", price: "800,000" },
        { period: "Annually", price: "1,500,000" }
      ]
    }
  ];

  return (
    <div className="programs-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>DEL Basketball Programs</h1>
        <p>From beginners to elite athletes, our professionally designed programs create clear pathways 
          for players to reach their full potential. Each level builds upon the previous, ensuring 
          consistent growth and development.</p>
      </div>

      {/* Programs Section */}
      <div className="programs-content">
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-header">
                <h2>{program.title}</h2>
              </div>
              <div className="program-content">
                <p className="program-description">{program.description}</p>
                <div className="program-details">
                  <div className="duration-section">
                    <h3>DURATION:</h3>
                    <p>{program.duration}</p>
                  </div>
                  <div className="pricing-section">
                    <h3>PRICE:</h3>
                    <div className="pricing-grid">
                      {program.pricing.map((price, idx) => (
                        <p key={idx}>
                          {price.price} NGN / {price.period}
                        </p>
                      ))}
                    </div>
                  </div>
                  <button className="apply-button">Apply now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;