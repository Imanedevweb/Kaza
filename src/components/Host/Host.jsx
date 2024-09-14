import React from "react";
import "../Host/Host.scss";

function Host({ logement }) {
    if (!logement) {
        return null; // Gestion du cas où logement est undefined
    }
// Séparation du prénom et du nom de logement.host.name
    const [firstName, lastName] = logement.host.name.split(" ");
   
    return (
        <div className="logementHost">
            <img
                src={logement.host.picture}
                alt="propriétére"
                className="host-photo"
            />
            <p className="Host-Name">
                <span className="logement_host-name">{firstName}</span>
                <span className="logement_host-name">{lastName}</span>
            </p>
        </div>
    );
}

export default Host;