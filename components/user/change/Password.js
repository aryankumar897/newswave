"use client"

// components/ChangePasswordForm.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Alert, Container, Box } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
const ChangePasswordForm = () => {




  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")


  const [alert, setAlert] = useState({ type: "", message: "" })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ oldPassword, newPassword })
    if (newPassword !== confirmPassword) {


      setAlert({ type: "error", message: "new password do not match" })
    }




    try {

      setLoading(true)
      const response = await fetch(`${process.env.API}/user/change/password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ oldPassword, newPassword })




      })


      const data = await response.json();

      if (response.ok) {

        setLoading(false);
        setAlert({ type: "success", message: "password changed successfully" })
        setOldPassword("")
        setNewPassword("")
        setConfirmPassword("")

      } else {

        setLoading(false);
        setAlert({ type: "error", message: data?.err })



      }

    } catch (error) {
      console.log(error)
      setAlert({ type: "error", message: "something went wrong" })
    }






  }


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
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Change Password
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Old Password"
            type="password"

            value={oldPassword}

            onChange={(e) => setOldPassword(e.target.value)}

            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="New Password"
            type="password"

            value={newPassword}

            onChange={(e) => setNewPassword(e.target.value)}


            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Confirm Password"
            type="password"

            value={confirmPassword}

            onChange={(e) => setConfirmPassword(e.target.value)}


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

