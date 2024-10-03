import React from 'react';
import './Projects.css';


const projects = [
  {
    id: 1,
    title: "OhMyFood",
    description: "Un site “mobile first” qui répertorie les menus de restaurants",
    image: "/image/Ohmyfood.jpg",
    lien: "https://labouitiyou.github.io/Projet-Site-d-un-restaurant/"
  },
  {
    id: 2,
    title: "Booki",
    description: "Un site d'une agence de voyage",
    image: "/image/booki.png",
    lien: "https://labouitiyou.github.io/Projet_Agence-de-voyage/"
  },
  {
    id: 3,
    title: "ArgentBank",
    description: "Une application bancaire avec React",
    image: "/image/argentbank.jpg",
    lien: "https://github.com/Labouitiyou/ArgentBank-website.git"
  },
  {
    id: 4,
    title: "Kasa",
    description: "Une application web de location immobilière avec React",
    image: "/image/kasa.jpg" 
  },
  {
    id: 5,
    title: "Sophie Bluel",
    description: "Un site portfolio d’une architecte",
    image: "/image/sophie.jpg",
    lien: "https://github.com/Labouitiyou/Portfolio-architecte-sophie-bluel.git"

  },
  {
    id: 6,
    title: "Nina Carducci",
    description: "Optimiser le référencement d'un site de photographe",
    image: "/image/nina.jpg",
    lien : "https://labouitiyou.github.io/ninacarducci.github.io/"
  },
  {
    id: 7,
    title: "724events",
    description: "Débugger le site d'une agence d'événementiel",
    image: "/image/events.jpg",
    lien : "https://github.com/Labouitiyou/Debuggez-une-application-React.JS.git"
  },
  {
    id: 7,
    title: "Print It",
    description: "Un site dynamique d'une imprimerie",
    image: "/image/print.jpg",
    lien : "https://labouitiyou.github.io/Print-it-JS/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a href = {project.lien} target="_blank" rel="noopener noreferrer">
          <div key={project.id} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
