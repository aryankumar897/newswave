// components/Search.js
"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./style.css"


export default function Search() {
 

    return (
        <div className="search-container">


            <div      >
                <FaSearch className="search-icon" />

            </div>
            <div
             //className={showInputs ? 'input-container active' : 'input-container'}
             
             >
                <input
                    type="text"
                    placeholder="Search..."
                 
                />
                <button
                
         
                
                >Go</button>
            </div>
        </div>
    );
};

