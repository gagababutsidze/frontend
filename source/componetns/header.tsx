import logo  from '../assets/logo.png'
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Header = () => {
  const navRef =  useRef(null)  
  const showNavbar = () => {
    navRef.current.classList.toggle('active')
      console.log(navRef.current);
  }
  
    return (
      <>
        <header className="header">
          <img className='logo' src={logo} alt="logo" />
          <nav ref={navRef}  className="header-nav"> 

            <ul className="header-nav-ul">
              <li>
                <h1>ფილმები</h1>
              </li>
              <li>
                <h1>სერიალები</h1>
              </li>
              <li>
                <h1>ანიმაციები</h1>
              </li>
              <li>
                <input type="text"/>
              </li>
            </ul>
           
          </nav>
          <FontAwesomeIcon onClick={showNavbar}  className='nav-bar' icon={faBarsStaggered} />
        </header>
      </>
    );
}

export default Header