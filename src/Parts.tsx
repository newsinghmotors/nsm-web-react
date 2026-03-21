import './Home.css';
import partsImg from './assets/parts.jpg'; 

function Parts() {
  return (
    <>
      <section className="keys" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10 text-center">
            <h1 className="display-5 my-3" style={{ fontFamily: 'Archivo Black' }}>
              <b>2-Wheeler Parts</b>
            </h1>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              At New Singh Motors, we take pride in offering a wide range of high-quality parts for two-wheelers. Whether you're a motorcycle enthusiast, a scooter rider, or own any other type of two-wheeler, we have you covered with our extensive selection of parts.
              <br /><br />
              Our inventory includes genuine parts from reputable manufacturers, ensuring you receive parts that are built to the highest standards of quality and performance. We understand the importance of using reliable parts that seamlessly integrate with your vehicle, providing optimal functionality and durability.
            </p>
          </div>
          <div className="col-md-10 m-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <div className="container d-flex justify-content-center align-items-center">
                  <img src={partsImg} width="100%" style={{ objectFit: 'cover' }} alt="2-Wheeler Parts" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              From essential components such as brakes, clutch systems, and filters to accessories like mirrors, lights, and handlebars, we have a comprehensive range of parts to meet your needs. Our goal is to provide you with everything you require to maintain, repair, or customize your two-wheeler.
              <br /><br />
              When it comes to pricing, we believe in offering competitive rates without compromising on quality. We understand that affordability is a crucial factor for our customers, and we strive to provide fair pricing that represents the value and reliability of our parts. Our aim is to ensure that you have access to top-notch parts at reasonable prices, allowing you to keep your two-wheeler in prime condition without breaking the bank.
              <br /><br />
              Our knowledgeable staff is always available to assist you in finding the right parts for your specific requirements. Whether you need guidance on selecting the correct brake pads or advice on upgrading your exhaust system, we are here to provide personalized attention and expert recommendations.
              <br /><br />
              Customer satisfaction is our top priority, and we strive to deliver an exceptional experience from the moment you step into our shop. With transparent communication, friendly service, and a commitment to meeting your needs, we aim to exceed your expectations at every turn.
              <br /><br />
              Visit New Singh Motors today to explore our wide range of high-quality parts for two-wheelers. Experience the convenience of finding all the components you need under one roof, along with competitive pricing and knowledgeable assistance. Trust us to provide you with the parts that keep your two-wheeler running smoothly and reliably for all your rides ahead.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Parts;