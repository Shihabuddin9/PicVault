"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchOption from './SearchOption';
import Link from 'next/link';
import { Button } from '@mui/material';
import MenuBar from './MenuBar';
import BadgeInfo from './BadgeInfo';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ boxShadow: 'none', padding: 0 }}>
            <Container maxWidth="xl" sx={{ backgroundColor: 'white', paddingX: '15px !important' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 !important' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 0,
                                display: { md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            PicVault
                        </Typography>

                        {/* for search */}
                        <SearchOption />
                    </Box>

                    <Box sx={{
                        display: 'flex', justifyContent: 'around', alignItems: 'center', '@media screen and (max-width: 425px)': {
                            display: 'none', // Applies display none for screen widths up to 960px
                        }
                    }}>
                        <Typography sx={{ color: 'black', mr: 2, fontSize: '0.9rem', display: { xs: 'none', md: 'block', lg: 'block' } }}>
                            <Link href="#">Get PicVault+</Link>
                        </Typography>

                        <Button sx={{ textTransform: 'none' }} variant="outlined" size="small">
                            Submit an image
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>

                        <Box sx={{
                            display: 'block', // Default display for all sizes
                            '@media screen and (max-width: 425px)': {
                                display: 'none', // Applies display none for screen widths up to 960px
                            }
                        }}>
                            <BadgeInfo />
                        </Box>


                        <Box sx={{ flexGrow: 0, mx: { xs: 1, md: 3, lg: 3 } }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
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
