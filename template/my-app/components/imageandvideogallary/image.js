

import React, { useState, useEffect } from 'react';

import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

import Modal from 'react-responsive-modal';

const ImageSlider = () => {
   

    const customStyles = {
        modal: {
            maxWidth: '100%',
            width: 'auto',
            padding: 0,
            zIndex: 9999,
        },
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        },
        image: {
            maxHeight: '80vh', // Adjust height as needed
            maxWidth: '80vw', // Adjust width as needed
            objectFit: 'contain',
            borderRadius: '8px',
        },
    };


    
    return (
        <>
          <h1>helloe</h1>
        </>
    );
};

export default ImageSlider;