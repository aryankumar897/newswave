"use client"

import React, { useState, useEffect } from 'react';





export default function Navbar() {
 
  


  const navbarStyle = {
    position: isFixed ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px 0',
    boxShadow: isFixed ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease',
    zIndex: +10000,
  };

  const navContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };


 
  

  return (
    <nav style={navbarStyle}>
      <div style={navContentStyle}>

        <span><a href="#home" style={linkStyle}
      
         > 
       2024
           </a></span>



        <span><a href="#home"
         style={linkStyle}
     
           >Home</a></span>



        <span><a href="#about"
         style={linkStyle}
     
           >About</a></span>
        <span><a href="#services"
         style={linkStyle} 
 
         >Services</a></span>
        <span><a href="#contact" 
        style={linkStyle} 
    
        
        >Contact</a></span>

        <hr />

      </div>


    </nav>
  );
};
