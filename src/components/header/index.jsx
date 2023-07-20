// Librairies
import React from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './style.scss'


function Header() {
    return (
        <header className='header'>
            <Link to="/"><img src={logo} className='logo' alt='Logo Kasa' /></Link>
            <nav className='nav-bar'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Accueil</NavLink>
                <NavLink to="/a-propos" className={({ isActive }) => isActive ? "active" : undefined}>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header