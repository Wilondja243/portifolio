import {Link } from 'react-router-dom';
import { projects } from '../../data/project';
import useRevealOnScroll from '../../hooks/use-reveal';


export default function Project(){
    const ref = useRevealOnScroll();

    return(
        <section className="wrapper" id='project'>
            <div ref={ref} className="reveal project">
                <div className="section-header">
                    <h2>Projets réalisés</h2>
                    <p>
                        Une sélection de projets où j'ai conçu et développé des solutions digitales modernes,
                        alliant design, performance et expérience utilisateur pour répondre à des besoins réels.
                    </p>
                </div>
                <div className="list">
                    {projects.map((project, index) => (
                    <div className="child item" key={index}>
                        <img src={project.image} alt={project.title} />

                        <div className="header-item">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>

                        <div className="detail">
                            <div className="tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tag">{t}</span>
                                ))}
                            </div>

                            <div className="links">
                                <p className="role"><strong>Rôle :</strong> {project.role}</p>
                                <a href={project.demo} target="_blank" rel='noreferrer'>Voir le projet</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
  }