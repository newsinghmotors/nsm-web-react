import './Home.css';
import wash01 from './assets/wash/wash-01.jpeg';
import wash02 from './assets/wash/wash-02.jpeg';

function Washing() {
  return (
    <>
      <section className="keys" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10 text-center">
            <h1 className="display-5 my-3" style={{ fontFamily: 'Archivo Black' }}>
              <b>Two wheeler washing</b>
            </h1>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              At New Singh Motors, we take pride in providing top-notch washing services for all types of 2-wheelers. Our comprehensive bike wash solutions are designed to not only make your vehicle shine but also maintain its appearance and protect its components. Whether you own a motorcycle, scooter, or any other 2-wheeler, we treat each vehicle with care and attention to detail.
            </p>
          </div>
          <div className="col-md-10 p-3">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 p-2">
                <div className="container d-flex justify-content-center align-items-center">
                  <img src={wash01} width="100%" style={{ objectFit: 'cover' }} alt="Bike Wash Process 1" />
                </div>
              </div>
              <div className="col-md-5 p-2">
                <div className="container d-flex justify-content-center align-items-center">
                  <img src={wash02} width="100%" style={{ objectFit: 'cover' }} alt="Bike Wash Process 2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              During the bike wash process, we pay special attention to cleaning hard-to-reach areas, ensuring that every nook and cranny is free from dirt and grime. From the wheels and tires to the engine and exhaust, we clean every part of your 2-wheeler to give it a fresh and polished look.
              <br /><br />
              In addition to making your 2-wheeler look like new, our bike wash services also play a vital role in maintaining its longevity. Regular cleaning helps remove corrosive substances, road grime, and debris that can accumulate over time, preventing potential damage to your vehicle's finish and components.
              <br /><br />
              Experience the difference of a professional bike wash at New Singh Motors. Our dedicated team is ready to bring out the best in your 2-wheeler with our meticulous and eco-friendly washing services. Visit our shop today and see your bike transformed into a gleaming beauty, ready to hit the road in style.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Washing;