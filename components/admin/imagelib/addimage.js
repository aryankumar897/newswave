"use client"


import { useState, useEffect } from "react"
import Resizer from "react-image-file-resizer";

import { Box, Button, IconButton, Typography } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BeatLoader from "react-spinners/BeatLoader";




const MultipleImageUpload = () => {
    const [images, setImages] = useState([])
    const [previewUrls, setPreviewUrls] = useState([])

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files)
        console.log("files", files)
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp']

        files.forEach((file) => {
            if (validImageTypes.includes(file.type)) {
                Resizer.imageFileResizer(

                    file,
                    300,
                    300,
                    'JPEG',
                    100,
                    0,

                    (uri) => {
                        setPreviewUrls((prev) => [...prev, { uri, file }])
                    },
                    'base64'
                )

            } else {
                setError(' file is not a valid image')
            }
        })





    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true)

        const base64Images = previewUrls.map((item) => item.uri)


        try {

            const response = await fetch(`${process.env.API}/admin/imagelib`, {
                method: 'POST',

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({ images: base64Images })



            })


            if (response.ok) {



                const data = await response.json();



                setImages((prev) => [...prev, ...data])


                setPreviewUrls([])


                setLoading(false)

            }






        } catch (error) {
            console.log(error)


            setLoading(false)


        }





    }




    useEffect(() => {


        const fetchImages = async () => {


            try {

                const response = await fetch(`${process.env.API}/admin/imagelib`)

                if (response.ok) {


                    const data = await response.json()

                    console.log("data", data)

                    setImages(data)

                } else {


                    console.log("failed to fetch images", response.statusText)

                }



            } catch (error) {
                console.log("failed to fetch IMAGES", error)
            }


        }


        fetchImages()

    }, [])







    const handleDelete = async (public_id) => {

        try {

            const response = await fetch(`${process.env.API}/admin/imagelib`, {

                method: "DELETE",


                headers: {
                    'Content-Type': 'application/json'

                },

                body: JSON.stringify({ public_id })



            })




            if (response.ok) {

                setImages(images.filter((image) => image.public_id !== public_id))

            } else {


                console.log("failed to  delete image", response.statusText)
            }




        } catch (error) {
            console.log("error", error)
        }




    }




    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 24 }}
        >
            <Box mb={12} display="flex"
                flexWrap="wrap" justifyContent="center"
            >


                {images.map((image, index) => (
                    <Box key={index} position="relative" m={1}>

                        <img
                            src={image.url}
                            alt={`Image ${index}`}
                            width={120}
                            height={120}
                            style={{
                                margin: '0 10px',
                                objectFit: 'cover'
                            }}
                        />


                        <Box display="flex" justifyContent="center">
                            <IconButton
                                aria-label="delete"

                                onClick={() => handleDelete(image.public_id)}


                                sx={{
                                    color: 'red',
                                }}
                            >
                                ⛌
                            </IconButton>
                        </Box>
                    </Box>
                ))}



            </Box>

            {error && <Typography color="error">{error}</Typography>}

            <Box mb={12} display="flex" flexWrap="wrap" justifyContent="center">


                {previewUrls.map((preview, index) => (
                    <Box key={index} position="relative" m={1}>
                        <img src={preview.uri} alt={`Preview ${index}`} width={100} style={{ margin: '0 10px' }} />
                    </Box>
                ))}



            </Box>

            <Button
                fullWidth
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                }}
            >
                Upload Images
                <input type="file" multiple hidden

                    onChange={handleImageChange}

                />
            </Button>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    mt: 2,
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                }}
            >
                <BeatLoader

                    color="white"

                    loading={loading}
                    size={19}
                    aria-label="Loading Spinner"
                    data-testid="loader"


                />

                {loading ? "" : "  Image bulk uploader"}

            </Button>
        </Box>
    );
};

export default MultipleImageUpload;