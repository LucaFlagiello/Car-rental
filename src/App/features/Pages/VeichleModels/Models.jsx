import BgSection from '../../Components/Bg Pages Section/BgSection'
import Footer from '../../Components/Footer/Footer'
import BookBanner from '../../Components/Book Banner/BookBanner'
import cars from '../../Cars Data/CarsData'
import CarModelCard from '../../Components/CarModelCard/CarModelCard'
import './models.css'

const Models = () => {
  return (
    <section className='car-models-page'>
      <BgSection />

      <div className='car-cards-container'>
        {cars.map(car => 
        <CarModelCard
          car={car}
          key={car.id}
        />)}
      </div>

      <BookBanner />
      <Footer />
    </section>
  )
}

export default Models;