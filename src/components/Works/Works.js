import React,{Component} from 'react';
import './Works.css';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

const Works = (props) => {
  return (
    <section id="Works">
        <h2 className="WorkTitle"><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Portfolio")
                        .pauseFor(10)
                        .deleteAll()
                        .typeString("Portfolio")
                        .start();
                }}
            /></h2>
        
        <h2 className="heading">DESIGNS</h2>
        <h5 className="subHead">Webflow, Figma, Adobe Illustrator, Photoshop & Canva</h5>
        <div className="WorkImgs">
            <div className="WorkImg"><img src={image1} alt="image1" className="WorkImg" /></div>
            <div className="WorkImg"><img src={image2} alt="image2" className="WorkImg" /></div>
            <div className="WorkImg"><img src={image3} alt="image3" className="WorkImg" /></div>
            <div className="WorkImg"><img src={image4} alt="image3" className="WorkImg" /></div>
        </div>
        <button className="seeMore"><Link to="https://www.behance.net/oishanibanerjee">See More Designs</Link></button>
        <h2 className="heading2">TECH PROJECTS</h2>
        <h5 className="subHead">reactjs, threejs, javascript, html/css, mongoDB</h5>
        <div className="container">
           <button className='gitBtn'><Link to="https://github.com/Oishani09">Github link</Link></button>
        <h5 className="subhead3">Refer to my Github to view all the projects.</h5> </div>
    </section>   
  );
}

export default Works;