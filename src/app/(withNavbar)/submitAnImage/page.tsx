import PrivateRoutes from "@/component/PrivateRoutes/PrivateRoutes";
import SubmitImage from "@/component/ui/SubmitAnImage/SubmitImage";
import { Box } from "@mui/material";

const SubmitAnImage = () => {
    return (
        <PrivateRoutes>
            <Box>
                <SubmitImage />
            </Box>
        </PrivateRoutes>
    );
};

export default SubmitAnImage;