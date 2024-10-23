"use client";

import { useState, useEffect } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ReactPlayer from 'react-player';

const CardContainer = styled(Box)({
    display: 'flex',
    width: '100%',
    height: '100px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
});

const LeftSide = styled(Box)({
    position: 'relative',
    width: '50%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const RightSide = styled(Box)({
    width: '50%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
});

const AnimatedIcon = styled(PlayCircleOutlineIcon)(({ theme }) => ({
    fontSize: '80px',
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 2s infinite',
    cursor: 'pointer',
    '@keyframes pulse': {
        '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
        },
        '50%': {
            transform: 'translate(-50%, -50%) scale(1.1)',
        },
        '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
        },
    },
}));



// const CustomModal = ({ open, onClose, videoUrl }) => {
//     if (!open) return null;

//     return (
//         <Box sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//         }}>
//             <Box sx={{
//                 position: 'relative',
//                 width: '80%',
//                 height: '80%',
//                 bgcolor: 'background.paper',
//                 boxShadow: 24,
//                 p: 4,
//             }}>
//                 <IconButton sx={{ position: 'absolute', top: -8, right: -8, color: "red" }} onClick={onClose}>
//                     <CloseIcon fontSize="large" />
//                 </IconButton>
//                 <ReactPlayer
//                     url={videoUrl}
//                     playing
//                     controls
//                     width="100%"
//                     height="100%"

//                 />
//             </Box>
//         </Box>
//     );
// };

export default function Home() {
   

    const dummyData = [
        {
            title: 'Sample Video Title 1',
            postedDate: 'July 3, 2024',
            backgroundImageUrl: '/image/t.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=OebBDuui1O0',
        },
        {
            title: 'Sample Video Title 2',
            postedDate: 'July 4, 2024',
            backgroundImageUrl: '/image/t.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=OebBDuui1O0',
        },
        {
            title: 'Sample Video Title 3',
            postedDate: 'July 5, 2024',
            backgroundImageUrl: '/image/t.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=OebBDuui1O0',
        },
        {
            title: 'Sample Video Title 4',
            postedDate: 'July 6, 2024',
            backgroundImageUrl: '/image/t.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=IV-MKtSOZNY',
        },
        {
            title: 'Sample Video Title 5',
            postedDate: 'July 7, 2024',
            backgroundImageUrl: '/image/t.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=IV-MKtSOZNY',
        },
    ];

  


    return (
        <Container sx={{ width: '100%', padding: 0, margin: 0 }}>
          







            <CustomModal 
        
             
              />
        
        
        </Container>
    );
}