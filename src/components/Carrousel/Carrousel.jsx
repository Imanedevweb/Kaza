import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import "./carrousel.scss"

function Carrousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0) // Je définie l'index de la 1ère image à 0
 
    let  controls;
    let countImage;

    // Fonction pour aller à l'image précédente
   const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };      
    
    // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  if(images.length > 1) {
     
     controls =
        <div className="carrousel_controls">
              <div className="ArrowLeft" onClick={prevSlide}> 
                   <FontAwesomeIcon icon={faChevronLeft} />
              </div>      
              <div className="ArrowRight" onClick={nextSlide}> 
                  <FontAwesomeIcon icon={faChevronRight} />
              </div>     
        </div>
      countImage = 
        <span className="slide_number">{currentIndex+1}/{images.length}</span>

  }

  return (
    <section className="carrousel">
        {controls}
        <div className="carrousel__slide">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carrousel__image" />
        </div>
       {countImage}
      
    </section>
  );
}

export default Carrousel;  
