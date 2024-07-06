import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoo.jpeg'
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="menu">
            <Link className="listItems">Home</Link>
            <Link className="listItems">About</Link>
            <Link className="listItems">Portfolio</Link>
            <Link className="listItems">Clients</Link>
        </div>
        <button className="navBtn">
            <img src={contactImg} alt="contact" className="btnImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar