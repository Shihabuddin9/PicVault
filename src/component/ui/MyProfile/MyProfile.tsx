'use client';
import { Box, Container, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import { AuthContext } from "@/component/ContextProvider/Context";


const MyProfile = () => {
    const authContext = React.useContext(AuthContext)
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ marginTop: 5 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>My Profile</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AccountCircleIcon sx={{ width: 100, height: 100 }} />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>{authContext?.user?.email}</Typography>
                            <Typography>Download free, beautiful high-quality photos curated by</Typography>
                            <Typography>Not available for hire Update</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default MyProfile;