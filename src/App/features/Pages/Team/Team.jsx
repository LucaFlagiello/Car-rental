import BookBanner from '../../Components/Book Banner/BookBanner'
import Footer from '../../Components/Footer/Footer'
import BgSection from '../../Components/Bg Pages Section/BgSection'
import Person1 from '../../Assets/Person1.png'
import Person2 from '../../Assets/Person2.png'
import Person3 from '../../Assets/Person3.png'
import Person4 from '../../Assets/Person4.png'
import Person5 from '../../Assets/Person5.png'
import Person6 from '../../Assets/Person6.png'
import './team.css'

const Team = () => {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];

  return (
    <>
      <BgSection />

      <section className='teammates-cards-grid'>
        {teamPpl.map((person, id) => (
          <div className='team-card' key={id}>
            <img src={person.img} alt='teammates'/>
            <div className='name-job-container'>
              <h3>{person.name}</h3>
              <p>{person.job}</p>
            </div>
          </div>
        ))}
      </section>

      <BookBanner />
      <Footer />
    </>
  )
}

export default Team;