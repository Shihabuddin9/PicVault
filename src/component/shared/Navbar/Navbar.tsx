"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchOption from './SearchOption';
import Link from 'next/link';
import MenuBar from './MenuBar';
import BadgeInfo from './BadgeInfo';
import Profile from './Profile';
import { Button } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', padding: 0 }}>
            <Container maxWidth="xl" sx={{ backgroundColor: 'white', paddingX: '15px !important' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 !important' }}>
                    {/* Site Name */}
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 0,
                                display: { md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                                '@media screen and (max-width: 425px)': {
                                    letterSpacing: '.0rem',
                                }
                            }}
                        >
                            PicVault
                        </Typography>

                        {/* for search */}
                        <SearchOption />
                    </Box>

                    {/* Get PicVault+ */}
                    <Box sx={{
                        display: 'flex', justifyContent: 'around', alignItems: 'center', '@media screen and (max-width: 425px)': {
                            display: 'none', // Applies display none for screen widths up to 425px
                        }
                    }}>
                        <Typography sx={{ color: 'black', mr: 2, fontSize: '0.9rem', display: { xs: 'none', md: 'block', lg: 'block' } }}>
                            <Link href="/picVault">Get PicVault+</Link>
                        </Typography>

                        {/* Submit An Image and private route */}
                        <Link href='/submitAnImage'>
                            <Button sx={{
                                textTransform: 'none',
                                color: 'gray',
                                borderColor: 'gray',
                                "&:hover": { color: 'darkgray', borderColor: 'darkgray' }
                            }} variant="outlined" size="small">
                                Submit an image
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>

                        {/* Badge Info */}
                        <Box sx={{
                            display: 'block', // Default display for all sizes
                            '@media screen and (max-width: 425px)': {
                                display: 'none', // Applies display none for screen widths up to 425px
                            }
                        }}>
                            <BadgeInfo />
                        </Box>

                        {/* profile */}
                        <Box sx={{
                            flexGrow: 0, mx: {
                                xs: 1, md: 3, lg: 3,
                                '@media screen and (max-width: 425px)': {
                                    display: 'none',
                                }
                            }
                        }}>
                            <Profile />
                        </Box>

                        {/* Menu bar */}
                        <MenuBar />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
