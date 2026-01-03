import useRevealOnScroll from "../../hooks/use-reveal";


export default function Feature() {
    const ref = useRevealOnScroll();

    return (
        <section className="feature-section">
            <div className="container">
                <div className="section-header">
                    <h2>Projets à venir</h2>
                    <p>Découvrez AstroKit, ma prochaine aventure technologique.</p>
                </div>

                <div className="feature-wrapper">
                    <div ref={ref} className="infos">
                        <button className="btn-future">Projet Futur</button>
                        
                        <div className="details">
                            <h1>AstroKit</h1>
                            <p>
                                AstroKit est un simulateur astronomique immersif. 
                                Prenez les commandes de votre vaisseau et explorez les confins de la galaxie 
                                à travers une interface neurale révolutionnaire.
                            </p>
                            <div className="tech-stack" style={{color: '#00d2ff', fontSize: '14px', fontWeight: 'bold'}}>
                                React Native • Django • WebSocket • AI
                            </div>
                        </div>

                        <a className="btn">
                            VOIR LE CONCEPT <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}