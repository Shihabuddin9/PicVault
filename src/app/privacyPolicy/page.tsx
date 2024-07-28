import { Container, Typography } from "@mui/material";

const privacyPolicy = () => {
    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', my: 5 }}>Privacy Policy</Typography>
            <Typography variant="body1">
                Unsplash Inc. and its affiliates and subsidiaries (“Unsplash”, “we” or “us”) are committed to protecting your privacy and safeguarding your personal information. The purpose of this privacy policy (the “Privacy Policy”) is to inform you about our privacy practices, including how we collect, use and disclose your personal information.

                This Privacy Policy applies to our website, mobile applications and related services (collectively, the “Unsplash Services”). By visiting, accessing, or using the Unsplash Services, you consent to the policies and practices of this Privacy Policy so please read them carefully. If any policies or practices of this Privacy Policy are unacceptable to you, please do not visit, access, or use the Unsplash Services.
            </Typography>
        </Container>
    );
};

export default privacyPolicy;