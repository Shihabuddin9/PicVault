import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import Link from 'next/link';

interface MenuItem {
    route: string;
    pathName: string;
}

interface MenuSectionProps {
    title: string;
    items: MenuItem[];
}

const menuItems = {
    company: [
        { route: "About", pathName: "/about" },
        { route: "History", pathName: "/history" },
        { route: "Join the team", pathName: "/joinTheTeam" },
        { route: "Blog", pathName: "/blog" },
        { route: "Press", pathName: "/press" },
        { route: "Contact us", pathName: "/contactUs" },
        { route: "Help Center", pathName: "/helpCenter" },
    ],
    product: [
        { route: "Developers/API", pathName: "/developersAPI" },
        { route: "Unsplash Data", pathName: "/unsplashDataset" },
        { route: "Unsplash for iOS", pathName: "/unsplashForIos" },
        { route: "Apps & Plugins", pathName: "/apps&plugins" },
        { route: "Unsplash Studio", pathName: "/unsplashStudio" },
    ],
    community: [
        { route: "Contributor", pathName: "/becomeAContributor" },
        { route: "Topics", pathName: "/topics" },
        { route: "Collections", pathName: "/collections" },
        { route: "Trends", pathName: "/trends" },
        { route: "Unsplash Awards", pathName: "/unsplashAwards" },
        { route: "Stats", pathName: "/stats" },
    ],
};

const buttonLinks = [
    { route: 'License', pathName: "/license" },
    { route: 'Privacy Policy', pathName: "/privacyPolicy" },
    { route: 'Terms', pathName: "/terms" },
    { route: 'Security', pathName: "/security" },
]

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
    return (
        <Grid item xs={4}>
            <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Box>
                {items.map((name, index) => (
                    <Link key={index} href="/privacyPolicy">
                        <Typography variant="body2" sx={{ marginY: '15px', display: 'block', color: '#898686', "&:hover": { color: 'black' }, }}>
                            {name.route}
                        </Typography>
                    </Link>
                ))}
            </Box>
        </Grid>
    );
}

export default function MenuBar() {
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
                <Tooltip title="View more links">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MenuIcon sx={{ width: 30, height: 30 }} />
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
                        width: 600,
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
                <Box sx={{
                    padding: 3,
                    '@media screen and (max-width: 425px)': {
                        padding: 1,
                    }
                }}>
                    <Box>
                        <Grid container spacing={{ md: 5 }}>
                            <MenuSection title="Company" items={menuItems.company} />
                            <MenuSection title="Product" items={menuItems.product} />
                            <MenuSection title="Community" items={menuItems.community} />
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', borderTop: '1px solid #dfdbdb', padding: 2 }}>

                    {
                        buttonLinks.map((link, index) => {
                            return (
                                <Link key={index} href="/privacyPolicy"> <Typography sx={{ color: '#898686', "&:hover": { color: 'black' }, mx: 2 }} variant='body2'>{link.route}</Typography></Link>
                            )
                        })
                    }
                </Box>
            </Menu>
        </React.Fragment>
    );
}
