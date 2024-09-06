import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <section id="about" className="about">
      <h2>À propos de moi</h2>
      <p>Développeur Front End innovant, créatif, passionné par l'univers du Web, polyvalent et curieux.</p>
      <div className='about-icons'>
      <a href='https://www.linkedin.com/in/youssef-labouiti-bb70593b/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='4x'/></a>
      <a href='https://github.com/Labouitiyou' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='4x'/></a>
      </div>
    </section>
  );
}

export default About;
