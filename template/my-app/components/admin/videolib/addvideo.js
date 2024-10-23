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
    
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} alignItems="flex-start">
                {/* Profile Display */}
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
                          
                            alt="Profile Image"
                            sx={{ width: 220, height: 220, mb: 2, borderRadius: 5 }}
                        />



                    </Box>
                </Grid>


                {/* videolib Form */}
                <Grid item xs={12} md={6}>

                    <Grid item xs={12} md={12}>
                        {/* {success && (
                            <Alert severity="success" onClose={() => setSuccess(false)}>
                                <AlertTitle>Success</AlertTitle>
                                {success}
                            </Alert>
                        )} */}
                    </Grid>
                    <Grid item xs={12} md={12}>
                        {/* {error && (
                            <Alert severity="error" onClose={() => setError(null)}>
                                <AlertTitle>Error</AlertTitle>
                                {error}
                            </Alert>
                        )} */}
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
                      
                        
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Title"
                                        name="title"
                                        fullWidth
                                     
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        label="url"
                                        name="url"
                                        fullWidth
                                    
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <label htmlFor="image-upload">
                                        <Input
                                            accept="image/*"
                                            id="image-upload"
                                            type="file"

                                           
                                      
                                      
                                        />
                                        <Button variant="contained" component="span" fullWidth>
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
                                           // loading={loading}

                                            size={19}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"


                                        />

submit
{/* 
                                        {loading ? "" : "  Create video  lib"}
 */}


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

