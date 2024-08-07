import React from 'react';
import HigherOrderFunction from '@/component/utils/HigherOrderFunction/HigherOrderFunction';
import { Box } from '@mui/material';
import WithMenuNavbarImageGallery from '@/component/ui/WithMenuNavbarImageGallery/WithMenuNavbarImageGallery';

interface Photo {
    category: string;
    img: string; // URL or path to the image
    title: string; // Title or description of the image
    _id: string;
}

interface FilterPhotoProps {
    filterPhoto: Photo[];
}

const StreetPhotography: React.FC<FilterPhotoProps> = ({ filterPhoto }) => {
    return (
        <Box>
            <h1>Street Photography</h1>
            <WithMenuNavbarImageGallery filterPhoto={filterPhoto} />
        </Box>
    );
};

// Wrap Illustrations component with HigherOrderFunction
const IllustrationsWithFilter = HigherOrderFunction('Street Photography', StreetPhotography);
export default IllustrationsWithFilter;
