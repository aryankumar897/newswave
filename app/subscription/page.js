'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import {  toast } from 'react-toastify';
import { useEffect, useState } from "react"

import { useSession } from 'next-auth/react';

import { useRouter } from 'next/navigation'
const images = [
  '/image/news1.jpg',
  '/image/news2.jpg',
  '/image/news3.jpg',

  '/image/news5.jpg',
  '/image/news6.jpg',
  '/image/news7.jpg',
  '/image/news8.jpg',
  '/image/news9.jpg',


]




export default function Subscription() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { data } = useSession()

  const router = useRouter()


  const handleStripe = async () => {
    if (!data) {

      return router.push("/login")

    }






    try {

      const response = await fetch(`${process.env.API}/user/subscription`, {




        method: 'POST',
      })




      const data = await response.json()


      if (!response.ok) {
        toast.error(data.err)

      } else {

        window.location.href = data.id

      }



    } catch (error) {
      console.log(error)


    }


  }






  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)

    }, 1000)

    return () => clearInterval(interval)




  }, [])


  return (
    <Container maxWidth="xxl">
      <Grid container spacing={1} >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', // Optional: Center align text if needed
            height: '100vh', // Optional: Adjust the height if needed
          }}
        >
          <Typography variant="h3" gutterBottom>
            Gain unlimited access to<br /> all of The NewsWave.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ padding: "20px" }}>
            WELCOME OFFER
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h4" color="textSecondary" sx={{ textDecoration: 'line-through', marginRight: '8px' }}>
              ₹2500
            </Typography>
            <Typography variant="h4" gutterBottom>
              ₹600/year
            </Typography>
          </Box>
          <Typography variant="h6" gutterBottom>
            Billed once for your first year.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleStripe()}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              '&:hover': { backgroundColor: 'black' },
              marginTop: '16px', // Add margin to the button
              padding: '15px 30px', // Increase padding
              fontSize: '18px', // Increase font size
            }}
          >
            Subscribe now
          </Button>

          <Typography
            variant="body2"
            sx={{ marginTop: '16px' }} // Add margin to the button
            color="textSecondary"
            gutterBottom
          >
            Cancel or pause anytime.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            All Access includes news, plus Games, Cooking, Audio, Wirecutter and The Athletic.
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary">
            Offer for a New York Times All Access subscription; <br />
            current subscribers not eligible. Subscription excludes<br />
            print edition. Some games may be available without a <br />
            subscription. Your payment method will automatically<br />
            be charged in advance the introductory rate of ₹600.00 once<br />
            for the first year, and the standard rate of ₹2500.00 once <br />
            yearly thereafter. Your subscription will continue until <br />
            you cancel. Cancellation takes effect at the end of your <br />
            current billing period.
            Taxes may apply. Offer terms are subject to change.<br />
          </Typography>
          <hr />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}
          >


            <Image
              src={images[currentImageIndex]}
              alt="image"

              layout='fill'
              objectFit='contain'
            />




          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
