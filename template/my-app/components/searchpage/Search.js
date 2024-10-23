import { useState, useEffect } from 'react';
import Result from "./Reasult"



const SearchComponent = () => {
  
  return (
    <div >
      {/* Search Input */}

      <div style={styles.container} >
        <input
          type="text"
        
        
       
        
          placeholder="Search news..."
          style={styles.input}
        />


        <button
      
       
       
          style={styles.button} // Inline style for the search button
        >
          Search
        </button>

      </div>



      <div>
        <h3
          style={styles.heading}

        >
        
        </h3>


        <ul>

        
        </ul>
      </div>
    </div>
  );
};




const styles = {
  container: {
    display: 'flex', // Flexbox for centering
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    height: '10vh', // Full viewport height
    backgroundColor: '#f0f4f8', // Light background color for a modern look
  },
  input: {
    width: '900px', // Fixed width for input
    padding: '15px', // More padding for a modern feel
    border: '2px solid black', // Blue border for a sleek look
    // borderRadius: '30px', // Highly rounded corners for a stylish look
    fontSize: '18px', // Larger font size for better readability
    outline: 'none', // Remove default outline
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.2)', // Soft shadow for a floating effect
    transition: 'box-shadow 0.3s ease', // Smooth shadow transition on focus
  },
  heading: {
    fontSize: '24px', // Large font size for modern look
    fontWeight: '600', // Slightly bold
    color: '#333', // Dark grey for elegance
    margin: '20px',


    // Space between input and heading
    letterSpacing: '1px', // Add spacing for modern style
    textTransform: 'uppercase', // All caps for modern appeal
  },
  button: {
    padding: '16px 28px', // Padding for the button
    backgroundColor: 'black',
    color: '#fff', // White text for contrast
    border: 'none', // Remove default border
    border: '2px solid black',
    cursor: 'pointer', // Pointer cursor for interactivity
    fontSize: '16px', // Font size to match the input
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.2)', // Soft shadow for a modern look
    transition: 'background-color 0.3s ease', // Smooth background transition on hover
  },
};


export default SearchComponent;
