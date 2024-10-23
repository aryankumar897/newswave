
import { Box, Button, IconButton, Typography } from '@mui/material';

const MultipleImageUpload = () => {
  

 

  
    return (
        <Box
            component="form"
      
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 24 }}
        >
            <Box mb={12} display="flex" 
            flexWrap="wrap" justifyContent="center"
            >
                
{/*                 
                {images.map((image, index) => (
                    <Box key={index} position="relative" m={1}>

                        <img
                          //  src={image.url}
                          //  alt={`Image ${index}`}
                            width={120}
                            height={120}
                            style={{
                                margin: '0 10px',
                                objectFit: 'cover'
                            }}
                        />


                        <Box display="flex" justifyContent="center">
                            <IconButton
                                aria-label="delete"

                             
                               
                               
                                sx={{
                                    color: 'red',
                                }}
                            >
                                ⛌
                            </IconButton>
                        </Box>
                    </Box>
                ))} */}



            </Box>

            {/* {error && <Typography color="error">{error}</Typography>} */}

            <Box mb={12} display="flex" flexWrap="wrap" justifyContent="center">
              
              
                {/* {previewUrls.map((preview, index) => (
                    <Box key={index} position="relative" m={1}>
                        <img src={preview.uri} alt={`Preview ${index}`} width={100} style={{ margin: '0 10px' }} />
                    </Box>
                ))} */}
           
           
           
            </Box>

            <Button
                fullWidth
                variant="contained"
                component="label"
                startIcon={<UploadIcon />}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                }}
            >
                Upload Images
                <input type="file" multiple hidden 
             


                />
            </Button>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    mt: 2,
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                }}
            >
                <BeatLoader

                    color="white"
                   

                    size={19}
                    aria-label="Loading Spinner"
                    data-testid="loader"


                />
submit
                {/* {loading ? "" : "  Image bulk uploader"} */}

            </Button>
        </Box>
    );
};

export default MultipleImageUpload;