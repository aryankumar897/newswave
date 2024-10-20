'use client';
import { DiscussionEmbed } from 'disqus-react';
import React, { useState, useEffect } from 'react';


import {
  Modal,
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  SnackbarContent,
  Drawer,
  TextField,
  Button,
  Divider,
  Stack
} from '@mui/material';


import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedditIcon from '@mui/icons-material/Reddit';
import CheckIcon from '@mui/icons-material/Check';
import ChatIcon from '@mui/icons-material/Chat';

import {
  EmailShareButton, FacebookShareButton, TwitterShareButton,
  TelegramShareButton, LinkedinShareButton, WhatsappShareButton,
  RedditShareButton
} from 'react-share';



const SocialShareModal = ({ news }) => {

  const [open, setOpen] = useState(false)

  const [currentUrl, setCurrentUrl] = useState("")

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)





  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href || "")


    }



  }, [])




  const handleCopyLink = () => {


    navigator.clipboard.writeText(currentUrl).then(() => {


      setSnackbarOpen(true)

    }).catch(() => {
      console.log("failed to  copy")

    })



  }


  const handleOpen = () => {

    setOpen(true)
  }


  const handleClose = () => {

    setOpen(false)
  }



  const socialIcons = [
    {

      icon: <LinkIcon />
      , label: "Copy link",
      onClick: handleCopyLink
    },

    {

      component: EmailShareButton,
      icon: <EmailIcon />,
      label: "Email"
    },

    {

      component: FacebookShareButton,
      icon: <FacebookIcon />,
      label: "Facebook"
    },

    {

      component: TwitterShareButton,
      icon: <TwitterIcon />,
      label: "X"
    },

    {

      component: TelegramShareButton,
      icon: <TelegramIcon />,
      label: "Telegram"
    },
    {

      component: LinkedinShareButton,
      icon: <LinkedInIcon />,
      label: "LinkedIn"
    },

    {

      component: WhatsappShareButton,
      icon: <WhatsAppIcon />,
      label: "Whatsapp"
    },


    {

      component: RedditShareButton,
      icon: <RedditIcon />,
      label: "Reddit"
    },


  ]

  const handleSnackbarClose = () => {

    setSnackbarOpen(false)

  }

  const handleDrawerOpen = () => {

    setDrawerOpen(true)
  }


  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }


  return (
    <div>
      <hr />
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <IconButton
          onClick={handleOpen}
          aria-label="Open social share options"
        >
          <ShareIcon />
        </IconButton>
        <IconButton
           onClick={handleDrawerOpen}
          aria-label="Open chat"
        >
          <ChatIcon />
        </IconButton>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" component="h2">
            Share options
          </Typography>
          <List>
            {socialIcons.map((social, index) => {
              if (social.label === 'Copy link') {
                return (
                  <ListItem button key={index} onClick={social.onClick}>
                    <ListItemIcon>{social.icon}</ListItemIcon>
                    <ListItemText primary={social.label} />
                  </ListItem>
                );
              } else {
                const ShareButtonComponent = social.component;
                return (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ShareButtonComponent url={currentUrl}>
                        {social.icon}
                      </ShareButtonComponent>
                    </ListItemIcon>
                    <ListItemText primary={social.label} />
                  </ListItem>
                );
              }
            })}
          </List>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <IconButton
            onClick={handleSnackbarClose}
            color="inherit">
            <CheckIcon />
          </IconButton>
        }
      >
        <SnackbarContent
          sx={{ bgcolor: 'success.main', color: 'white' }}
          message="Link copied to clipboard!"
        />
      </Snackbar>








            
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ width: 900 }}
      >
        <Box
          sx={{
            width: 900,
            padding: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#000', // Black text color
              fontWeight: 'bold', // Bold for emphasis
              textAlign: 'center', // Center the title
              mb: 2, // Margin-bottom for spacing
              letterSpacing: '0.1em', // Slightly more spacing for a modern feel
              textTransform: 'uppercase', // Uppercase for a modern look
              position: 'relative', // Position for the pseudo-element
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '80px', // Length of the underline
                height: '4px', // Thickness of the underline
                backgroundColor: '#ff4081', // Accent color for the underline
                bottom: '-10px', // Position it slightly below the text
                left: '50%',
                transform: 'translateX(-50%)', // Center it below the text
                borderRadius: '4px', // Rounded edges on the underline
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adds depth to the underline
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '10px', // Small decorative element on the left
                height: '4px',
                backgroundColor: '#000',
                bottom: '-10px',
                left: 'calc(50% - 50px)', // Position it left of the underline
                borderRadius: '4px',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '10px', // Small decorative element on the right
                height: '4px',
                backgroundColor: '#000',
                bottom: '-10px',
                right: 'calc(50% - 50px)', // Position it right of the underline
                borderRadius: '4px',
              },
            }}
          >
            Leave a Comment
          </Typography>

          <Divider sx={{ my: 2 }} />




          <Box
            sx={{

              p: 5,
              margin: '0 auto',


              transition: 'transform 0.3s ease', // Smooth transition for hover effect
              '&:hover': {
                transform: 'scale(1.02)', // Slight scaling on hover for interactivity
              },
              '& iframe': {
                borderRadius: '12px', // Consistent smooth corners on the iframe
                border: 'none', // Remove border for a clean look
              },
            }}
          >




            <DiscussionEmbed
              shortname='newswave-2'
              config={
                {
                  url: `${process.env.API}/news/${news?.slug}`,
                  identifier: news?._id,
                  title: news?.title,
                  language: 'en',
                }
              }
            />

          </Box>
        </Box>
      </Drawer>

    </div>
  );
};

export default SocialShareModal;