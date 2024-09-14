import React from "react";
import LogoFooter from "../../assets/images/LOGOFooter.png"
import '../../components/Footer/_Footer.scss'

function Footer (){
console.log("Footer rendu")
    return (
        <footer>   
            <img src={LogoFooter} alt="Logo de Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        
    )
}

export default Footer;