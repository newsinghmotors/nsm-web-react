import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import logo from './assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const location = useLocation();

  // Handle menu toggle
  const navToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('stop-scrolling');
  };

  // Track active nav based on location and hash
  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setActiveNav(hash || 'home');
  }, [location]);

  // Handle hash changes for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveNav(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* <!-- Navbar  --> */}
      <div className={`${menuOpen ? 'overlay-show' : ''}`} id="overlay" onClick={() => setMenuOpen(false)}></div>
      <div id="mobile-menu" className={`mobile-main-menu ${menuOpen ? 'show-menu' : ''}`}>
        <ul>
          <li className={activeNav === 'home' ? 'active' : ''}><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li className={activeNav === 'about' ? 'active' : ''}><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
          <li className={activeNav === 'services' ? 'active' : ''}><a href="#services" onClick={() => setMenuOpen(false)}>SERVICES</a></li>
          <li className={activeNav === 'contact' ? 'active' : ''}><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
        </ul>
      </div>
      <header className={`main-header nav-active ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="d-flex align-items-center">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                alt="New Singh Motors"
              />
            </Link>
          </div>
          <Link to="/">
            <p
              className="px-3"
              style={{
                color: "#f7f7f7",
                margin: "0px",
                fontFamily: 'Viga',
              }}
            >
              NEW SINGH MOTORS
            </p>
          </Link>
        </div>
        <nav className=" desktop-main-menu">
          <ul>
            <li className={activeNav === 'home' ? 'active' : ''}><Link to="/">HOME</Link></li>
            <li className={activeNav === 'about' ? 'active' : ''}><a href="#about">ABOUT</a></li>
            <li className={activeNav === 'services' ? 'active' : ''}><a href="#services">SERVICES</a></li>
            <li className={activeNav === 'contact' ? 'active' : ''}><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header >

      {/* <!-- Hamburger Menu --> */}
      <button id="menu-btn" className={`hamburger ${menuOpen ? 'open' : ''}`} type="button" onClick={navToggle}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button >
      {/* <!-- End Navbar  --> */}
    </>
  );
}

export default Header;