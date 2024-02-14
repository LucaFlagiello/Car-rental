import './footer.css'

const Footer = () => {
  return (
    <footer> 
      <div className='columns-container'>
        <ul className='first-column-footer'>
          <li className='car-rental-list-title'><span>CAR</span> Rental</li>
          <li>
           <p>
             We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
           </p>
          </li>
          <li className='car-rental-phone'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-phone-call" data-darkreader-inline-stroke="" ><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1 6 6"></path></svg>
            (123) -456-789
          </li>
          <li className='car-rental-email'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail" data-darkreader-inline-stroke=""><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
            carrental@gmail.com
          </li>
        </ul>

        <ul className='second-column-footer'>
          <li>COMPANY</li>
          <li>New York</li>
          <li>Carreers</li>
          <li>Mobile</li>
          <li>Blog</li>
          <li>How we work</li>
        </ul>

        <ul className="third-column-footer">
          <li>WORKING HOURS</li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>

        <ul className='fourth-column-footer'>
          <li>SUBSCRIPTION</li>
          <li>Subscribe your Email address for latest news & updates.</li>
          <li>
            <input 
              placeholder='Enter Email Address'
            />
          </li>
          <li>
            <button>Submit</button>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;