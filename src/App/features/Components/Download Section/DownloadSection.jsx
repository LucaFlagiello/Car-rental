import './downloadSection.css'
import playStoreIcon from '../../Assets/playstore_img.png'
import appleStoreIcon from '../../Assets/appstore_img.png'

const DownloadSecton = () => {
  return (
    <section className='download-section'>
      <div className='download-text-container'>
        <h2>
          Download our app to get most out of it
        </h2>

        <p>
          Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
        </p>

        <div className='download-btns-container'>
          <img src={playStoreIcon} alt='playstore-download'/>
          <img src={appleStoreIcon} alt='appstore-download'/>
        </div>
      </div>
    </section>
  )
}

export default DownloadSecton;