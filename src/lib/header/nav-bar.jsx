import Button from '../../components/ui/button';


export default function NavBar() {

    return (
      <>
        <div className='navigation'>
          <nav className='nav-list'>
            <div>
              <i className="bi bi-code"></i>
              <h1>LuckCode</h1>
            </div>
            <ul>
              <li><a className='link active' href="#">Home</a></li>
              <li><a className='link' href="#services">Services</a></li>
              <li><a className='link' href="#project">Projects</a></li>
              <li><a className='link' href="#about">About</a></li>
              <li><a className='link' href="#contact">Contact</a></li>
            </ul>
            <button className='menu-btn'>
              <i className="bi bi-list"></i>
            </button>
          </nav>
        </div>
      </>
    );
  } 