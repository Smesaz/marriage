import React,  { useState, useEffect } from 'react';
import {animateScroll,  Link} from 'react-scroll';
import './navBar.css';
const NavBar = () => {

    const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("animateScroll", changeNav);
    return () => {
      window.removeEventListener("animateScroll", changeNav);
    };
  }, []);
  const toogleHome = () => {
    animateScroll.scrollToTop();
    console.log(animateScroll.scrollToTop());
  };

  return (
  <div className='nav' scrollNav={scrollNav}>
      <div className='NavbarContainer'>
          <div className='NavLogo'>
              <Link
              onClick={toogleHome}
              >Boda Laura <img alt='' src="https://img.icons8.com/windows/20/000000/wedding-rings.png"/> Sebastián</Link>
          </div>
          <div>
              <div className='NavMenu'>
                  <div className='NavItem'>
                      <Link
                      to='contactUs'
                      smooth={true}
                      duration={600}
                      exact="true"
                      offset={-20}
                      activeClass="active"
                      className='NavLinks'>Confirma tu asistencia</Link>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default NavBar;
