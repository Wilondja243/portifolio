import useRevealOnScroll from "../../hooks/use-reveal";
import { useState, useRef } from "react";

export default function About() {
  const skillsRef = useRevealOnScroll();
  const statsRef = useRevealOnScroll();
  const expRef = useRevealOnScroll();

  const [modal, setModal] = useState(null);
  const btnRef = useRef().current;
  console.log(btnRef)
  const modalRef = useRef().current;

  // const showModal = (exp) => {
  //   btnRef.addEventListener('click', ()=> {
  //     if(modalRef.classList.containes("modal")){
  //       modalRef.classList.add("is-modal-visible");
  //       setModal(exp);
  //     }
  //     else{
  //       modalRef.classList.remove("is-modal-visible");
  //     }
  //   })
  // }

  return (
    <main className="skills-page">

      <section ref={skillsRef}  className="reveal section">
        <h2 className="child">Compétences</h2>

        <div className="skills-list child">
          {[
            ["Python / Django", 70],
            ["JavaScript / React", 80],
            ["React Native", 70],
            ["AI (ML / DL)", 55],
            ["CyberSécurité", 65],
          ].map(([label, value]) => (
            <div
              key={label}
              className="skill-line"
              onClick={() => setModal(label)}
            >
              <div className="skill-level">
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              
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
            // ref={btnRef}
            className="experience"
            onClick={() => setModal("exp1")}
          >
            <span className="year">2025</span>
            <p>IA & Sécurité - Projets personnels et recherches</p>
          </div>

          <div
            // ref={btnRef}
            className="experience"
            onClick={() => setModal("exp2")}
          >
            <span className="year">2025</span>
            <p>Encadreur Python chez SOFT AVOLIK (1 mois)</p>
          </div>

          <div
            // ref={btnRef}
            className="experience"
            onClick={() => setModal("exp3")}
          >
            <span className="year">2024-2025</span>
            <p>Développeur Backend (Django) chez Magis Fintech Solution (5 mois)</p>
          </div>

          <div
            // ref={btnRef}
            className="experience"
            onClick={() => setModal("exp4")}
          >
            <span className="year">2023</span>
            <p>Développeur Web & Mobile - Projets Freelance</p>
          </div>
        </div>
      </section>

      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div ref={modalRef} className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Détails</h3>
            <p>
              {modal === "exp1" &&
                "Développement d'APIs, backends sécurisés, ORM, auth, performance."}
              {modal === "exp2" &&
                "Modèles de prédiction, classification, apprentissage supervisé."}
              {modal === "exp3" &&
                "Création d'applications web et mobiles complètes pour clients."}
              {modal === "exp4" && 
                "Developpeur Freelance"}
            </p>
            <button onClick={() => setModal(null)}>Fermer</button>
          </div>
        </div>
      )}
    </main>
  );
}
