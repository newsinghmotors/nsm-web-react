import { Link } from 'react-router';
import logoImg from './assets/logo.png';

function Footer() {
    return (
        <>
            <footer className="footer-section" id="contact">
                <div className="container">
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img src={logoImg} className="img-fluid" alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>we are passionate about motorcycles and dedicated to keeping your two-wheeled companion running smoothly. With our comprehensive range of services and top-quality products, we are here to cater to all your motorbike repair and maintenance needs. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <p>Useful Links</p>
                                    </div>
                                    <ul>
                                        <li className=""><a href="/">HOME</a></li>
                                        <li className=""><a href="#about">ABOUT</a></li>
                                        <li className=""><a href="#services">SERVICES</a></li>
                                        <li className=""><a href="#contact">CONTACT</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-social-icon">
                                        <span>Contacts Us</span>
                                        <div className="single-cta">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <div className="cta-text">
                                                <h4>Find us</h4>
                                                <div className="footer-text">
                                                    <p>Power House Road, Korba, C.G. (495677)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-cta">
                                            <i className="fas fa-phone"></i>
                                            <div className="cta-text">
                                                <h4>Call us</h4>
                                                <div className="footer-text">
                                                    <p>+91-9826371717, +91-7987666416</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-cta">
                                            <i className="far fa-envelope-open"></i>
                                            <div className="cta-text">
                                                <h4>Mail us</h4>
                                                <div className="footer-text">
                                                    <p>newsinghmotorskorba@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2026, All Right Reserved</p>
                                </div>
                            </div>
                            {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Terms</a></li>
                          <li><a href="#">Privacy</a></li>
                          <li><a href="#">Policy</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>
              </div> */}
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
}

export default Footer;