"use client"

import BeatLoader from "react-spinners/BeatLoader";
import React, { useState } from 'react';
import {



    Alert,
    AlertTitle,


    TextField,
    Button,
    Typography,
    Box,
    Container,
    Grid,
    Avatar,

} from '@mui/material';

import { styled } from '@mui/material/styles';




const Input = styled('input')({
    display: 'none',
});

export default function Videolib() {
    const [videolib, setVideolib] = useState({
        title: "",
        url: "",
        image: null
    })

    const [videolibImage, setVideolibImage] = useState('')

    const [error, setError] = useState(null)

    const [success, setSuccess] = useState(false)

    const [loading, setLoading] = useState(false)




    const handleChange = (e) => {

        const { name, value } = e.target


        setVideolib((prev) => ({ ...prev, [name]: value }))
    }



    const handleImageChange = (e) => {

        if (e.target.files && e.target.files[0]) {



            setVideolib((prev) => ({ ...prev, image: e.target.files[0] }))

            setVideolibImage(URL.createObjectURL(e.target.files[0]))


        }







    }



    const handleSubmit = async (e) => {

        e.preventDefault()


        const formData = new FormData()

        formData.append('file', videolib.image)
        formData.append('upload_preset', 'ml_default')

        try {


            //upload image to the cloudinary

            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {


                method: "POST",
                body: formData




            })

            if (!response.ok) {

                throw new Error('Failed to upload image')
            }

            const imageData = await response.json()

            const imageUrl = imageData.secure_url

            console.log(imageUrl)

            const videolibData = {



                title: videolib.title,
                url: videolib.url,
                image: imageUrl

            }

 console.log("videolibdata",videolibData)
            setLoading(true)
            const backendResponse = await fetch(`${process.env.API}/admin/videolib`, {




                method: 'POST',


                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(videolibData)

            })
            const data = await backendResponse.json()


            setLoading(false)

            setSuccess(data?.msg)
            setError(null)

            console.log("video lib created successfully")


        } catch (error) {
            console.log('error creating video lib')




            setLoading(false)
            setError(error.message)
            setSuccess(false)
        }



    }




    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} alignItems="flex-start">
                {/* videolib Display  preview */}
                <Grid item xs={12} md={6}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt={10}
                        mb={10}
                        sx={{

                            borderRadius: 4,
                            p: 2,

                        }}
                    >
                        <Avatar
                            src={videolibImage}
                            alt="Profile Image"
                            sx={{ width: 220, height: 220, mb: 2, borderRadius: 5 }}
                        />



                    </Box>
                </Grid>


                {/* videolib Form */}
                <Grid item xs={12} md={6}>

                    <Grid item xs={12} md={12}>
                        {success && (
                            <Alert severity="success" onClose={() => setSuccess(false)}>
                                <AlertTitle>Success</AlertTitle>
                                {success}
                            </Alert>
                        )}
                    </Grid>
                    <Grid item xs={12} md={12}>
                        {error && (
                            <Alert severity="error" onClose={() => setError(null)}>
                                <AlertTitle>Error</AlertTitle>
                                {error}
                            </Alert>
                        )}
                    </Grid>



                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"

                        mt={4}
                        mb={10}
                    >
                        <Typography variant="h4" component="h1" gutterBottom>
                            Create video lib
                        </Typography>




                        <form
                            onSubmit={handleSubmit}

                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Title"
                                        name="title"
                                        fullWidth

                                        value={videolib.title}
                                        onChange={handleChange}



                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        label="url"
                                        name="url"
                                        fullWidth

                                        value={videolib.url}

                                        onChange={handleChange}

                                        required
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <label htmlFor="image-upload">
                                        <Input
                                            accept="image/*"
                                            id="image-upload"
                                            type="file"

                                            onChange={handleImageChange}


                                        />
                                        <Button variant="contained"
                                            component="span"
                                            sx={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'black', // Change the background color on hover
                                                },

                                            }}


                                            fullWidth>
                                            Upload Image
                                        </Button>
                                    </label>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: 'black', // Change the background color on hover
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



                                        {loading ? "" : "  Create video  lib"}



                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

