'use client';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

type IdProps = {
    _id: string
    title: string
}
export default function CustomizedMenus({ _id, title }: IdProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [imageUrl, setImageUrl] = React.useState<string>('');
    const open = Boolean(anchorEl);

    React.useEffect(() => {
        // Fetch the image URL from the backend
        const fetchImageUrl = async () => {
            try {
                const response = await fetch(`https://photo-server-lilac.vercel.app/TotalPhoto/${_id}`);
                const data = await response.json();
                setImageUrl(data.img); // Adjust if the URL is in a different field
                console.log(data);
            } catch (error) {
                console.error('Failed to fetch image URL:', error);
            }
        };

        fetchImageUrl();
    }, [_id]);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Define download function
    const handleDownload = async (filename: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Download failed:', error);
            toast.error('🦄 Download failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <Box sx={{ ml: 1 }}>
            <Button
                sx={{
                    color: 'gray',
                    borderColor: 'gray',
                    "&:hover": { color: 'darkgray', borderColor: 'darkgray' }
                }}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Download
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleDownload(`${title}-image-small.jpg`);
                        handleClose();
                    }}
                    disableRipple
                >
                    Small (640 x 959)
                </MenuItem>
                <MenuItem disableRipple
                    onClick={() => {
                        handleDownload(`${title}-image-Medium.jpg`);
                        handleClose();
                    }}
                >
                    Medium (1920 x 2878)
                </MenuItem>
                <MenuItem disableRipple
                    onClick={() => {
                        handleDownload(`${title}-image-Large.jpg`);
                        handleClose();
                    }}
                >
                    Large (2400 x 3598)
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem disableRipple
                    onClick={() => {
                        handleDownload(`${title}-image-Original.jpg`);
                        handleClose();
                    }}
                >
                    Original size (5304 x 7952)
                </MenuItem>
            </StyledMenu>
        </Box>
    );
}
