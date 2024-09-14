import React from "react";
import Logement from "../../Datas/LogementData.json";
import Card from "../Cards/Card";
import "../Gallery/_Gallery.scss"

function Gallery() {
    return (
        <div className="gallery_home">
            {Logement.map((logement) => (
                <Card
                key={logement.id}
                id={logement.id}
                image={logement.cover}
                title={logement.title}
            />
                
            ))}
        </div>
    );
}

export default Gallery;

