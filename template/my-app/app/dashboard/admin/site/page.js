"use client"

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Avatar, IconButton } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Facebook, YouTube, Twitter } from '@mui/icons-material';


const SiteSettings = () => {

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Site Settings</Typography>
      <Box component="form" 
      
    //  onSubmit={handleSubmit}
      
      >
        {/* Logo Upload */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h6">Upload Logo</Typography>
          <IconButton component="label">
            <CloudUploadIcon fontSize="large" />
            <input hidden type="file"
           //  onChange={handleLogoChange}
             
              accept="image/*" />
          </IconButton>
          {logoPreview && (
            <Box sx={{ mt: 2 }}>
              <Avatar src={logoPreview} alt="logo preview" sx={{ width: 100, height: 100 }} />
            </Box>
          )}
        </Box>

        {/* Facebook URL */}
        <TextField
          fullWidth
          label="Facebook URL"
     
          InputProps={{
            startAdornment: <Facebook />,
          }}
          sx={{ mb: 3 }}
        />

        {/* YouTube URL */}
        <TextField
          fullWidth
          label="YouTube URL"
       
          InputProps={{
            startAdornment: <YouTube />,
          }}
          sx={{ mb: 3 }}
        />

        {/* Twitter URL */}
        <TextField
          fullWidth
          label="Twitter URL"
        
          InputProps={{
            startAdornment: <Twitter />,
          }}
          sx={{ mb: 3 }}
        />

        {/* Submit Button */}
        <Button type="submit"

          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'black', // Change the background color on hover
            },

          }}

          variant="contained" fullWidth>Save Settings</Button>
      </Box>
    </Box>
  );
};

export default SiteSettings;
