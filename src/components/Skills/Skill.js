import React from 'react';
import './Skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import Typewriter from "typewriter-effect";

const Skill = () => {
  return (
    <section id="Skill">
        <span className="AboutMeTitle"><Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString("About Me")
                        .pauseFor(10)
                        .deleteAll()
                        .typeString("About Me")
                        .start();
                }}
            /></span>
        <span className="description">I'm a passionate UI/UX freelance designer dedicated to creating intuitive user experiences with wireframing, prototyping and user research. Frontend developer creating responsive and interactive websites using React.js for optimal user engagement.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Designer(freelancer)</h2>
                    <p>crafting engaging and user-centric digital experiences through wireframing, prototyping and user research</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={UIDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend Developer</h2>
                    <p>proficient in creating responsive and visually appealing web solutions using Html, CSS, JavaScript and React.js</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skill;