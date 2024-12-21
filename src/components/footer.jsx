import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import delLogo from '../assets/pictures/del_logo.jpg';
import '../assets/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Del Basketball. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms">Terms of Service</a>
            <span className="separator">|</span>
            <a href="/terms">Developed by Emmanuel Balogun</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;