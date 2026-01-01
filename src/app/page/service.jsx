import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useRevealOnScroll from "../../hooks/use-reveal";
import { services } from "../../data/data";


export default function Service() {
  const ref = useRevealOnScroll();

  return (
    <>
      <Helmet>
        <title>Luckson | Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Luckson, développeur web et mobile."
        />
      </Helmet>
    
      <section className="wrapper" id="services">
        <div ref={ref} className="reveal services">
      
          <div className="section-header">
            <h2>Mes Services</h2>
            <p>
              Je conçois des solutions numériques modernes, sécurisées
              et performantes, adaptées aux besoins réels des entreprises
              et des particuliers.
            </p>
          </div>

          {/* SERVICES LIST */}
          <div className="list">
            {services.map((service, i)=> (
              <div className="child item" key={i}>
                <i className={service.icon_name}></i>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
