import React from "react";
import './contact.css';

const Contact = () =>{
    return(
        <section id="contactPage">
            <div className="contact">
            <span className="contactPageTitle">Contact</span>

                <div className="contactPageDesc">
                    Reach out below

                </div>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="text" className="email" placeholder="Your Email"/>
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"/>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src="" alt="" className="link"/>
                    <img src="" alt="" className="link"/>
                    <img src="" alt="" className="link"/>
                    <img src="" alt="" className="link"/>
                </div>
                </form>
                
            </div>
            
        </section>
    )
}
export default Contact;