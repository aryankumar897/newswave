
// components/Navbar.js
"use client"
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import './style.css';
import { GiCrossMark } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowRightSLine } from 'react-icons/ri'; // Import icons from React Icons
import { useRouter } from 'next/navigation';

export default function Navbar() {











    return (
        <nav className="navbars">
            <div className="container">
                <div className="row">


                    <div className="col ">
                        <p className="toggleBtn pl-1"
                      //   onClick={toggleMenu}
                         >
                            <FiMenu size="34" color="black" />
                        </p>
                    </div>
                    <div className="col "  >
                        <h1
                            className="mr-5"

                            style={{
                                fontFamily: '"Satisfy", cursive',
                                fontWeight: 180,

                                fontVariantCaps: 'petite-caps',

                                fontSize: '30px',

                                color: '#000',
                                letterSpacing: '0px',

                                marginLeft: '-30px',
                                marginBottom: '-30px', // Add margin-bottom
                                //  padding: '10px', // Add padding

                            }}>
                            NewsWaves

                        </h1>
                    </div>

                    <div className="col">
                        <a className="btn "><FaUser size="34" /></a>
                    </div>
                </div>
            </div>



            <div className={`menu ${isOpen ? 'open' : ''}`}>

                <button className="toggleBtn  p-3 "
             //    onClick={toggleMenu}



                >
                    <GiCrossMark size="35" color="black" />
                </button>

                <div className="category-list ">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item">
                            <div
                              //  onClick={() => handleToggleCategory(category.name)}
                                className="category-name mx-3"
                            >
                            
                            </div>



                         
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};


