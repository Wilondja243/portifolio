import Button from "../../components/ui/button";



export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-intro">
          <span className="hero-tag">Digital Architect • Security • AI</span>

          <h1 className="hero-title">
            Je conçois des
            <span> systèmes digitaux </span>
            performants & sécurisés
          </h1>

          <p className="hero-desc">
            Développeur FullStack & Pentester, je crée des applications modernes,
            scalables et pensées pour le monde réel.
          </p>

          <div className="hero-actions">
            <Button />
            <a href="#project" className="hero-link">
              Voir mes projets →
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <Box3D title="Intelligence Artificielle" icon="bi bi-cpu-fill" colorClass="ai" />
          <Box3D title="CyberSécurité" icon="bi bi-shield-lock-fill" colorClass="security" />
          <Box3D title="Développement Mobile" icon="bi bi-phone-fill" colorClass="mobile" />
          <Box3D title="Développement Web" icon="bi bi-display-fill" colorClass="web" />
      
          <div className="glow"></div>
        </div>

      </div>
    </section>
  );
}


const Box3D = ({ title, icon, colorClass }) => (
  <div className={`hero-item ${colorClass}`}>
    <div className="face front">
      <i className={`bi ${icon}`}></i>
      <h3>{title}</h3>
    </div>
    <div className="face back"></div>
    <div className="face right"></div>
    <div className="face left"></div>
    <div className="face top"></div>
    <div className="face bottom"></div>
  </div>
);