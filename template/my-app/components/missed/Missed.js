"use client"


import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



const Home = () => {




    return (
        <div>


            <h1 style={{
                color: 'white', // Set text color
                textAlign: 'center', // Center align text
                fontSize: '2rem', // Adjust font size
                position: 'relative', // For positioning underline
                margin: '20px 0' // Optional: add some margin around the title
            }}>

                <span style={{
                    color: 'red', // Change color for "Missed News"
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginLeft: '10px', // Add some space between "News" and "Missed News"
                    position: 'relative' // For positioning the underline
                }}>
                    Missed News
                    <span style={{
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: '2px', // Thickness of underline
                        backgroundColor: 'red', // Color of underline
                        position: 'absolute',
                        bottom: '-5px', // Position the underline below the text
                        left: '0',
                    }}></span>
                </span>
            </h1>

            <h>Missed news</h>
        </div>
    );
};

export default Home;