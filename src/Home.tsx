import './Home.css';
import bikeWashImg from './assets/bike wash.jpg';
import helmetPicImg from './assets/helmet pic.jpg';
import helmetImg from './assets/helmet.jpg';
import keyCloneImg from './assets/key clone.jpg';
import keyMachineImg from './assets/key-machine.jpg';
import mainImg from './assets/main.jpg';
import oilImg from './assets/oil.jpg';
import partsImg from './assets/parts.jpg';
import repairImg from './assets/repair.jpg';
import tyresImg from './assets/tyres.jpg';

function Home() {

  return (
    <>
      <section className="landing" style={{ height: '90vh', backgroundColor: '#181818' }}>
        <div className="row h-100 g-0 pt-5">
          <div className="col-md-8">
            <h1 className="display-1 my-3" style={{ marginLeft: '3rem', color: '#da7a00', fontFamily: 'Russo One' }}><b>New Singh Motors</b></h1>
            <p className="display-5 my-3" style={{ marginLeft: '3rem', color: '#B8B8B8', fontFamily: 'Viga' }}><b>Gear up your ride with genuine</b></p>
            <p className="display-5 my-3" style={{ marginLeft: '3rem', color: '#B8B8B8', fontFamily: 'Viga' }}><b>Motorcycle parts</b></p>
            <a href="https://goo.gl/maps/3rWWT2Fiog1etdrWA" target="_blank">
              <button type="button" className="red-btn btn btn-outline-danger my-3" style={{ marginLeft: '3rem' }}>Get Directions</button>
            </a>
          </div>

        </div>
      </section>


      <section className="about" id="about" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5" >
                <div className="container d-flex justify-content-center align-items-center">
                  <img src={mainImg} width="100%" style={{ objectFit: 'cover' }} alt="Image of shop" />
                </div>
              </div>
              <div className="col-md-7">
                <h2 className="display-7 my-3" style={{ color: '#d20505' }}><b>About Us</b></h2>
                <p className="display-5" style={{ color: '#080808', fontFamily: 'Archivo Black' }}><b>WE HAVE OVER 35 YEARS OF EXPERIENCE</b></p>
                <p style={{ color: '#080808' }}>
                  New Singh Motors has been a trusted name in town for fair pricing and top-quality services. From bike repairs to key making, washes, helmets, servicing, and parts, we offer a comprehensive range of services. We handle all types of bikes, ensuring your motorcycle stays in prime condition. Our inventory includes a variety of helmets and genuine parts. With a focus on customer satisfaction, we provide personalized attention and expert advice.
                  <br /><br />
                  Come visit New Singh Motors today to experience our competitive pricing, and reliable services dedicated to meet all your motorcycle needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services" style={{ backgroundColor: '#080808' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10">
            <h2 className="display-1 my-3" style={{ color: '#B8B8B8' }}><b>Our Services</b></h2>
          </div>
          <div className="col-md-10">
            <div className="card-list row g-0 d-flex" style={{ width: '100%' }}>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <a href="/nsm-web-react/Keys">
                  <div className="card text-center m-2">
                    <div className="card-header p-0">
                      <img src={keyMachineImg} alt="key making machine" style={{ objectFit: 'cover' }} className="card-img gradient-mask w-100" />
                      <div className="card-icon position-absolute w-20 h-20 rounded-md flex items-center justify-center text-primary-foreground" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key w-6 h-6" data-replit-metadata="client/src/pages/Home.tsx:52:10" data-component-name="Key"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: 'x-large' }}>Key Making</h3>
                      <p className="card-text">Key making of all vehicle (2-200 wheelers)</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <a href="/nsm-web-react/RepairAndServicing">
                  <div className="card text-center m-2">
                    <div className="card-header p-0">
                      <img src={repairImg} alt="repair and servicing" style={{ objectFit: 'cover' }} className="card-img gradient-mask w-100" />
                      <div className="card-icon position-absolute w-20 h-20 rounded-md flex items-center justify-center text-primary-foreground" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench w-6 h-6" data-replit-metadata="client/src/pages/Home.tsx:58:10" data-component-name="Wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: 'x-large' }}>Repair and Servicing</h3>
                      <p className="card-text">Fast and reliable repairing of all two wheelers</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <a href="/nsm-web-react/Parts">
                  <div className="card text-center m-2">
                    <div className="card-header p-0">
                      <img src={partsImg} alt="2 Wheeler Parts" style={{ objectFit: 'cover' }} className="card-img gradient-mask w-100" />
                      <div className="card-icon position-absolute w-20 h-20 rounded-md flex items-center justify-center text-primary-foreground" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-6 h-6" data-replit-metadata="client/src/pages/Home.tsx:64:10" data-component-name="Package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: 'x-large' }}>Two Wheeler Parts</h3>
                      <p className="card-text">Best affordable price for all parts</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <a href="/nsm-web-react/Helmets">
                  <div className="card text-center m-2">
                    <div className="card-header p-0">
                      <img src={helmetImg} alt="Helmets" style={{ objectFit: 'cover' }} className="card-img gradient-mask w-100" />
                      <div className="card-icon position-absolute w-20 h-20 rounded-md flex items-center justify-center text-primary-foreground" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6" data-replit-metadata="client/src/pages/Home.tsx:70:10" data-component-name="Shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: 'x-large' }}>Helmets</h3>
                      <p className="card-text">Best quality helmets to ensure your safety</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <a href="/nsm-web-react/SensorKeys">
                  <div className="card text-center m-2">
                    <div className="card-header p-0">
                      <img src={keyCloneImg} alt="Remote Cloning" style={{ objectFit: 'cover', mixBlendMode: 'multiply' }} className="card-img gradient-mask w-100" />
                      <div className="card-icon position-absolute w-20 h-20 rounded-md flex items-center justify-center text-primary-foreground" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-radio w-6 h-6" data-replit-metadata="client/src/pages/Home.tsx:76:10" data-component-name="Radio"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: 'x-large' }}>Sensor key & Remote Cloning</h3>
                      <p className="card-text">Reliable cloning for Maruti</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <a href="/nsm-web-react/Washing">
                  <div className="card text-center m-2">
                    <div className="card-header p-0">
                      <img src={bikeWashImg} alt="bike wash" style={{ objectFit: 'cover' }} className="card-img gradient-mask w-100" />
                      <div className="card-icon position-absolute w-20 h-20 rounded-md flex items-center justify-center text-primary-foreground" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets w-6 h-6" data-replit-metadata="client/src/pages/Home.tsx:82:10" data-component-name="Droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title" style={{ fontSize: 'x-large' }}>Two Wheeler Washing</h3>
                      <p className="card-text">Fast washing to keep your bike look new</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-12 text-center">
            <h2>GALLERY</h2>
          </div>
          <div className="col-md-10">
            <div className="row g-0 d-flex" style={{ width: '100%' }}>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={tyresImg} alt="tyres" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={helmetPicImg} alt="helmet" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={oilImg} alt="oil" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-12 text-center">
            <h2>VISIT US</h2>
          </div>
          <div className="col-md-10">
            <div className="row g-0 d-flex" style={{ width: '100%' }}>
              <div className="col-md-6 mt-3 col-sm-10 p-0">
                <div className="p-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.095667204195!2d82.69973859999999!3d22.3500163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278ff5b26b5617%3A0x2e7d058db3a77fca!2sNew%20Singh%20Motors!5e0!3m2!1sen!2sin!4v1688417277067!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
              <div className="col-md-6 mt-3 col-sm-10 p-0">
                <div className="p-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!4v1688409975431!6m8!1m7!1s49cquxtwqWz5fj4pSQzZ6w!2m2!1d22.35011750172294!2d82.69980835586794!3f164.41848882019627!4f-0.9125450275894593!5f0.7820865974627469" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
