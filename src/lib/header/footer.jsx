export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-left">
          <h3>LuckCode</h3>
          <p>© {new Date().getFullYear()} Wilondja Ebuela</p>
        </div>

        <ul className="footer-nav">
          <li><a href="/">Accueil</a></li>
          <li><a href="#project">Projets</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </footer>
  );
}
