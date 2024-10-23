"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import "./style.css"
import { FiChevronRight } from 'react-icons/fi';
import { useSession, signOut } from "next-auth/react"
import { LuLogOut } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

import { useRouter } from 'next/navigation'



export default function Account() {

  return (
    <>



        <div className="account-container">
          <button className="account-btn"
          // onClick={toggleDrawer}
           >
            Account <i 
           // className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}
            
            ></i>
            <FiChevronRight className="arrow"

            />


          </button>
          <div
          // className={`account-drawer ${isOpen ? 'open' : ''}`}
           
           >
            <div className="drawer-content">
              <p>data?.user?.email</p>
              <hr />
              <h3 className="m-3  p-3" > data?.user?.role!</h3>
              <p style={{ fontSize: '20px' }}>
                The email you logged in with isn’t associated with a News subscription and has limited access to articles.
              </p>

              <div style={{ fontSize: '20px', cursor: 'pointer', textAlign: 'center', backgroundColor: 'black', color: 'white', padding: '10px', margin: '10px' }}>


                <Link href="/subscription"
                  passHref
                  style={{ textDecoration: 'none' }}>
                  <span style={{ fontSize: '20px', color: 'white' }}>
                    Subscribe for more access
                  </span>
                </Link>

              </div>


              <div className="btn-list   btnx">


             




                <div className="btn-item" style={{
                  cursor: 'pointer',
                  fontSize: '20px', textDecoration: 'none '

                }}



                >Saved Articles          <FiChevronRight className="arrow"

                  /></div>

                <hr />
                <div className="btn-item" style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none ' }} >Get Help           <FiChevronRight className="arrow"

                /></div>
                <hr />
                <div className="btn-item"
                  onClick={handleSignOutAndRedirect}

                  style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none ' }} >Logout

                  <LuLogOut />

                </div>
              </div>
            </div>
            <button className="close-btn"
          //   onClick={toggleDrawer}
             
             >
              <IoCloseSharp size={30} />
            </button>


          </div>
        </div>

    

    </>

  );
};


