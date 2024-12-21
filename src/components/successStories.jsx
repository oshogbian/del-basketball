import React from "react";
import "../assets/styles/successStories.css";

const SuccessStories = () => {
  const successStories = [
    {
      name: "Emmanuel Balogun",
      image: "/api/placeholder/300/300",
      current: "University of North Carolina at Charlotte",
      achievement: "NCAA Division 1 Athlete",
      quote: "DEL Basketball didn't just make me a better player - they shaped me into a leader. Coach's emphasis on fundamentals and basketball IQ gave me the edge I needed to compete at the highest level."
    },
    {
      name: "Charles Bassey",
      image: "/api/placeholder/300/300",
      current: "Spurs Center",
      achievement: "DPOY Western Kentucky",
      quote: "What sets DEL Basketball apart is their commitment to developing the whole athlete. The skills I learned here - both on and off the court - prepared me perfectly for college basketball."
    },
    {
      name: "Nelly Junior Joseph",
      image: "/api/placeholder/300/300",
      current: "University of New Mexico (Lobos)",
      achievement: "NCAA Division 1 Athlete",
      quote: "The individual attention and tailored development program at DEL Basketball helped me unlock my full potential. They saw something in me before anyone else did."
    }
  ];

  return (
    <div className="success-stories-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Success Stories</h1>
          <p>
            Our athletes go on to achieve great things. Here are just a few of the success stories
            from the DEL Basketball family.
          </p>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="stories-grid">
        {successStories.map((story, index) => (
          <div key={index} className="story-card">
            <img
              src={story.image}
              alt={story.name}
              className="story-image"
            />
            <div className="story-content">
              <h3>{story.name}</h3>
              <p className="current-status">{story.current}</p>
              <p className="achievement">{story.achievement}</p>
              <blockquote>
                "{story.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Join Our Winning Team</h2>
          <p>
            Start your journey to success with DEL Basketball. Our proven track record of developing 
            elite athletes speaks for itself.
          </p>
          <a href="#contact" className="cta-button">
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;