import chooseSectionImg from '../../Assets/Choose bg img.png'
import crossDriveLogo from '../../Assets/cross.png.choose.png'
import pricingLogo from '../../Assets/pricing.png.choose.png'
import noHiddenChargesLogo from '../../Assets/noHiding.png.choose.png'
import './choose.css'

const ChooseSection = () => {
  return (
    <section className="choose-section section">
      <div className="choose-section-elements-container">
        <img className='choose-section-img' src={chooseSectionImg} alt="cars-img"/> 

        <div className='choose-text-boxes-container'>
          <div className='why-choose-text-box'>
            <h3>Why Choose Us</h3>
            <h2>Best valued deals you will ever find</h2>
            <p>
              Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
            </p>
            <button className='choose-section-btn'>
              Find Details
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="greater-than" data-darkreader-inline-stroke=""><path d="M9 6l6 6l-6 6"></path></svg>
            </button>
          </div>

          <div className='choose-logo-columns-container'>
            <div className='choose-logo-text-container'>
              <img src={crossDriveLogo} alt='cross-drive-img'/>
              <div>
                <h3>Cross Country Drive</h3>
                <p>
                  Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>

            <div className='choose-logo-text-container'>
              <img src={pricingLogo} alt='cross-drive-img'/>
              <div>
                <h3>All Inclusive Pricing</h3>
                <p>
                  Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                </p>
              </div>
            </div>

            <div className='choose-logo-text-container'>
              <img src={noHiddenChargesLogo} alt='cross-drive-img'/>
              <div>
                <h3>No Hidden Charges</h3>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseSection;