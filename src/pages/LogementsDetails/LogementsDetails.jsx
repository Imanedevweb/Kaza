import React from "react";
import { Navigate, useParams } from "react-router-dom"
import logementData from '../../Datas/LogementData.json'
import'../LogementsDetails/LogementsDetails.scss'
import Carrousel from "../../components/Carrousel/Carrousel";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

function LogementDetail(){
 const {id} = useParams() // Je récupére l'ID du logement à partir des paramètres
 console.log("ID récupéré de l'URL:", id)
 const logement = logementData.find((logement) =>logement.id === id) // Trouver le logement correspondant

if (!logement){
    return <Navigate to="/error" />
}
return(
    <div className="logementDetail">
      
        <Carrousel images={logement.pictures} />
        
        <div className="logementInfo">
            <div className="title-location"> 
                <h1 className="logement_title">{logement.title}</h1>
                <p className="logement_location">{logement.location}</p>
            </div>    
        </div>    
        <div className="logement_Tag-Rating">
            <Tags tags={logement.tags} />
            <div className="rating-host-container">
                <Rating rating={logement.rating} />
                <Host logement={logement}/>
            </div>    
        </div>  
    <div className="description-equipement"> 
          <Collapse title="Description">
            <p>{logement.description}</p>
        </Collapse>  
        <Collapse title="Equipement">
            <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
    </div>    
</div>
  
)}

export default LogementDetail;
