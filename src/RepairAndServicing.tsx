import './Home.css';
import repairImg from './assets/repair.jpg'; 

function RepairAndServicing() {
  return (
    <>
      <section className="repair-servicing" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="row h-100 g-0 py-5 px-3 d-flex justify-content-center">
          <div className="col-md-10">
            <h1 className="display-5 my-3" style={{ fontFamily: 'Archivo Black' }}>
              <b>Repair and Servicing</b>
            </h1>
          </div>

          <div className="col-md-10">
            <p style={{ color: '#080808' }}>
              At New Singh Motors, we are dedicated to providing exceptional repair and servicing for all types of two-wheelers. Our skilled technicians have extensive experience and expertise in handling a wide range of motorcycles, scooters, and other two-wheeler vehicles.
              <br /><br />
              When it comes to repairs, we understand that unexpected issues can arise, leaving you stranded or unable to enjoy your ride. That's why our team is committed to promptly diagnosing and addressing any problems your vehicle may have. From fixing engine issues to repairing electrical systems or resolving mechanical faults, we have the knowledge and tools to get your two-wheeler back on the road in no time.
            </p>
          </div>

          <div className="col-md-10 m-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                <div className="container d-flex justify-content-center align-items-center">
                  <img 
                    src={repairImg} 
                    width="100%" 
                    style={{ objectFit: 'cover' }} 
                    alt="Repair and Servicing" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <p style={{ color: '#080808' }}>
              Regular servicing is vital for maintaining the optimal performance and longevity of your vehicle. Our comprehensive servicing packages are designed to keep your two-wheeler in top condition. Our technicians conduct thorough inspections, checking and adjusting key components such as brakes, suspension, tires, and fluids. By identifying potential issues early on, we can prevent major problems and ensure a smooth and safe riding experience.
              <br /><br />
              We also understand the importance of genuine parts when it comes to maintaining the performance and reliability of your vehicle. That's why we stock a wide range of high-quality motorcycle parts from reputable manufacturers. Our technicians will ensure that only genuine parts are used during repairs and servicing, guaranteeing optimal fit, functionality, and durability.
              <br /><br />
              Customer satisfaction is at the core of our service. Our friendly and knowledgeable staff is always ready to assist you, providing personalized attention and expert advice. We strive to exceed your expectations, offering transparent communication and fair pricing for all our repair and servicing work.
              <br /><br />
              Experience the expertise and dedication of New Singh Motors for all your two-wheeler repair and servicing needs. Trust us to keep your vehicle running smoothly, ensuring your safety and enjoyment on every ride. Visit our shop today and discover why we are the preferred choice for two-wheeler enthusiasts in town.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RepairAndServicing;