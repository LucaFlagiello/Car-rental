import './contact.css'
import BgSection from '../../Components/Bg Pages Section/BgSection';
import BookBanner from '../../Components/Book Banner/BookBanner';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div className='contact-page'>
      <BgSection />

      <main className='contact-main-section'>
        <div className='additional-information-container'>
          <h2>Need additional information?</h2>
          <p>
            A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
          </p>

          <div className='icon-information-container'>
            <div className='flex-container-additional-information'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="phone-icon"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
              <h4>&#40;123&#x29; 456-7869</h4>
            </div>

            <div className='flex-container-additional-information'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="email-icon"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>

              <h4>carrental&#x40;carmail.com</h4>
            </div>

            <div className='flex-container-additional-information'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="location-icon"><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path></svg>

              <h4>Italy, Rome</h4>
            </div>
          </div>
        </div>

        <form>
          <div>
            <label className='contact-label'>Full Name<b>&#x2a;</b></label>
            <input placeholder='E.g:"Mark Gray"'/>
          </div>

          <div>
            <label className='contact-label'>Email<b>&#x2a;</b></label>
            <input placeholder='youremail@example.com'/>
          </div>

          <div>
            <label className='contact-label'>Tell us about it<b>&#x2a;</b></label>
            <textarea placeholder='Write Here...'></textarea>
          </div>

          <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mail-message-icon"><path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path><path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path><path d="M3 19l6 -6"></path><path d="M15 13l6 6"></path></svg> Send Message</button>
        </form>
      </main>

      <BookBanner />
      <Footer />
    </div>
  )
}

export default Contact;