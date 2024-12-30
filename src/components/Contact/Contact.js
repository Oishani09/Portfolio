import React, { useState } from 'react';
import './Contact.css';
import Facebookicon from '../../assets/facebook-icon.png';
import instagramicon from '../../assets/instagram.png';
import youtubeicon from '../../assets/youtube.png';
import Typewriter from "typewriter-effect";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // For feedback messages (success/error)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to backend
      const response = await axios.post('http://localhost:5000/submit-form', formData);

      // If successful, show success message
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });  // Reset form
      }
    } catch (error) {
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <section className="Contact">
      <div className="ContactContent">
        <h1 className="contactPageTitle">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Contact Me")
                .pauseFor(10)
                .deleteAll()
                .typeString("Contact Me")
                .start();
            }}
          />
        </h1>
        <span className="contactDesc">
          For project inquiries, or general questions, contact me via email at
          <strong> oishanibanerjee09@gmail.com</strong>, or fill out the contact form{' '}
          <span className="look">looking forward to connecting!</span>
        </span>

        {/* Display status message (success/error) */}
        {status && <p className="statusMessage">{status}</p>}

        {/* Form */}
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="msg"
            rows={6}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="ContactBtn">
            Submit
          </button>
          <div className="link">
            <img src={Facebookicon} alt="link1" className="link1" />
            <img src={instagramicon} alt="link2" className="link2" />
            <img src={youtubeicon} alt="link3" className="link3" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
