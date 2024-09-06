import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import "./Skills.css";
import api from "./Assets/api.jpg";
import cicon from "./Assets/c.jpg"

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FontAwesomeIcon icon={faPhp} size="1x" />, name: 'PHP' },
  { icon: <FontAwesomeIcon icon={faFigma} size="1x" />, name: 'Figma' },
  { icon: <FontAwesomeIcon icon={faGithub} size="1x" />, name: 'GitHub' },
  { icon: <i className="devicon-mysql-plain-wordmark "></i>, name: 'MySQL' },
  { icon: <img src= {api} alt='api-icon' id='icon' />, name: 'API REST' },
  { icon: <img src= {cicon} alt='c++-icon' id='icon' />, name: 'C++' }

];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Compétences Techniques</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
    
      </div>
    </section>
  );
};

export default Skills;
