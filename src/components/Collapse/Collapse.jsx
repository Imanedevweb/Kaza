import React, { useState } from 'react';
import "./_Collapse.scss"
import '@fortawesome/fontawesome-free/css/all.min.css'

function Collapse({ title, children}) {
    //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false);// je definie le state du toggle (et false par défaut)

  //fonction pour gérer l'afichage du contenu des collapses
  const btnCollapse = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    // Conteneur du Collapse
    <div className="collapse_container">
      <button className="collapse_header" onClick={btnCollapse}>
        <h3>{title}</h3>
        <p className={`Icon ${isOpen ?'open' : ""}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </p>  
      </button>
    
      <span className={`Collapse-content ${isOpen ? 'open' : ''}`}>{children}
      </span>
    </div>

  );
}
export default Collapse;
