import { Link } from 'react-router';
import logo from './assets/logo.png';

function Header() {
  return (
    <>
      {/* <!-- Navbar  --> */}
      <div id="overlay"></div>
      <div id="mobile-menu" className="mobile-main-menu">
        <ul>
          <li className="active"><a href="#">HOME</a></li>
          <li className=""><a href="#about">ABOUT</a></li>
          <li className=""><a href="#services">SERVICES</a></li>
          <li className=""><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      <header className="main-header nav-active" id="navbar">
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
            <li className="active"><a href="/">HOME</a></li>
            <li className=""><a href="#about">ABOUT</a></li>
            <li className=""><a href="#services">SERVICES</a></li>
            <li className=""><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header >

      {/* <!-- Hamburger Menu --> */}
      < button id="menu-btn" className="hamburger" type="button" >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button >
      {/* <!-- End Navbar  --> */}
    </>
  );
}

export default Header;