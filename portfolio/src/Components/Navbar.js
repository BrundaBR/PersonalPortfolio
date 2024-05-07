import React from "react";
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="Navbar">
            <img className="logo" src="../logoWord.png" alt="" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>

            </div>
            <button className="desktopMenubtn">
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar;