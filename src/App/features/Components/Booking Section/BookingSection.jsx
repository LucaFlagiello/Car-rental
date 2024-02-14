import BookingForm from "./Booking form/BookingForm";
import '../Booking Section/bookingSection.css'

const BookingSection = () => {
  return (
    <section className="booking-section section">  
      <div className="booking-container">
        <h2>Book a car</h2>
        <BookingForm />
      </div>
    </section>
  )
}

export default BookingSection;