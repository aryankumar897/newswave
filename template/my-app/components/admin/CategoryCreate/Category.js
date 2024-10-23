"use client";

import React from 'react';
import { useState } from "react";

import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const CategoryForm = () => {
   

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Create Category
            </Typography>
            <TextField
                label="Category Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderColor: 'black',
                    ':hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                }}
            >
                Submit
            </Button>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default CategoryForm;