"use client";

import { Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px', backgroundColor: '#f3f3f3', paddingY: 2 }}>
            <Typography textAlign='center'>Copyright © 2024 picVault.com</Typography>
        </Container>
    );
};

export default Footer;