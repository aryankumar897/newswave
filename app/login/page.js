

"use client"
import React, { useState } from "react"
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Alert,
    AlertTitle

} from '@mui/material'

import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import BeatLoader from "react-spinners/BeatLoader";

import { useRouter } from 'next/navigation'
import { useSession, signIn } from "next-auth/react"


export default function RegisterPage() {
    const router = useRouter()
 const  {data}=useSession()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false)




    const handleSubmit = async (e) => {

        e.preventDefault();

       

        //simulate form validation


      

        if (email === "" || password === "") {
            setError("please  fill all  required field")

            return
        }


        try {


            setLoading(true)


            const response = await signIn("credentials", {

                redirect: false,
                email, password



            })







 console.log(response)
            if (response?.error) {
                setError(response?.error)
                setLoading(false)
            } else {

                setSuccess("Login Successful")
                setEmail("")
                setPassword("")

                setShowPassword(false)

                setLoading(false)

//if(!data) return

              router.push(`/dashboard/${data?.user?.role}`)
            }



        } catch (error) {
            console.log(error)
            setError("an ERROR occurced during registration process")
        }







    }

    const handleCloseError = () => {
        setError("")
    }

    const handleCloseSuccess = () => {

        setSuccess('')
    }




    return (
        <Box
            display="flex"
            flexDirection="column"

            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
            mb={5}

        >

            <Container maxWidth="md">
                <Box p={8}

                    boxShadow={8}
                    bgcolor="rgba(0, 0, 60, 0.02)" borderRadius={1}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Login
                    </Typography>



                    {error && (

                        <Alert severity="error" onClose={handleCloseError} sx={{
                            mb: 2, width: "100%"
                        }} >

                            <AlertTitle>Error</AlertTitle>
                            {error}
                        </Alert>


                    )}





                    {success && (

                        <Alert severity="success" onClose={handleCloseSuccess} sx={{
                            mb: 2, width: "100%"
                        }} >

                            <AlertTitle>Success</AlertTitle>
                            {success}
                        </Alert>


                    )}
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>





                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Grid>









                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    name="password"
                                    fullWidth

                                    type={showPassword ? "text" : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required


                                    InputProps={{


                                        endAdornment: (

                                            <InputAdornment postion="end"   >

                                                <IconButton


                                                    edge="end"
                                                    onClick={() => setShowPassword((prev) => !prev)}

                                                >

                                                    {showPassword ? <VisibilityOff /> : <Visibility />}

                                                </IconButton>


                                            </InputAdornment>



                                        )


                                    }}






                                />
                            </Grid>



                            <Grid item xs={12}  >
                                <Button

                                    type="submit"


                                    variant="contained"
                                    fullWidth


                                    sx={{

                                        backgroundColor: "black",
                                        color: "white",
                                        '&:hover': {


                                            backgroundColor: "black",

                                        }






                                    }}

                                >


                                    <BeatLoader
                                        color="white"
                                        loading={loading}

                                        size={15}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />


                                    {loading ? "" : "submit"}

                                </Button>




                            </Grid>



                        </Grid>
                    </form>



                </Box>
            </Container>


        </Box>
    );
}
