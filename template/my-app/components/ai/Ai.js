"use client";
import React, { useState } from "react";

import { Button, Box, Modal, TextField, CircularProgress, Typography } from '@mui/material';

// Modal inline styles with increased height and width, and scrollable content
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // Increased width
  height: '80%', // Increased height
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', // Make modal content scrollable
};

export default function Page() {
 
  return (
    <div className="container mt-5">
      {/* Form for user input */}
      <form
     //  onSubmit={handleClick}
       >
        <div className="mb-3">
          <TextField
            fullWidth
            label="Write something"
            variant="outlined"
          
          />
        </div>
        <Button
          type="submit"
          variant="contained"

          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'black',
            ':hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
       //   disabled={loading} // Disable button while loading
       //   startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null} // Add loader icon to button
        >
          {/* {loading ? 'Loading...' : 'Generate with AI'} */}

          loading
        </Button>
      </form>

      {/* AI Response Modal */}
      <Modal
      //  open={open}
      //  onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            AI Response
          </Typography>
          <Box id="modal-description" sx={{ mt: 2 }}>
            {/* {loading ? (
              <CircularProgress /> // Display a loading spinner if the response is still being generated
            ) : (
              <ReactMarkdown>{response}</ReactMarkdown> // Display the markdown response in the modal
            )} */}
          </Box>
          <Button
          //  onClick={copyToClipboard}
            variant="contained"
            color="primary"
            sx={{ mt: 2, mr: 2 }} // Margin to separate from close button
          >
            Copy to Clipboard
          </Button>
          <Button
          //  onClick={handleClose}
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}