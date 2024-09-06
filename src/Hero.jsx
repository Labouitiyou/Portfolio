import React from 'react';
import image from './Assets/Youssef.jpg'
import './Hero.css'; // Assurez-vous d'ajouter le fichier CSS pour le style
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="hero" className="hero">
        <ParticlesBackground />
      <div className="hero-content">
        <img src={image} alt="labouiti-Yousseef" className="hero-photo" />
        <h1>Labouiti Youssef</h1>
        <p>Développeur Web | React JS | FrontEnd</p>
        <a href="#projects">Voir mes projets</a>
      </div>
    </section>
  );
}

export default Hero;
