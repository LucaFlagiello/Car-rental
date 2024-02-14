import './buttonToTop.css'
import { useState } from 'react';

const ButtonScrollToTop = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 600){ 
      setVisible(true) 
    }  
    else if (scrolled <= 100){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 

  return (
    <>
      {visible ? <button onClick={scrollToTop} className="scrool-top-btn">^</button>
      : null}
      
    </>
  ) 
}

export default ButtonScrollToTop;