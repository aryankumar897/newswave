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
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

export default function EditorProfile() {
  const [profile, setProfile] = useState({

    username: '',
    name: "",
    email: "",

    phone: "",
    password: "",

    image: null,


  })




  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)



  useEffect(() => {

    const fetchProfile = async () => {

      try {
        const response = await fetch(`${process.env.API}/editor/profile`)

        const data = await response.json()
        console.log("data", data)
        setProfile({
          username: data?.username,
          name: data?.name,
          email: data?.email,

          phone: data?.phone,


          image: data?.image,






        })


        setProfileImage(data?.image)

      } catch (error) {
        console.log(error)
      }


    }



    fetchProfile()

  }, [])





  const handleChange = (e) => {

    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }))

  }


  const handleImageChange = (e) => {

    if (e.target.files && e.target.files[0]) {

      setProfile((prevProfile) => ({ ...prevProfile, image: e.target.files[0] }))
      setProfileImage(URL.createObjectURL(e.target.files[0]))

    }

  }






  const handleSubmit = async (e) => {


    e.preventDefault()

    //upload image to  the Cloudinary


    const formData = new FormData()

    formData.append("file", profile.image)

    formData.append("upload_preset", "ml_default")



    try {

      const response = await fetch(

        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`,
        {


          method: "POST",

          body: formData
        }



      )


      if (!response.ok) {
        throw new Error("Failed to  upload image")
      }

      const imageData = await response.json()

      console.log("image", imageData)
      const imageUrl = imageData.secure_url


      const profileData = {

        username: profile.username,
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        password: profile.password,
        image: imageUrl,


      }

      console.log("profileData", profileData)
      const backendResponse = await fetch(

        `${process.env.API}/editor/profile`, {



        method: 'PUT',
        headers: {
          "Content-Type": "application/json"

        },
        body: JSON.stringify(profileData)

      }

      )


      const data = await backendResponse.json()

      if (!backendResponse.ok) {
        setError(data?.err)

      } else {

        setSuccess(data?.msg)

      }






    } catch (error) {
      console.log(error)




    }




  }



  return (
    <Container maxWidth="md">
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
              src={profileImage}
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
              <Alert severity="success"

                sx={{
                  mb: 2, width: "100%"
                }}

                onClose={() => setSuccess(false)}>
                <AlertTitle>Success</AlertTitle>
                {success}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            {error && (
              <Alert severity="error"

                sx={{
                  mb: 2, width: "100%"
                }}
                onClose={() => setError(null)}>
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
              onSubmit={handleSubmit}

            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Username"
                    name="username"
                    fullWidth
                    value={profile.username}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    value={profile.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth



                    value={profile.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    fullWidth
                    value={profile.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    name="password"
                    fullWidth

                    value={profile.password}
                    onChange={handleChange}


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



