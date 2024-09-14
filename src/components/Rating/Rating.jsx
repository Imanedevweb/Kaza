import React from "react";
import "../Rating/Ratings.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'; // Importez l'icône d'étoile pleine

function Rating ({rating}){
      const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <FontAwesomeIcon key={i} icon={fasStar} className="star filled" /> 
    ); // Étoile pleine
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={fasStar} className="star empty" />
    ); // Étoile vide
    }
}
 return <div className="rating">{stars}</div>;
};

export default Rating;