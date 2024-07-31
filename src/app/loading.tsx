import { Box, Button, CircularProgress, Typography } from "@mui/material";

const loading = () => {
    return <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px',
        height: '100vh',
        width: '100vw',

    }}>
        <Typography>
            <CircularProgress size={20} sx={{ marginRight: 2 }} />
            Loading...
        </Typography>
    </Box>

};

export default loading;