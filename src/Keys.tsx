import './Home.css';
import keyMachineImg from './assets/key-machine.jpg';

// Classic Keys Assets
import k1 from './assets/keys/k1.png';
import k2 from './assets/keys/k2.jpeg';
import k3 from './assets/keys/k3.jpeg';
import k4 from './assets/keys/k4.jpeg';
import k5 from './assets/keys/k5.jpeg';
import k6 from './assets/keys/k6.jpeg';

// Flip Keys Assets
import flip1 from './assets/keys/flip 1.png';
import flip2 from './assets/keys/flip 2.png';
import flip3 from './assets/keys/flip 3.png';

// Metallic Keys Assets
import m1 from './assets/keys/m1.png';
import m2 from './assets/keys/m2.png';
import m3 from './assets/keys/m3.png';
import m4 from './assets/keys/m4.png';
import m5 from './assets/keys/m5.png';
import m6 from './assets/keys/m6.png';

// Colourful Keys Assets
import c1 from './assets/keys/c1.png';
import c2 from './assets/keys/c2.png';


function Keys() {
  return (
    <>
      <section className="keys" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10">
            <h1 className="display-5 my-3" style={{ fontFamily: 'Archivo Black' }}>
              <b>Key Making and Duplication</b>
            </h1>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              We offer key duplication and replacement services for a wide range of vehicles. Whether you own a small two-wheeler or a massive 200-wheeler, we can create keys for almost any type of vehicle you own. We understand the importance of having a reliable set of keys, and our team is dedicated to ensuring that you have easy access to your vehicle whenever you need it. Here at our shop, we fulfill the needs of all vehicle owners, regardless of the size or type of their vehicles.
            </p>
          </div>
          <div className="col-md-10">
            <h3 className="display-7" style={{ color: '#080808', fontFamily: 'Archivo Black' }}>
              <b>Get your key within minutes</b>
            </h3>
            <span className="" style={{ color: '#d20505' }}>
              <b>Fast and clean key cutting using computerized key cutting machine</b>
            </span>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              With our advanced technology, we can replicate your vehicle key with precision and accuracy, delivering a perfect fit every time. Our highly skilled technicians are well-trained in operating the automated key cutting machine, ensuring consistent and reliable results.
              <br /><br />
              Gone are the days of waiting for hours, or even days, to get a duplicate key. At New Singh Motors, we understand the importance of your time, which is why our efficient process allows us to create a duplicate key within just 5 minutes. You can now have a spare key made while you wait, saving you valuable time with convenience.
            </p>
          </div>
          <div className="col-md-10">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 my-3">
                <div className="container d-flex justify-content-center align-items-center">
                  <img src={keyMachineImg} width="100%" style={{ objectFit: 'cover' }} alt="Key Machine" />
                </div>
              </div>
              <div className="col-md-7">
                <p className="" style={{ color: '#080808' }}>
                  Our computerized automatic key cutting machine utilizes advanced algorithms and measurements to recreate the intricate grooves and notches of your original key. The result is a high-quality duplicate key that functions flawlessly, providing you with the peace of mind that comes with having a reliable backup.
                  <br /><br />
                  We prioritize the quality of our key-making services, ensuring that each duplicate key meets the highest standards of durability and functionality. Our attention to detail and commitment to excellence means that you can trust our keys to operate seamlessly with your vehicle's lock, just like the original key.
                  <br /><br />
                  When it comes to key duplication, New Singh Motors is your go-to destination. Experience the convenience of our computerized automatic key cutting machine that delivers exceptional quality and efficiency. Our skilled technicians are ready to assist you, providing you with a duplicate key that exceeds your expectations in a fraction of the time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-10 mt-5">
            <h3 className="display-7 my-2" style={{ color: '#080808', fontFamily: 'Archivo Black' }}>
              <b>Types of Keys</b>
            </h3>
            <span className="" style={{ color: '#d20505' }}><b>Wide variety of keys</b></span>
          </div>
          <div className="col-md-10 my-2">
            <p className="" style={{ color: '#080808' }}>
              Whether you need a standard key or something more specialized, we've got you covered. Our key-making services encompass a range of key types, including normal keys for traditional vehicles. These keys are crafted with precision to match the original key's shape and design.
            </p>
          </div>
          <div className="col-md-10">
            <h4 className="" style={{ color: '#080808' }}><b>1. Classic Keys:</b></h4>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              Let's begin with the timeless option – classic keys. These keys are reliable, efficient, and exude an enduring charm. At New Singh Motors, we provide high-quality replacement or duplicate classic keys for various motorcycle models. Our state-of-the-art automatic key cutting machine ensures precise craftsmanship and swift service, saving you both time and hassle.
            </p>
          </div>
          <div className="col-md-10">
            <div className="row g-0 d-flex mb-5" style={{ width: '100%' }}>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={k1} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={k2} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={k3} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={k4} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={k5} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={k6} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <h4 className="" style={{ color: '#080808' }}><b>2. Modern Flip Keys:</b></h4>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              For those seeking a touch of modernity, flip keys are an excellent choice. New Singh Motors specializes in manufacturing and duplicating flip keys that seamlessly integrate advanced technology with top-notch security features. With their folding mechanism conveniently housed within the remote fob, flip keys offer sleekness and compactness. Through our automatic key cutting machine, you can trust us to deliver accuracy and speedy results.
            </p>
          </div>
          <div className="col-md-10">
            <div className="row g-0 d-flex mb-5" style={{ width: '100%' }}>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={flip1} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={flip2} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={flip3} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <h4 className="" style={{ color: '#080808' }}><b>3. Metallic Keys - Unleash Your Personality:</b></h4>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              At New Singh Motors, we take motorcycle keys to a whole new level by offering an extraordinary range of metallic designs. These keys not only serve their purpose but also make a bold statement about your unique style and personality. Let your key reflect the thrill and passion experienced during your rides by choosing from our assortment of striking shapes such as guns, swords, lightning bolts, and more. The remarkable attention to detail in these metallic creations is truly unmatched.
            </p>
          </div>
          <div className="col-md-10">
            <div className="row g-0 d-flex mb-5" style={{ width: '100%' }}>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={m1} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={m2} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={m3} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={m4} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={m5} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={m6} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <h4 className="" style={{ color: '#080808' }}><b>4. Colourful Keys:</b></h4>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              Our colourful keys come in a variety of vibrant hues such as purple, grey, yellow, blue, red, and many more. Whether you want to match your key to your vehicle's paint job or simply add a pop of personality, our diverse range of colours ensures you'll find the perfect key to suit your preferences.
            </p>
          </div>
          <div className="col-md-10">
            <div className="row g-0 d-flex justify-content-center mb-5" style={{ width: '100%' }}>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={c1} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 col-sm-10 p-0">
                <div className="card text-center m-2">
                  <div className="card-header p-0">
                    <img src={c2} alt="" style={{ objectFit: 'cover' }} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <p className="" style={{ color: '#080808' }}>
              We encourage you to visit our shop to explore an even wider variety of key designs. At New Singh Motors, we understand the importance of providing a diverse selection to suit every individual's preferences and style.
              <br /><br />
              Our dedicated team of experts will be on hand to assist you during your visit. They can provide guidance, answer any questions you may have, and help you explore our wide range of key designs. We're committed to ensuring that you find the ideal key that not only meets your functional needs but also reflects your unique personality and preferences.
              <br /><br />
              So, we warmly invite you to visit our shop and experience the full range of key designs we have to offer. Immerse yourself in the variety, feel the quality of our keys, and let our team assist you in finding the perfect key that will truly make a statement. We look forward to welcoming you to New Singh Motors and helping you discover the key design that resonates with you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Keys;