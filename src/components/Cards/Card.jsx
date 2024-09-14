import React from "react";
import { Link } from "react-router-dom";
import "../Cards/_Card.scss"

function Card ({id, image, title}){

    return(
        <div className="card">
            <Link to={`logement/${id}`} className="card_link">
                <img src={image} alt= {title} className="card__image" />
                    <>
                        <h2 className="card__title">{title}</h2>
                    </>
            </Link>
        </div>
    );
}
export default Card;