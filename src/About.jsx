import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <section id="about" className="about">
      <h2>À propos de moi</h2>
      <p>
      Je suis un développeur web frontend innovant, créatif, passionné par la création d'interfaces utilisateur modernes, intuitives et performantes. Je viens de finir une formation Intégrateur Web chez Opencalssrooms qui m'a permis d'acquérir une solide maîtrise des technologies comme HTML5, CSS3, JavaScript, et des frameworks tels que React. Je m'efforce de traduire des idées créatives en expériences web fluides et attrayantes.<br /> À travers mes projets, j'ai acquis une expertise dans la création de sites web et d'applications qui sont non seulement esthétiques, mais également fonctionnels et évolutifs. <br /> Je reste toujours curieux et ouvert aux nouvelles technologies, avec une volonté d'apprendre en continu pour suivre l'évolution rapide du développement web. <br /> Mon objectif est de collaborer sur des projets stimulants et de contribuer à la création de solutions web innovantes.     
      </p>
      <div className='about-icons'>
      <a href='https://www.linkedin.com/in/youssef-labouiti-bb70593b/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='4x'/></a>
      <a href='https://github.com/Labouitiyou' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='4x'/></a>
      </div>
    </section>
  );
}

export default About;
