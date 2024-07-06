import React from 'react';
import './Contact.css';
import Facebookicon from '../../assets/facebook-icon.png';
import instagramicon from '../../assets/instagram.png';
import youtubeicon from '../../assets/youtube.png';
//import behancelink from '../../assets/behance.png';
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
     <section className="Contact">
        <div className="ContactContent">
            <h1 className="contactPageTitle"><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Contact Me")
                        .pauseFor(10)
                        .deleteAll()
                        .typeString("Contact Me")
                        .start();
                }}
            /></h1>
            <span className="contactDesc">For project inquiries, consultations, or general questions, contact me via email at [oishanibanerjee09@gmail.com], or fill out the contact form below—looking forward to connecting!</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea name="message" className='msg' rows={6} placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="ContactBtn">Submit</button>
                <div className="link">
                    <img src={Facebookicon} alt="link1" className="link1" />
                    <img src={instagramicon} alt="link2" className="link2" />
                    <img src={youtubeicon} alt="link3" className="link3" />
                    
                </div>
            </form>
        </div>
     </section>
  );
}

export default Contact;