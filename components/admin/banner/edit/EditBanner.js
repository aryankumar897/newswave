"use client"


import { useState, useEffect } from "react";

import {
    TextField,
    MenuItem,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    Typography,
    Alert,
    Grid,
} from '@mui/material';


import { useBanner } from '@/context/banner';
const BannerForm = ({ id }) => {

    const {

        image,
        setImage,
        title,
        setTitle,
        status,
        setStatus,
        left,
        setLeft,
        right,
        setRight,
        top,
        setTop,
        bottom,
        setBottom,
        alert,

        updateBanner,

        uploadImageToCloudinary,

        setAlert

    } = useBanner()



    const [imagePreviewUrl, setImagePreviewUrl] = useState('')


 useEffect(()=>{
     if(id){

         fetchData(id)
     }

 },[id])


    const fetchData = async (id) => {




        try {

            const response = await fetch(`${process.env.API}/admin/banneredit`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify(id)

            })



            const data = await response.json()

 console.log("data", data)
            if (data) {


                setImagePreviewUrl(data.imageUrl)
                setTitle(data.title)

                setStatus(data.status)
                setLeft(data.left)
                setRight(data.right)
                setTop(data.top)

                setBottom(data.bottom)
            } else {


                console.log("no banner data found in response")

            }


        } catch (error) {
            console.log('error fetchingbanner data', error)
        }





    }






    const handleImageChange = (e) => {

        const file = e.target.files[0]

        setImage(file)
        setImagePreviewUrl(URL.createObjectURL(file))



    }




    const handleSubmit = async (e) => {
        e.preventDefault()



        if (!title || !status || !left || !right || !top || !bottom) {

            setAlert({ type: 'error', message: "please fill in all fields" })


        }


        try {


            const imageUrl = image ? await uploadImageToCloudinary(image) : imagePreviewUrl

            const updatedBanner = {

                imageUrl: imageUrl, title, status, left, top, right, bottom



            }

            updateBanner(id, updatedBanner)

        } catch (error) {
            setAlert({ type: 'error', message: error })
        }





    }







    return (
        <Box component="form"

            onSubmit={handleSubmit}

            sx={{ width: '100%', maxWidth: '800px', margin: 'auto', marginTop: '50px' }}>
            <Typography variant="h4" component="h1" gutterBottom>Edit Banner</Typography>

            {alert && <Alert severity={alert.type}>{alert.message}</Alert>}
            <Grid item xs={12} sm={6}>
                {imagePreviewUrl && (
                    <Box m={3}>
                        <img src={imagePreviewUrl} alt="Preview" style={{ width: '100%', height: 'auto' }} />
                    </Box>
                )}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                        id="upload-image"
                    />
                    <label htmlFor="upload-image">
                        <Button
                            variant="contained"
                            component="span"
                            fullWidth
                            sx={{
                                ':hover': {
                                    backgroundColor: 'black',
                                    color: 'white',
                                },
                                backgroundColor: 'black', color: 'white', mt: 2
                            }}
                        >
                            Upload Image
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Left</InputLabel>
                        <Select
                            value={left}
                            onChange={(e) => setLeft(e.target.value)}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Right</InputLabel>
                        <Select
                            value={right}
                            onChange={(e) => setRight(e.target.value)}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Top</InputLabel>
                        <Select
                            value={top}
                            onChange={(e) => setTop(e.target.value)}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Bottom</InputLabel>
                        <Select
                            value={bottom}
                            onChange={(e) => setBottom(e.target.value)}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    ':hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                    backgroundColor: 'black', color: 'white', mt: 2
                }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default BannerForm;