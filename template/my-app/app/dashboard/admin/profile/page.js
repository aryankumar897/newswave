"use client"
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
    IconButton,
    InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});

export default function ProfileCreationPage() {
  




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
                            border: '1px solid rgba(0, 0, 0, 0.1)',  // Transparent border
                            borderRadius: 4,
                            p: 2,
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Shadow effect
                        }}
                    >
                        <Avatar
                         //   src={profileImage}
                            alt="Profile Image"
                            sx={{ width: 120, height: 120, mb: 2 }}
                        />
                        <Typography variant="h6" gutterBottom>
                            {profile.name || 'Name'}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Username: {profile.username || 'Username'}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Email: {profile.email || 'Email'}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Phone: {profile.phone || 'Phone'}
                        </Typography>
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
                            Create Profile
                        </Typography>




                        <form 
         
                        
                        
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        fullWidth
                                    
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Name"
                                        name="name"
                                        fullWidth
                                
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        fullWidth
                                   
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Phone"
                                        name="phone"
                                        fullWidth
                                   
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                      //  type={showPassword ? 'text' : 'password'}
                                        label="Password"
                                        name="password"
                                        fullWidth
                                     
                                        required
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword((prev) => !prev)}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
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

                                            variant="contained" component="span" fullWidth>
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
                                        Create Profile
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


