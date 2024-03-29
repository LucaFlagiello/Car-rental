const BookingForm = () => {
  return (
    <form className="section">
      <div>
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg>
            Select Your Car Type <span>*</span>
          </label>
        <select>
          <option>Select your car type</option>
          <option value='Audi A1 S-line'>Audi A1 S-line</option>
          <option value='VW Golf6'>VW Golf6</option>
          <option value='Toyota Camry'>Toyota Camry</option>
          <option value='BMW 320 ModernLine'>BMW 320 ModernLine</option>
          <option value='Mercedes-Benz GLK'>Mercedes-Benz GLK</option>
          <option value='VW Passat CC'>VW Passat CC</option>
        </select>
      </div>

      <div>
        <label>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
          Pick-up <span>*</span>
        </label>
        <select>
          <option>Select pick up location</option>
          <option>London</option>
          <option>Paris</option>
          <option>Rome</option>
          <option>Oslo</option>
        </select>
      </div>

      <div>
        <label>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
          Drop-off <span>*</span>
        </label>
        <select>
          <option>Select drop off location</option>
          <option>London</option>
          <option>Paris</option>
          <option>Rome</option>
          <option>Oslo</option>
        </select>
      </div>

      <div>
        <label>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 3l0 4"></path><path d="M8 3l0 4"></path><path d="M4 11l16 0"></path><path d="M8 15h2v2h-2z"></path></svg>
          Pick-up <span>*</span>
        </label>
        <input type="date"/>
      </div>

      <div>
        <label>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 3l0 4"></path><path d="M8 3l0 4"></path><path d="M4 11l16 0"></path><path d="M8 15h2v2h-2z"></path></svg>
          Drop-off <span>*</span>
        </label>
        <input type="date"/>
      </div>

      <button className="booking-btn">Search</button>
    </form>
  )
}

export default BookingForm;