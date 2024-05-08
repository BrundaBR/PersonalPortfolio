import React from "react";
import './works.css'
import bw from '../../assests/logo.png';

const Works = () =>{
    return (
        <section id="works">
            <span className="worksTitle">My portfolio</span>
            <span className="worksDesc">I am a skilled</span>
            <div className="worksImgs">
                <img src={bw} alt="" className="worksImg" />
                <img src={bw} alt="" className="worksImg" />
                <img src={bw} alt="" className="worksImg" />
                <img src={bw} alt="" className="worksImg" />
                <img src={bw} alt="" className="worksImg" />
                <img src={bw} alt="" className="worksImg" />

            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}
export default Works;