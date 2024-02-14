import heroBgImg from '../../Assets/hero background img.png';
import HeroMain from './Hero Main/HeroMain';


const  HeroSection = () => {
  return (
    <section className="hero-section">
      <img className="hero-bg-img" src={heroBgImg} alt="hero-bg-img"/> 
      <HeroMain />
    </section>
  )
}

export default HeroSection;
