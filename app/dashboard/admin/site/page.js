"use client"

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Avatar, IconButton } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Facebook, YouTube, Twitter } from '@mui/icons-material';


const SiteSettings = () => {



  const [logo, setLogo] = useState(null)

  const [facebookUrl, setFacebookUrl] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")

  const [twitterUrl, setTwitterUrl] = useState("")

  const [logoPreview, setLogoPreview] = useState(null)

  const [logoUrl, setLogoUrl] = useState(null)


  const handleLogoChange = async (e) => {

    const file = e.target.files[0]

    setLogo(file)
    setLogoPreview(URL.createObjectURL(file))



    const formData = new FormData()


    formData.append('file', file)
    formData.append('upload_preset', 'ml_default')


    try {

      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`, {



        method: 'POST',


        body: formData

      })



      const result = await response.json()



      if (!result) {
        alert("it take some time to upload")

      }

      console.log(result.secure_url)
      setLogoUrl(result.secure_url)

    } catch (error) {
      console.log("error uploading image to  cloudinary", error)
    }





  }



  const handleSubmit = async (e) => {
    e.preventDefault()


    try {





      const response = await fetch(`${process.env.API}/admin/site`, {


        method: 'POST',

        headers: {

          'Content-Type': 'application/json'

        },



        body: JSON.stringify({


          logo: logoUrl,
          facebookUrl,
          youtubeUrl,
          twitterUrl,
        })


      })


      if (response.ok) {

        alert('site settings updated successfully')
      } else {

        const errorData = await response.json()

        console.log(' error  updating site settings')

        alert("error updating site settings")
      }


    } catch (error) {


      console.log("fetch error", error)


      alert('error  updating site settings')
    }







  }






   useEffect(()=>{






 const  fetchSettings=async()=>{

 try{

 const  response=await fetch(`${process.env.API}/admin/site`)
 const  data= await response.json()
 console.log(data)
 const {logo,facebookUrl,youtubeUrl,twitterUrl}=data
   setLogoPreview(logo)
 setLogoUrl(logo)
 setFacebookUrl(facebookUrl)
setYoutubeUrl(youtubeUrl)
setTwitterUrl(twitterUrl)

 }catch(error){

 console.log("Fetching settings error",error)

 }


 }
     fetchSettings()
   },[])




  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Site Settings</Typography>
      <Box component="form"

        onSubmit={handleSubmit}

      >
        {/* Logo Upload */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h6">Upload Logo</Typography>
          <IconButton component="label">
            <CloudUploadIcon fontSize="large" />
            <input hidden type="file"
              onChange={handleLogoChange}

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
          value={facebookUrl}
          onChange={(e) => setFacebookUrl(e.target.value)}
          InputProps={{
            startAdornment: <Facebook />,
          }}
          sx={{ mb: 3 }}
        />

        {/* YouTube URL */}
        <TextField
          fullWidth
          label="YouTube URL"
          value={youtubeUrl}

          onChange={(e) => setYoutubeUrl(e.target.value)}

          InputProps={{
            startAdornment: <YouTube />,
          }}
          sx={{ mb: 3 }}
        />

        {/* Twitter URL */}
        <TextField
          fullWidth
          label="Twitter URL"
          value={twitterUrl}
          onChange={(e) => setTwitterUrl(e.target.value)}
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
