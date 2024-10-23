"use client"

// components/ChangePasswordForm.js
import React, { useState } from 'react';
import { TextField, Button, Alert, Container, Box } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
const ChangePasswordForm = () => {
   

    return (

        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            <Box sx={{ width: '100%', padding: '2rem', boxShadow: 9, borderRadius: 1 }}>

                {alert.message && (
                    <Alert severity={alert.type} sx={{ mb: 2 }}>
                        {alert.message}
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Old Password"
                        type="password"
                       
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="New Password"
                        type="password"
                       
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"

                     
                        fullWidth
                        margin="normal"
                        required
                    />

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

                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"


                        />

                        {loading ? "" : "change password"}


                    </Button>
                </form>


            </Box>
        </Container>

    );
};

export default ChangePasswordForm;
