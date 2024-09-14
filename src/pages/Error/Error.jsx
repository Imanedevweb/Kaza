import React from "react";
import { Link } from "react-router-dom";
import "../Error/Error.scss";


function Error (){

    return (
        <div className="ErrorPage" >
            <h1 className="title_404">404</h1>
            <p className=" MsgError">Oups! La page que vous demandez n'existe pas</p>
            <Link to ="/" className="text">Retourner sur la page d’accueil</Link>
        
        </div>       
    );

}
export default Error;