import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Typography } from '@mui/material';

const links = [
    { id: 1, route: 'Activity' },
    { id: 2, route: 'Highlights' }
]

export default function BadgeInfo() {
    const [currentRoute, setCurrentRoute] = React.useState('Activity');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Notification">
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
                        <NotificationsIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        border: '1px solid #d9d4d4',
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
                <Box sx={{ borderBottom: '1px solid #dfdbdb', pb: 1 }}>
                    {links.map((link) => (

                        <MenuItem
                            key={link.id}
                            sx={{ display: 'inline-block', mx: 5, bgcolor: currentRoute === link.route ? 'grey.300' : 'inherit' }}
                            onClick={() => {
                                setCurrentRoute(link.route);
                            }}
                        >
                            <Typography>{link.route}</Typography>
                        </MenuItem>
                    ))}
                </Box>
                <Box>
                    {currentRoute === 'Activity' ?
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: 7 }}>
                            <Typography textAlign={'center'} sx={{ width: '250px', color: '#958585' }} variant="body2">Activity associated with your account will appear here.</Typography>
                        </Box>
                        :

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: 7 }}>
                            <Typography textAlign={'center'} sx={{ width: '250px', color: '#958585' }} variant="body2">Important news, product updates, and milestones associated with your account will appear here.</Typography>
                        </Box>
                    }
                </Box>
            </Menu>
        </React.Fragment>
    );
}
