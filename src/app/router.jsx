
import About from './page/about';
import Service from './page/service';
import Contact from './page/contact';
import Project from './page/project';
import Feature from './page/feature-project';

import Hero from '../lib/header/hero';
import NavBar from '../lib/header/nav-bar';
import Footer from '../lib/header/footer';
import BackgroundAnimation from '../hooks/use-three';


export default function Router(){

  return(
    <>
      {/* <BackgroundAnimation /> */}
      <div className='container'>
        <header>
          <NavBar />
          <div>
            <Hero />
          </div>
        </header>
      </div>
      <main>
        <Feature />
        <About />
        <Service />
        <Project /> 
        <Contact />
      </main>
      <footer>
        
        <Footer />
      </footer>
    </>
  )
}