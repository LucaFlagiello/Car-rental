import './about.css'
import aboutImg from '../../Assets/about-image.jpg'
import aboutIcon1 from '../../Assets/about-company-icon1.png'
import aboutIcon2 from '../../Assets/about-company-icon2.png'
import aboutIcon3 from '../../Assets/about-company-icon3.png'
import Footer from '../../Components/Footer/Footer'
import PlanTripSection from '../../Components/Plan Trip Section/PlanTripSection'
import BookBanner from '../../Components/Book Banner/BookBanner'
import BgSection from '../../Components/Bg Pages Section/BgSection'

const About = () => {
  return (
    <div className="about-page">
      <BgSection />
      
      <section className='about-company-section'>
        <div className='flex-about-company'>  
          <img src={aboutImg} alt=''/> 
          <div className='about-company-text-container'>   
            <h4>About Company</h4>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
            </p>
            <div className='stats-icons-container'>
              <div>
                <img src={aboutIcon1} alt='car-icon'/>
                <div className='flex-container'>
                  <h3>20</h3>
                  <p>Car Types</p>
                </div>
              </div>

              <div>
                <img src={aboutIcon2} alt='car-icon'/>
                <div className='flex-container'>
                  <h3>85</h3>
                  <p>Rental Outlets</p>
                </div>
              </div>

              <div>
                <img src={aboutIcon3} alt='car-icon'/>
                <div className='flex-container'>
                  <h3>75</h3>
                  <p>Repair Shop</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <PlanTripSection />
      <BookBanner />
      <Footer />
  </div>
  )
}

export default About;