import React from 'react';
import image from './Assets/Youssef.jpg'
import Typical from 'react-typical';
import './Hero.css'; 

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={image} alt="labouiti-Yousseef" className="hero-photo" />
        <h1>Labouiti Youssef</h1>
        <p>
          <Typical
            steps={[
              'Développeur Web FrontEnd 💻', 2000,
              'Développeur Web React JS 💻', 2000,
            ]}
            loop={Infinity}
          />
          </p>
        <a href="#projects">Voir mes projets</a>
      </div>
    </section>
  );
}

export default Hero;
