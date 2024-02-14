import siteLogo from '../../../Assets/logo header.png'
import './nav.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [openMenuBtn, setOpenMenuBtn] = useState(false);

  const mobileMenu = () => {
    setOpenMenuBtn(!openMenuBtn);
  }

  return (
    <div>
      <nav>
        <img src={siteLogo} alt="web-site-logo"/>

        {/* DESKTOP */}

        <ul className='nav-bar-links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Models'>Veichle Models</Link></li>
          <li><Link to='/Testimonials'>Testimonials</Link></li>
          <li><Link to='/Team'>Our Team</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
        
        <svg className='menu-icon' onClick={() => mobileMenu()} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroklinecap="round" strokeLinejoin="round" data-darkreader-inline-stroke=""><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>

        <div className='sing-in-register-container'>
          <a href='sign in'>Sign in</a>  

          <button>Register</button>
        </div>  
      </nav>  

      {/* MOBILE */}

      <div className={openMenuBtn ? 'menu-mobile-opened' : 'menu-mobile-closed'}>
        <svg onClick={() => mobileMenu()} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="menu-mobile-icon"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        
        <nav className='nav-menu-mobile'>
          <li onClick={() => mobileMenu()}><Link to='/'>Home</Link></li>
          <li onClick={() => mobileMenu()}><Link to='/About'>About</Link></li>
          <li onClick={() => mobileMenu()}><Link to='/Models'>Veichle Models</Link></li>
          <li onClick={() => mobileMenu()}><Link to='/Testimonials'>Testimonials</Link></li>
          <li onClick={() => mobileMenu()}><Link to='/Team'>Our Team</Link></li>
          <li onClick={() => mobileMenu()}><Link to='/Contact'>Contact</Link></li> 
        </nav>
      </div>
    </div>
  )
}

export default Nav;