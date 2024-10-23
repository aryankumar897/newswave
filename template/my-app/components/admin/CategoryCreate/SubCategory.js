"use client"
import React, { useState, useEffect } from 'react';

import { FormControl, InputLabel, MenuItem, Select, TextField, Button, Box, Typography, Snackbar } from '@mui/material';

import { Alert } from '@mui/material';


export default function SubcategoryForm() {
   
    return (
        <Box component="form" 
      
         sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}
         >
            <Typography variant="h6" gutterBottom>
                Create Subcategory
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="category-select-label">Select Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    id="category-select"
                   
                    label="Select Category"
                >
                    {/* {categories.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                            {category.name}
                        </MenuItem>
                    ))} */}
                </Select>
            </FormControl>
            <TextField
                label="Subcategory Name"
                variant="outlined"
                fullWidth
                required
                
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
                        backgroundColor: 'primary',
                        color: 'white',
                    },
                }}
            >
                Submit
            </Button>
            {/* <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar> */}
        </Box>
    );
};