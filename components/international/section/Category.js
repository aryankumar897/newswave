import React from 'react';

 import Sections from "./Section"

import Top from "./Top"
import TopThree from "./TopThree"
import Well from "./Well"



export default async function Category(

  {
    news,
    banner,
    technews,
    worldNews,
    educationNews,

  }



) {





  return (
    <>


      <div
        className="ads-section"
        style={{
          width: '100%',
          textAlign: 'center', // Center the text and image horizontally
          padding: '10px',     // Optional: Add padding for better spacing
          backgroundColor: '#f9f9f9', // Optional: Add a light background color
          position: 'relative',  // Make the div a containing block for absolute positioning
          overflow: 'hidden'     // Ensure content doesn't overflow
        }}
      >
        <hr />
        <h5
          style={{
            margin: '10px 0',    // Add some vertical spacing
            color: 'blue',       // Change the text color to blue
            fontWeight: 'bold',  // Optional: Make the text bold
            fontSize: '22px'     // Optional: Adjust the font size
          }}
        >
          Advertisement
        </h5>

        <div style={{ position: 'relative' }}>
          <img
            src={banner[2]?.imageUrl}
            className="img-fluid"
            alt="Advertisement"
            style={{
              width: '100%',      // Ensure the image takes the full width of the container
              height: '100%',     // Maintain the aspect ratio by setting height to auto
              objectFit: 'contain', // Contain the image within its container without distortion
            }}
          />
          {/* <h3
            style={{
              position: 'absolute', // Position the text over the image
              top: '50%',           // Center the text vertically
              left: '50%',          // Center the text horizontally
              transform: 'translate(-50%, -50%)', // Adjust the position to be perfectly centered
              color: 'white',       // Change the text color to white for contrast
              fontWeight: 'bold',   // Make the text bold
              fontSize: '24px',     // Adjust the font size as needed
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: Add a shadow for better readability
              padding: '10px',      // Optional: Add padding for better spacing
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background
              borderRadius: '5px'   // Optional: Add rounded corners to the text background
            }}
          >
            ADS BY GOOGLE<br />
           { banner[2].title}
          </h3> */}
        </div>
      </div>

      <Top
        news={news}
      />

      <TopThree
        news={news}
      />



      <Well
        news={technews}
        title="Technology"


      />

      <Well
        news={worldNews}
        title="World News"


      />

      <Well
        news={educationNews}
        title="Education"

      />


<Sections  

news={news}
banner={banner}

 />




    </>


  )


}