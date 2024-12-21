import React, { useState } from 'react';
import { Menu, X, Copy } from 'lucide-react';
import delLogo from '../assets/pictures/del_logo.jpg';
import '../assets/styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDonateClick = () => {
    setShowDonateModal(true);
    setIsMenuOpen(false);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={delLogo} alt="Del Basketball Logo" className="del-basketball-logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            <button onClick={() => scrollToSection('home')} className="nav-item">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-item">About</button>
            <button onClick={() => scrollToSection('success-stories')} className="nav-item">Success Stories</button>
            <button onClick={() => scrollToSection('programs')} className="nav-item">Programs</button>
            <button onClick={() => scrollToSection('contact-us')} className="nav-item">Contact Us</button>
            <button onClick={handleDonateClick} className="join-button">Donate to our program</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''}`}>
          <ul className="dropdown-list">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('success-stories')}>Success Stories</button></li>
            <li><button onClick={() => scrollToSection('programs')}>Programs</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact Us</button></li>
            <li><button onClick={handleDonateClick} className="donate-button">Donate</button></li>
          </ul>
        </div>
      </nav>

      {/* Enhanced Donation Modal */}
      {showDonateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowDonateModal(false)}>
              <X size={24} />
            </button>
            <h2>Donate to Del Basketball</h2>
            <p>Thank you for supporting our program! You can donate using any of the following accounts:</p>
            
            {/* USD Account Section */}
            <div className="account-section">
              <h3 className="currency-title">USD Account</h3>
              <div className="account-details">
                <div className="account-item">
                  <span className="label">Name:</span>
                  <span className="value"> DEL BASKETBALL ACADEMY 
                  </span>
                  <button 
                    className="copy-button" 
                    onClick={() => copyToClipboard(' DEL BASKETBALL ACADEMY LTD')}
                  >
                    <Copy size={16} />
                  </button>
                </div>
                
                <div className="account-item">
                  <span className="label">Account Number:</span>
                  <span className="value">9398764021</span>
                  <button 
                    className="copy-button" 
                    onClick={() => copyToClipboard('9398764021')}
                  >
                    <Copy size={16} />
                  </button>
                </div>
                
                <div className="account-item">
                  <span className="label">Bank Name:</span>
                  <span className="value">FCMB Bank</span>
                  <button 
                    className="copy-button" 
                    onClick={() => copyToClipboard('FCMB Bank')}
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Naira Account Section */}
            <div className="account-section">
              <h3 className="currency-title">Naira Account</h3>
              <div className="account-details">
                <div className="account-item">
                  <span className="label">Name:</span>
                  <span className="value">DEL BASKETBALL ACADEMY LTD</span>
                  <button 
                    className="copy-button" 
                    onClick={() => copyToClipboard('DEL BASKETBALL ACADEMY LTD')}
                  >
                    <Copy size={16} />
                  </button>
                </div>
                
                <div className="account-item">
                  <span className="label">Account Number:</span>
                  <span className="value">9398764014</span>
                  <button 
                    className="copy-button" 
                    onClick={() => copyToClipboard('9398764014')}
                  >
                    <Copy size={16} />
                  </button>
                </div>
                
                <div className="account-item">
                  <span className="label">Bank Name:</span>
                  <span className="value">FCMB Bank</span>
                  <button 
                    className="copy-button" 
                    onClick={() => copyToClipboard('FCMB Bank')}
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {copySuccess && <div className="copy-notification">{copySuccess}</div>}
            
            <p className="donation-note">
              After making your donation, please send the transaction receipt to: 
              <a href="mailto:donations@delbasketball.com">donations@delbasketball.com</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;