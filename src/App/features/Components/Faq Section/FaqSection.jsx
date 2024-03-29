import { useState } from 'react';
import './faqSection.css'

const FaqSection = () => { 

  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);
  const [thirdQuestion, setThirdQuestion] = useState(false);

  return (
    <section className='faq-section'>
        <div className='faq-elements-container'>
          <div className='faq-text-box'>
            <h3>FAQ</h3>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className='questions-container'>
            <div className='question'>
              <div onClick={() => setFirstQuestion(prevStatus => !prevStatus)} className={firstQuestion ? 'question-btn-opened' : 'question-btn-closed'}>
                <p>1. What is special about comparing rental car deals?</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down"><path d="M6 9l6 6l6 -6"></path></svg>
              </div>

              <div className={firstQuestion ? 'answer-opened answer-closed' : 'answer-closed'}>
                Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
              </div>
            </div>

            <div className='question'>
              <div onClick={() => setSecondQuestion(prevStatus => !prevStatus)} className={secondQuestion ? 'question-btn-opened' : 'question-btn-closed'}>
                <p>2. How do I find the car rental deals?</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down"><path d="M6 9l6 6l6 -6"></path></svg>
              </div>

              <div className={secondQuestion ? 'answer-opened answer-closed' : 'answer-closed'}>
                 You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
              </div>
            </div>

            <div className='question'>
              <div onClick={() => setThirdQuestion(prevStatus => !prevStatus)} className={thirdQuestion ? 'question-btn-opened' : 'question-btn-closed'}>
                <p>3. How do I find such low rental car prices?</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down"><path d="M6 9l6 6l6 -6"></path></svg>
              </div>

              <div className={thirdQuestion ? 'answer-opened answer-closed' : 'answer-closed'}>
                 Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FaqSection;