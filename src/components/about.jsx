import React from 'react';
import '../assets/styles/about.css';
import coachImage from '../assets/pictures/aboutpic.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="left-container">
        <div className="content author-bio">
          <div className="author-name">
            <h1>Dele Awonuga</h1>
            <h2 className="subtitle">Founder & Head Coach, DEL Basketball</h2>
          </div>
          
          <div className="biography">
            <p className="lead-text">
              I am Coach Dele Simon, the founder of a basketball academy in Nigeria, West Africa, dedicated to nurturing young talents, particularly tall kids aged 8 to 16. Our mission is to use basketball as a tool not only to develop their athletic skills but also to provide them with opportunities for a better education and a brighter future.
            </p>

            <p>
              Our academy focuses on training youth, many of whom come from underprivileged backgrounds. By engaging them in basketball, we aim to take them off the streets and offer them a safe environment where they can grow physically, mentally, and emotionally.

              Currently, we cater to [number of participants] participants, providing them with training, mentorship, and life skills. However, we believe that sports should go hand-in-hand with education. Therefore, we are actively seeking partnerships to help these young athletes access quality education and opportunities for personal and professional growth.
            </p>

            <div className="goals-section">
              <h3>Our Goals</h3>
              <ul>
                <li>
                  <strong>Educational Support:</strong> To provide scholarships, learning materials, and tutoring for our participants, ensuring they receive a solid academic foundation.
                </li>
                <li>
                  <strong>Sports Development:</strong> To enhance our basketball training programs with better equipment, facilities, and coaching staff.
                </li>
                <li>
                  <strong>Life Skills and Mentorship:</strong> To offer life skills training and mentorship programs that prepare our participants for life beyond basketball.
                </li>
                <li>
                  <strong>Community Engagement:</strong> To create programs that engage the wider community, fostering support for our academy and raising awareness about the importance of education and sports.
                </li>
              </ul>
            </div>

            <div className="support-section">
              <h3>Why We Need Your Support</h3>
              <p>
                We are reaching out to individuals, organizations, and educational institutions that share our vision of empowering young people through education and sports. With your support, we can provide our participants with:
              </p>
              <ul>
                <li>Access to quality education and learning resources</li>
                <li>Scholarships to help them continue their studies</li>
                <li>Opportunities for international exposure and development</li>
                <li>A pathway to better life opportunities through sports</li>
              </ul>
            </div>
            
            <div className="achievements">
              <h3>Career Highlights</h3>
              <ul>
                <li>20+ years of coaching experience</li>
                <li>Developed 50+ NCAA Division I athletes</li>
                <li>Mentor professional basketball players</li>
              </ul>
            </div>

            <div className="personal-note">
              <p>
                We believe that with the right support, the young athletes in our academy can achieve their dreams and contribute positively to society. We would greatly appreciate any assistance or partnership opportunities that align with our mission.
              </p>
              <p>
                Thank you for considering our proposal. We look forward to the possibility of working together to make a significant impact in the lives of these young athletes.
              </p>
            </div>
          </div>

          <a href="#contact" className="cta-button">Contact Coach Dele</a>
        </div>
      </div>
      <div className="right-container">
        <img src={coachImage} alt="Coach Dele Awonuga" className="author-image" />
        <div className="image-caption">Coach Dele Awonuga at DEL Basketball Training Center</div>
      </div>
    </div>
  );
};

export default About;