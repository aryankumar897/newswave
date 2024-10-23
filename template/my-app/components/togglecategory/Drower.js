"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import './style.css'; // Import the CSS file
import { VscTriangleLeft } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";


import { useRouter } from 'next/navigation';
export default function Home() {
  



  return (
    <div>

      <div className="hanger-menu  p-2" 
     // onClick={toggleDrawer}
      >
        <AiOutlineMenu size={24} />
      </div>
      <div
      
     //  className={`drawer ${isDrawerOpen ? 'open' : ''}`}
       
       >

        <div className="hanger-menu  p-2  "
       //  onClick={toggleDrawer}
         
         >
          <IoCloseSharp size={24} />
        </div>


      
      </div>
    </div>
  );
}
