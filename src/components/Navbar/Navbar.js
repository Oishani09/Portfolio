import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoo.jpeg';
import contactImg from '../../assets/contact.png';


import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        {/* Internal route */}
        <RouterLink className="listItems" to="/">Home</RouterLink>

        {/* Scroll functionality 
        <ScrollLink className="listItems" to="About" smooth={true} duration={500}>
          About 
        </ScrollLink>*/}
        <RouterLink className="listItems" to="/About">About</RouterLink>

        {/* External link */}
        <a 
          className="listItems" 
          href="https://docs.google.com/document/d/14pVa_l6bk1GDQBbWUjSgBn0rpoiTn_Mr6XlnH2bDj1M/edit?tab=t.0" 
          target="_blank" 
          rel="noopener noreferrer">
          Resume
        </a>

        {/* Placeholder for Clients */}
        <RouterLink className="listItems" to="/Clients">
        Clients
        </RouterLink>
      </div>
      <button className="navBtn">
        <img src={contactImg} alt="contact" className="btnImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
