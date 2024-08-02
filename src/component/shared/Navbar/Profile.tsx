'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link';
import { AuthContext } from '@/component/ContextProvider/Context';

const settings = [
    { pathName: 'Profile', route: '/profile' },
    { pathName: 'Account', route: '/account' },
    { pathName: 'Dashboard', route: '/dashboard' },
    { pathName: 'Logout', route: '/logout' },
];

export default function Profile() {
    const authContext = React.useContext(AuthContext)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        authContext?.createLogOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Open settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{
                            width: 30,
                            height: 30,

                        }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 33, height: 33 }} />

                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >


                <Link href='/profile'>
                    <MenuItem onClick={handleClose}>
                        View Profile
                    </MenuItem>
                </Link>


                <MenuItem onClick={handleClose}>
                    Stats
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Download history
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Account settings
                </MenuItem>
                <Divider />
                {
                    authContext?.user ?
                        <Link onClick={handleLogout} href="/signIn">
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Link>
                        :
                        <Link href="/signIn">
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Sign in
                            </MenuItem>
                        </Link>
                }

            </Menu>
        </React.Fragment>
    );
}