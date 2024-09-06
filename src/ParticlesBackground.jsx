import React, { useEffect } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS.load('particles-js', '/particles-config.json', function() {
      console.log('particles.js config loaded');
    });
  }, []);

  return <div id="particles-js" className="particles-background"></div>;
};

export default ParticlesBackground;
