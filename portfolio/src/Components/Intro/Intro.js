import React from "react";
import './Intro.css';
import {Link} from 'react-scroll';
import profile from '../../assests/profile.png';
const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Brunda Revadi</span> <br /> Web Developer</span>
                <p className="introPara">Skilled in Python</p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={profile} alt="" className="profile"/>
        </section>
    )
}
export default Intro;