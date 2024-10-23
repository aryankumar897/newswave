"use client"

import React, { useState } from 'react';
import './style.css'; // Assume CSS styles are in this file

const ContactUs = () => {


  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Send us a message, and we’ll respond as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
         
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
       
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
   
            required
          />
        </div>
        <button type="submit">Send Message</button>


        {/* {status && <p className="status-message">{status}</p>} */}
      </form>
    </div>
  );
};

export default ContactUs;
