
"use client"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useCategory } from '@/context/category';
import { useSubCategory } from '@/context/subcategory';

import React, { useEffect } from 'react';
import {
  TextField, Button, MenuItem, FormControl,
  InputLabel, Select, Box, Grid,
  Snackbar,
  Alert
} from '@mui/material';
import { useNewsPost } from '@/context/newspost';

export default function FormComponent() {
  const {
    title, setTitle,
    subtitle, setSubtitle,
    imagecaption, setImagecaption,
    description, setDescription,
    categoryId, setCategoryId,
    subcategoryId, setSubcategoryId,
    topRight, setTopRight,
    slider, setSlider,
    breakingNews, setBreakingNews,
    analysis, setAnalysis,
    live, setLive,
    status, setStatus,
    podcast, setPodCast,
    newsLatter, setNewsLatter,
    imagePreview,
    notification, handleClose,
    handleImageChange,
    handleSubmit,

  } = useNewsPost();



  const { categories, fetchCategories } = useCategory();

  const { subcategories, fetchSubCategories } = useSubCategory();


  useEffect(() => {
    fetchCategories();
    fetchSubCategories()
  }, []);






  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, maxWidth: 800, mx: 'auto', mt: 5 }}>
      <Grid item md={12} sx={{ m: 2 }}>
        {imagePreview && (
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
        )}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Subtitle"
            variant="outlined"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Image Caption"
            variant="outlined"
            value={imagecaption}
            onChange={(e) => setImagecaption(e.target.value)}
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <textarea
            rows="5"  // Set the minimum number of rows
            cols="50"  // Set the number of columns (width)
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',  // Ensure the textarea takes the full width of the container
              height: '200px',  // Set a fixed height
              backgroundColor: 'white',
              outline: 'none',
              border: '1px solid #ccc',  // Add a border if desired
              padding: '10px',  // Add padding for better spacing
              resize: 'none',   // Disable resizing
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Add box shadow for visual appeal
              borderRadius: '4px',  // Add border radius for rounded corners
              fontSize: '23px',  // Set the font size
              color: '#333'  // Set the text color
            }}
          />


        </Grid>
        <Grid item xs={12} sm={6}>



          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="category-select-label">Select Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              label="Select Category"
            >
              {categories.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>





        </Grid>
        <Grid item xs={12} sm={6}>





          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="category-select-label">Select  sub Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={subcategoryId}
              onChange={(e) => setSubcategoryId(e.target.value)}
              label="Select subCategory"
            >
              {subcategories.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>



        </Grid>
        <Grid item xs={12} sm={6}>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            fullWidth
            sx={{
              backgroundColor: "black"

            }}
          >
            Upload file
            <input
              hidden

              type="file" accept="image/*" onChange={handleImageChange} />


          </Button>




        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Top Right</InputLabel>
            <Select
              value={topRight}
              onChange={(e) => setTopRight(e.target.value)}
              label="Top Right"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Slider</InputLabel>
            <Select
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
              label="Slider"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Breaking News</InputLabel>
            <Select
              value={breakingNews}
              onChange={(e) => setBreakingNews(e.target.value)}
              label="Breaking News"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Analysis</InputLabel>
            <Select
              value={analysis}
              onChange={(e) => setAnalysis(e.target.value)}
              label="Analysis"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Live</InputLabel>
            <Select
              value={live}
              onChange={(e) => setLive(e.target.value)}
              label="Live"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Podcast</InputLabel>
            <Select
              value={podcast}
              onChange={(e) => setPodCast(e.target.value)}
              label="Podcast"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Newsletter</InputLabel>
            <Select
              value={newsLatter}
              onChange={(e) => setNewsLatter(e.target.value)}
              label="Newsletter"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}





