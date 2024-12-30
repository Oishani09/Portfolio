import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section id="Intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">OISHANI</span><br/>designer/developer</span>
            <p className="paraIntro">I'm a skilled designer and developer  dedicated to<br/> crafting captivating digital experiences.</p>
            <Link to="https://www.behance.net/oishanibanerjee"><button className="introBtn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;