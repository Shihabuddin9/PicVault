"use client";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Divider } from '@mui/material';
import { AuthContext } from '@/component/ContextProvider/Context';
import { toast } from 'react-toastify';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Register() {
    const authContext = React.useContext(AuthContext)
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        const email = data.get('email') as string;
        const password = data.get('password') as string;

        if (authContext && authContext.createUser) {
            authContext.createUser(email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    toast('successfully account create')
                    console.log('Redirecting to:', redirect); // Debugging line
                    router.push(redirect); // Redirect to the original location
                    // Reset the form
                    form.reset();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.error('Registration error:', error); // Better error handling
                    console.log(errorCode);
                    // setErrorEmail(errorCode)
                });
        }
    };

    return (

        <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginY: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Do you agree our terms & condition?"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signIn" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                {/* easy sign up */}
                <Box sx={{ mt: 3 }}>
                    <Divider sx={{ mb: 3 }}>Or with Google and facebook</Divider>
                    <Button sx={{ mr: 1 }} variant="outlined" startIcon={<GoogleIcon />}>
                        Google
                    </Button>
                    <Button variant="outlined" startIcon={<FacebookRoundedIcon />}>
                        Facebook
                    </Button>
                </Box>
            </Box>
        </Container>

    );
}