import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';
import '../assets/styles/contactUs.css';

const ContactUs = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 6:00 PM' }
  ];

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with DEL Basketball - We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <MapPin className="icon" size={24} />
              <div>
                <p>The DEL Basketball Center,</p>
                <p>Oworoshoki,</p>
                <p>Lagos State.</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="icon" size={24} />
              <a href="tel:+2348082903316">(808) 290-3316</a>
            </div>
            
            <div className="contact-item">
              <Mail className="icon" size={24} />
              <a href="mailto:info@delbasketball.com">info@delbasketball.com</a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-button" aria-label="Facebook">
                <Facebook className="icon" size={24} />
              </a>
              <a href="#" className="social-button" aria-label="Instagram">
                <Instagram className="icon" size={24} />
              </a>
              <a href="#" className="social-button" aria-label="Twitter">
                <Twitter className="icon" size={24} />
              </a>
              <a href="#" className="social-button" aria-label="YouTube">
                <Youtube className="icon" size={24} />
              </a>
            </div>
          </div>

          <div className="info-section">
            <h2>Business Hours</h2>
            <div className="business-hours">
              {businessHours.map((schedule, index) => (
                <div key={index} className="hours-row">
                  <span>{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="map-container">
          {/* Replace this with your actual Google Maps embed or map component */}
          <img 
            src="/api/placeholder/600/400" 
            alt="DEL Basketball Center Location Map" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;