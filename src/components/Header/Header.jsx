import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../../assets/images/LOGO.png';
import './_Header.scss';

function Header(){
    return (
        <div className="Header">
            <img className="Header_logo" src={logo} alt="logo de Kasa"/>
            <nav className="nav_header">
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            className={({isActive}) => (isActive? 'active' : '')}> Accueil</NavLink>
                    </li>
                
                    <li> 
                        <NavLink 
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : '')}> A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>    
    );
}

export default Header;