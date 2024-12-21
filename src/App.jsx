import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page from './containers/page';
import Home from './components/home';
import About from './components/about';
import Programs from './components/programs';
import ContactUs from './components/contactUs';  // Fixed the path
import SuccessStories from './components/successStories';
import './assets/styles/header.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;