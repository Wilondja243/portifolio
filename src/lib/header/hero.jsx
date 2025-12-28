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
          <div className="glow"></div>
          <img src="images/black-femal.png" alt="portrait" />
        </div>

      </div>
    </section>
  );
}
