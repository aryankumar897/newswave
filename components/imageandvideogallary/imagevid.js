'use client';

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Divider, Box } from '@mui/material';
import Video from "@/components/imageandvideogallary/videog"

import Image from "@/components/imageandvideogallary/image"



export default function MoreNews() {
    return (
        <>

            <Divider sx={{ border: '1px solid black', my: 1, }} />
            <Typography variant="h5" sx={{ m: 1 }}>
                Image and Video Gallery
            </Typography>



            <Grid container spacing={5}  >
                {/* Left side */}
                <Grid item lg={8} >
                    <Box >
  <Video/>
                        <Video />
                        {/* <Image/> */}

                    </Box>
                </Grid>

                {/* Right side */}
                <Grid item lg={4}>
                    <Card sx={{ border: 'none' }}>
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            Video Gallery
                        </Typography>
                        <CardContent>

                            <Video/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    );
}