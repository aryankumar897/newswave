

import { Description } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';



const ImageSlider = () => {

    const [images, setImages] = useState([])



    useEffect(() => {

        const fetchImage = async () => {


            try {
                const response = await fetch(`${process.env.API}/imagelib`)

                const data = await response.json()

            

                const galleryImages = data.map((image) => ({


                    original: image.url,



                    thumbnail: image.url,
                    description: "News Wave"

                }))






                setImages(galleryImages)
            } catch (error) {
                console.log("errrrrrrrrrrrr", error)


            }




        }
        fetchImage()

    }, [])










    return (
        <>
            {

                images.length > 0 ? (
                    <>
                        <ImageGallery

                            items={images}


                        />



                    </>
                ) : (

<> 
                            <img
                                src="https://placehold.co/1200x900?text=ImageGallary"
                                className="img-fluid"
                                alt="banner"

                            />


 </>


                )


            }
        </>
    );
};

export default ImageSlider;