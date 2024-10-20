"use client"

import { useState, useEffect } from "react"


import Category from  "@/components/category/Category"

import './style.css';




const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {

        const handleScroll = () => {


            const scrollTop = window.scrollY || document.documentElement.scrollTop
 

            setIsVisible(scrollTop > 0)


        }
        window.addEventListener("scroll", handleScroll)


        return () => {

            window.removeEventListener("scroll", handleScroll)

        }





    }, [])








    return (
        <nav
      className={`navbar ${isVisible ? 'visible' : ''}`}
        >


            {/* <ul>
                 <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li> 
          
              
           
            </ul> */}
            <Category/>
        </nav>
    );
};

export default Navbar;