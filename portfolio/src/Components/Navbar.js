import React, { useState } from "react";
import './Navbar.css';
import {Link} from 'react-scroll';
import logoword from '../assests/logo_word.png'
import menu from '../assests/list.png'

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    return (
        <nav className="Navbar">
            <img className="logo" src={logoword} alt="" />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuListItem">Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50}  duration={500} className="desktopMenuListItem">About</Link>
                <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50}  duration={500}  className="desktopMenuListItem">Portfolio</Link>
                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50}  duration={500} className="desktopMenuListItem">Clients</Link>

            </div>
            <button className="desktopMenubtn" onClick={() => {
                const contactref =document.getElementById('contactPage');
                contactref.scrollIntoView({ behavior: "smooth" });

            }}>
                <img src='' alt=""/> Contact Me
            </button>


            <img  src={menu} alt="" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}} >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50}  duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50}  duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50}  duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Clients</Link>
            </div>
        </nav>
    )
}

export default Navbar;