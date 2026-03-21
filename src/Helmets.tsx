import './Home.css';
import helmetImg from './assets/helmet.jpg'; 

function Helmets() {
  return (
    <>
      <section className="keys" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10 text-center">
            <h1 className="display-5 my-3" style={{ fontFamily: 'Archivo Black' }}>
              <b>Helmets</b>
            </h1>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              Discover top-quality helmets at New Singh Motors, designed to provide exceptional safety and style for all 2-wheelers. Our commitment to your well-being on the road is reflected in our collection of helmets, where safety meets comfort and aesthetics.
              <br /><br />
              We understand the vital role helmets play in safeguarding riders, which is why we offer a range of helmets that adhere to the highest safety standards. From full-face helmets to open-face options, our collection caters to various preferences while ensuring maximum protection.
            </p>
          </div>
          <div className="col-md-10 m-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <div className="container d-flex justify-content-center align-items-center">
                  <img 
                    src={helmetImg} 
                    width="100%" 
                    style={{ objectFit: 'cover' }} 
                    alt="Motorcycle Helmets" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              Our helmets are crafted with advanced materials that offer impact resistance without compromising on comfort. With innovative ventilation systems, you can enjoy a cool and breathable ride even during long journeys.
              <br /><br />
              At New Singh Motors, we believe that safety should not come at the cost of style. Our helmets are available in a variety of designs and colors, allowing you to find the perfect match for your personality and 2-wheeler.
              <br /><br />
              Whether you're a casual rider or a seasoned enthusiast, our helmet collection is suitable for riders of all types of 2-wheelers. Put safety first without compromising on your unique style.
              <br /><br />
              Visit New Singh Motors today to explore our impressive helmet range. Our knowledgeable staff is here to assist you in finding the ideal helmet that not only fits securely but also complements your 2-wheeler and personal style. Elevate your safety and ride with confidence, all while looking your best on the road.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Helmets;