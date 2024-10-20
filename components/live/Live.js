"use client"

import React, { useState, useEffect } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { styled, keyframes } from '@mui/system';
import ReactPlayer from 'react-player';

const BackgroundImage = styled(Box)(({ imageUrl }) => ({
    position: 'relative',
    width: '100%',
    height: '400px', // Adjust the height as needed
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const pulse = keyframes`
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.1);
  }
`;

const VideoIconButton = styled(IconButton)({
    color: 'white',
    fontSize: '4rem', // Adjust the icon size as needed
    animation: `${pulse} 2s infinite`, // Apply the keyframes animation
    transition: 'transform 0.3s',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
    padding: '20px', // Add padding to make the icon larger and more clickable
    borderRadius: '50%', // Make the background a circle
    '&:hover': {
        transform: 'scale(1.2)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Change background on hover
    },
});

const YouTubeModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "32px",
});

const CloseButton = styled(IconButton)({
    position: 'absolute',
    top: '2px',
    right: '5px',
    color: 'red', // Set the color to black
});

const VideoPlayer = () => {
    const [open, setOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const response = await fetch(`${process.env.API}/livetv`);
                const data = await response.json();
                setImageUrl(data.image);
                setVideoUrl(data.videourl);
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };

        fetchUrls();
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <BackgroundImage imageUrl={imageUrl}>
                <VideoIconButton onClick={handleOpen}>
                    <PlayCircleOutlineIcon fontSize="inherit" />
                </VideoIconButton>
            </BackgroundImage>
            <YouTubeModal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '80%',
                        height: '80%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <CloseButton onClick={handleClose}>
                        <CloseIcon fontSize="large" />
                    </CloseButton>
                    {videoUrl && (
                        <ReactPlayer
                            url={videoUrl}
                            controls
                            playing
                            width="100%"
                            height="100%"
                        />
                    )}
                </Box>
            </YouTubeModal>
        </>
    );
};

export default VideoPlayer;