import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toaster } from 'react-hot-toast';

// useContext
import { UseContext } from './hooks/use-context';

// routers
import Router from './app/router';

import Contact from './app/page/contact';
import ProjectScreen from './app/page/project';
import About from './app/page/about';
import Service from './app/page/service';


import Loading from './components/ui/loading';


// styles css
import './styleSheet/App.css';

    
export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(()=> {
    const handleLoad = () => {
      setIsReady(true)
    }
    
    if(document.readyState == 'complete'){
      handleLoad();
    }
    else{
      window.addEventListener('load', handleLoad);

      return ()=> window.removeEventListener('lead', handleLoad);
    }
  }, [])

  return (
    <UseContext>
      <Loading active={!isReady} />
      <div style={{ 
        visibility: isReady ? 'visible' : 'hidden',
        overflow: isReady ? 'visible' : 'hidden',
        height: isReady ? 'auto' : '100vw',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}>
        <Toaster position='top-right' reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<ProjectScreen />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </UseContext>
  );
}
