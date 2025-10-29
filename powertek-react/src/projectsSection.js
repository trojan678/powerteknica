import React from "react";
import "./projectsSection.css"; 

const projects = [
  {
    id: 1,
    title: "Camellia Gardens",
    image: process.env.PUBLIC_URL + "/camellia.jpg",
    description: "Solar irrigation system powering local agriculture."
  },
  {
    id: 2,
    title: "Kasarani Estate Solar",
    image: "kasarani.jpg",
    description: "Smart solar backup installation for homes."
  },
  {
    id: 3,
    title: "Nakuru Industrial Plant",
    image: "nakuru.jpg",
    description: "Large-scale solar integration for manufacturing."
  },
  {
    id: 4,
    title: "Karen Residential Project",
    image: "karen.jpg",
    description: "Hybrid solar system for modern homes."
  },
  {
    id: 5,
    title: "Thika Road Business Center",
    image: "thika.jpg",
    description: "Reliable solar backup for commercial buildings."
  },
  {
    id: 6,
    title: "Machakos School Project",
    image: "machakos.jpg",
    description: "Empowering education through renewable energy."
  },
];

function projectsSection() {
  return (
    <section className="projects-section" id="projects">
      <h2>Our Successful Projects</h2>
      <p>Powering Kenya's future, one installation at a time</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default projectsSection;
