import React from "react";
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import SuccessStories from '../components/successStories';
import Programs from '../components/programs';
import ContactUs from '../components/contactUs';
import Footer from "../components/footer";


const Page = () => {
  return (
    <>
      <Header />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="success-stories">
          <SuccessStories />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;