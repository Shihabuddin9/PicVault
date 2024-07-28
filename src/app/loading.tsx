import { Box, Typography } from "@mui/material";

const loading = () => {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
        <Typography variant="h6">Loading...</Typography>
    </Box>

};

export default loading;