import heroImg from '../../../Assets/hero car image.png'
import '../hero.css'

const HeroMain = () => {
  return (
    <main>
      <div className='text-hero-container'>
        <h4>Plan your trip now</h4>
        <h1>Save <span>big</span> with our car rental</h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
        </p>

        <div className='hero-btns-container'>
          <button className='book-ride-hero-btn'>
            Book Ride 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-circle-check"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>
          </button>

          <button className='learn-more-hero-btn'>
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6"></path></svg>
          </button>
        </div>
      </div>

      <div className='hero-img-container'>
        <img className='hero-img' src={heroImg} alt="hero-img"/>
      </div>
    </main>
  )
}

export default HeroMain;