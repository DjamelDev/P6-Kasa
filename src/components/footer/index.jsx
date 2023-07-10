// Librairies
import React from "react";
import logo from '../../assets/images/logo-footer.png';
import './style.scss';

function Footer() {
    return (
       <footer className="footer">
            <img src={logo} alt="logo Kasa" className="logo-footer"/>
            <p className='footer-legal'>© 2020 Kasa. All rights reserved</p>
       </footer> 
    )
};

export default Footer;