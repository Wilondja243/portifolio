import useRevealOnScroll from "../../hooks/use-reveal";
import { useState } from "react";

export default function About() {
  const skillsRef = useRevealOnScroll();
  const statsRef = useRevealOnScroll();
  const expRef = useRevealOnScroll();

  const [modal, setModal] = useState(null);

  return (
    <main className="skills-page">

      <section ref={skillsRef}  className="reveal section">
        <h2 className="child">Compétences</h2>

        <div className="skills-list child">
          {[
            ["Python / Django", 70],
            ["JavaScript / React", 80],
            ["React Native", 70],
            ["AI (ML / DL)", 60],
            ["CyberSécurité", 70],
          ].map(([label, value]) => (
            <div
              key={label}
              className="skill-line"
              onClick={() => setModal(label)}
            >
              <span>{label}</span>
              <div className="bar">
                <div className="fill" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={statsRef}  className="reveal section stats">
        <div className="stat child">
          <strong>8+</strong>
          <span>Projets réalisés</span>
        </div>
        <div className="stat child">
          <strong>3+</strong>
          <span>Années d"expérience</span>
        </div>
        <div className="stat child">
          <strong>6+</strong>
          <span>Technologies maîtrisées</span>
        </div>
      </section>

      <section ref={expRef}  className="reveal section">
        <h2 className="child">Expériences</h2>

        <div className="timeline child">
          <div
            className="experience"
            onClick={() => setModal("exp1")}
          >
            <span className="year">2024</span>
            <p>Développeur Web & Mobile – Projets Freelance</p>
          </div>

          <div
            className="experience"
            onClick={() => setModal("exp2")}
          >
            <span className="year">2023</span>
            <p>IA & Sécurité – Projets personnels et recherches</p>
          </div>
        </div>
      </section>

      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Détails</h3>
            <p>
              {modal === "Python / Django" &&
                "Développement d'APIs, backends sécurisés, ORM, auth, performance."}
              {modal === "AI (ML / DL)" &&
                "Modèles de prédiction, classification, apprentissage supervisé."}
              {modal === "exp1" &&
                "Création d'applications web et mobiles complètes pour clients."}
            </p>
            <button onClick={() => setModal(null)}>Fermer</button>
          </div>
        </div>
      )}
    </main>
  );
}
