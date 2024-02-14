import selectCarLogo from '../../Assets/img1  trip section.png';
import contactOperatorLogo from '../../Assets/img2 trip section.png';
import driveLogo from '../../Assets/img3 trip section.png';
import './plan-trip.css'

const PlanTripSection = () => {
  return (
    <section className='plan-trip-section section'>
      <div className="title-trip-section-container">
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
      </div>

      <div className="grid-trip-information"> 
        <div className='column-trip-section'>
          <img src={selectCarLogo} alt="select-car"/>
          <h3>Select Car</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs
          </p>
        </div>

        <div className='column-trip-section'>
          <img src={contactOperatorLogo} alt="select-car"/>
          <h3>Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help with any questions or concerns
          </p>
        </div>

        <div className='column-trip-section'>
          <img src={driveLogo} alt="select-car"/>
          <h3>Let's Drive</h3>
          <p>
            Whether you're hitting the open road, we've got you covered with our wide range of cars
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlanTripSection;