"use client"

import React, { useState, useEffect } from 'react';





export default function Navbar() {

 const [isFixed,setIsFixed]=useState(false)


 const [currentYear,setCurrentYear]=useState("")


 useEffect(()=>{

const  handleScroll=()=>{

if(window.scrollY>100){
  setIsFixed(true)
}else{
  setIsFixed(false)
}

}




window.addEventListener("scroll",handleScroll)


 return ()=>{  
window.removeEventListener("scroll",handleScroll)


  }
 },[])







 useEffect(()=>{



 const  year=new Date().getFullYear().toString()
setCurrentYear(year)
 },[])


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

 const yearDigits=currentYear.split('').map((digit,index)=>{   


 let backgroundColor ;

 switch (digit) {
  case '0':
    backgroundColor="red";
    break;
 

   case '1':
     backgroundColor = "green";
     break;
   case '2':
     backgroundColor = "yellow";
     break;
   case '3':
     backgroundColor = "blue";
     break;

  default:

     backgroundColor = "red";
    break;
 }


 return (   
<span

 key={index}
style={{
color:"black",
backgroundColor,
padding:"2px 6px",
borderRadius:"3px",

marginRight:"2px"

 }}



  >  



{digit}
 </span>





  )



  })



  return (
    <nav style={navbarStyle}>
      <div style={navContentStyle}>

        <span><a href="#home" style={linkStyle}

        >
          {yearDigits}
        </a></span>



        <span><a href="/"
          style={linkStyle}

        >Home</a></span>



        <span><a href="/about"
          style={linkStyle}

        >About</a></span>
        <span><a href="/services"
          style={linkStyle}

        >Services</a></span>
        <span><a href="/contact"
          style={linkStyle}


        >Contact</a></span>

        <hr />

      </div>


    </nav>
  );
};
