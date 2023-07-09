import React from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


function Header() {
    return (
        <header className='header'>
        <Link to="/"><img src={logo} className='logo' alt='Logo Kasa' /></Link>
        <nav className='nav-bar'>
            <NavLink to="/" >Accueil</NavLink>
            <NavLink to="/a-propos">A propos</NavLink>
        </nav>
    </header>
    )
}

export default Header