import './Home.css';
import keyCloneImg from './assets/key clone.jpg'; 

function SensorKeys() {
  return (
    <>
      <section className="keys" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10 text-center">
            <h1 className="display-5 my-3" style={{ fontFamily: 'Archivo Black' }}>
              <b>Sensor Keys and Remote Cloning (Maruti only)</b>
            </h1>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              At New Singh Motors, we are proud to offer advanced sensor key making and remote cloning services for Maruti vehicles. As technology evolves, modern vehicles, including Maruti cars, are equipped with sophisticated key systems that enhance security and convenience. We are equipped with the latest tools to cater to these advanced key systems.
            </p>
          </div>
          <div className="col-md-10">
            <h4 className="" style={{ color: '#080808' }}><b>Sensor Key Making:</b></h4>
            <p className="" style={{ color: '#080808' }}>
              If you have lost your Maruti's sensor key or need a spare one, our sensor key making service has you covered. We use cutting-edge technology and programming expertise to create high-quality sensor keys that perfectly match your vehicle's security system. Our precision ensures that the new sensor key works seamlessly with your Maruti, providing secure access and ignition functionality.
            </p>
          </div>
          <div className="col-md-10">
            <h4 className="" style={{ color: '#080808' }}><b>Remote Cloning:</b></h4>
            <p className="" style={{ color: '#080808' }}>
              Have you misplaced or damaged your Maruti's remote control? Don't worry; our remote cloning service can replicate the functionalities of your existing remote onto a new one. Our technicians can clone your original remote's signals and program it into a new remote, allowing you to regain all the essential functions, such as locking, unlocking, and panic mode, with ease.
            </p>
          </div>
          <div className="col-md-10 m-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <div className="container d-flex justify-content-center align-items-center">
                  <img 
                    src={keyCloneImg} 
                    width="100%" 
                    style={{ objectFit: 'cover' }} 
                    alt="Key Cloning Service" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              At New Singh Motors, we prioritize the use of genuine components and maintain strict quality standards in all our services. We ensure that the sensor keys and cloned remotes are durable, reliable, and deliver the same performance as the originals.
              <br /><br />
              Experience the convenience and expertise of our sensor key making and remote cloning services at New Singh Motors. Trust us to handle your Maruti vehicle's advanced key systems with care and precision, ensuring you have a secure and hassle-free driving experience. Visit our shop today and let us assist you with all your Maruti key-related needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SensorKeys;