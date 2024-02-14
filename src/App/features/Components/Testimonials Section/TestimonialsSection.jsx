import './testimonialsSection.css'
import potterProfilePic from '../../Assets/profile.Pic.Potter.jpg'
import rizzlyProfilePic from '../../Assets/profile.pic.Rizzly.jpg'

const TestimonialsSection = () => {
  return (
    <section className='testimonials-section'>
      <div>
        <div className='testimonials-text-box'>
          <h3>Reviewed by People</h3>
          <h2>Client's Testimonials</h2>
          <p>
            Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
          </p>
        </div>

        <div className='reviews-container'>
          <div className='review-card'>
            <p>
              "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
            </p>

            <div className='flex-container'>
              <div className='pic-name-container'>
                <img className='reviews-profile-pic' src={potterProfilePic} alt='profile-pic'/>
                <div className='name-nation-container'>
                  <h3>Parry Hotter</h3>
                  <p>Italy</p>
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="quotes" data-darkreader-inline-stroke=""><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
            </div>
          </div>

          <div className='review-card'>
            <p>
              "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
            </p>

            <div className='flex-container'>
              <div className='pic-name-container'>
                <img className='reviews-profile-pic' src={rizzlyProfilePic} alt='profile-pic'/>
                <div className='name-nation-container'>
                  <h3>Ron Rizzly</h3>
                  <p>London</p>
                </div>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="quotes" data-darkreader-inline-stroke=""><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;