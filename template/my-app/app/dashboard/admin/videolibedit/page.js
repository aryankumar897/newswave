"use client"
"use client"
import { useRouter } from 'next/navigation';
import BeatLoader from "react-spinners/BeatLoader";
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
    IconButton,
    InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});

export default function updatevideolib({ searchParams }) {
  


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
                            // Transparent border
                            borderRadius: 4,
                            p: 2,
                            // Shadow effect
                        }}
                    >
                        <Avatar
                            src={profileImage}
                            alt="Profile Image"
                            sx={{ width: 220, height: 220, mb: 2, borderRadius: 5 }}
                        />



                    </Box>
                </Grid>


                {/* Profile Form */}
                <Grid item xs={12} md={6}>

                    <Grid item xs={12} md={12}>
                        {success && (
                            <Alert severity="success" onClose={() => setSuccess(false)}>
                                <AlertTitle>Success</AlertTitle>
                                Profile created successfully!
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
                        // border={1}
                        // borderRadius={4}
                        // p={4}
                        mt={4}
                        mb={10}
                    >
                        <Typography variant="h4" component="h1" gutterBottom>
                            Create video lib
                        </Typography>




                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Title"
                                        name="title"
                                        fullWidth
                                        value={profile.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        label="url"
                                        name="url"
                                        fullWidth
                                        value={profile.url}
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
                                            loading={loading}

                                            size={19}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"


                                        />

                                        {loading ? "" : " update video  lib"}



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

