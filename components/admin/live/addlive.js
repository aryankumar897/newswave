"use client"
import React, { useState, useEffect } from 'react';
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

export default function LiveTV() {

    const [liveTV, setLiveTV] = useState({
        name: "",
        image: null

    })


    const [liveTVImage, setLiveTVImage] = useState('')



    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

useEffect(()=>{


    fetchLiveTV()

},[])



  const fetchLiveTV=async()=>{




try{


 const response=await fetch(`${process.env.API}/admin/live`)

   const data=await  response.json()

 if(!response.ok){

    setError(data?.err)
 }
   
 
 console.log("data",data)


  setLiveTV({
      name: data?.videourl,
      image: data?.image


  })
    setLiveTVImage(data?.image)

}catch(err){

 console.log(err)


}




  }









    const handleChange = (e) => {


        const { name, value } = e.target

        setLiveTV((prev) => ({ ...prev, [name]: value }))




    }

    const handleImageChange = (e) => {


        if (e.target.files && e.target.files[0]) {

            setLiveTV((prev) => ({ ...prev, image: e.target.files[0] }))

            setLiveTVImage(URL.createObjectURL(e.target.files[0]))
        }


    }



    const handleSubmit = async (e) => {

        e.preventDefault()



        const formData = new FormData(e.target.files)

        formData.append('file', liveTV.image)

        formData.append('upload_preset', 'ml_default')
        try {



            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {

                method: 'POST',

                body: formData


            })



            if (!response.ok) {
                throw new Error("failed to upload image")

            }






            const imageData = await response.json()

            const imageUrl = imageData.secure_url


            const liveTBData = {

                videourl: liveTV.name,
                image: imageUrl 


            }





            const backendResponse = await fetch(`${process.env.API}/admin/live`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(liveTBData)
            })


            const data = await backendResponse.json()

            if (!backendResponse.ok) {
                setError(data.err)
            }

            setSuccess(data?.msg)

            setError(null)

        } catch (error) {
            console.log(error)
            setError(error.message)
            setSuccess(false)




        }



    }






    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} alignItems="flex-start">
                {/* livetb Display */}
                <Grid item xs={12} md={6}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt={10}
                        mb={10}
                        sx={{
                            // Transparent border
                            borderRadius: 4,
                            p: 2,
                            // Shadow effect
                        }}
                    >
                        <Avatar
                            src={liveTVImage}
                            alt="Profile Image"
                            sx={{ width: 220, height: 220, mb: 2 }}
                        />



                    </Box>
                </Grid>


                {/* livetb  Form */}
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
                            Create  LiveTV
                        </Typography>




                        <form
                            onSubmit={handleSubmit}

                        >
                            <Grid container spacing={3}>

                                <Grid item xs={12} >
                                    <TextField
                                        label="url"
                                        name="name"
                                        fullWidth

                                        value={liveTV.name}
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
                                        <Button
                                            sx={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'black', // Change the background color on hover
                                                },

                                            }}

                                            variant="contained" component="span"
                                            fullWidth>
                                            Upload Live   Image
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
                                        Create Live TV
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

