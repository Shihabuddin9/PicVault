'use client';

import { Box, Button, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import ImageModal from '../ImageGallery/ImageModal';

// Define the type for props
interface Photo {
    category: string;
    img: string; // URL or path to the image
    title: string; // Title or description of the image
    _id: string;
}

interface WithMenuNavbarImageGalleryProps {
    filterPhoto: Photo[];
}

const WithMenuNavbarImageGallery: React.FC<WithMenuNavbarImageGalleryProps> = ({ filterPhoto }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ img: string; title: string; _id: string } | null>(null);

    const handleOpen = (img: string, title: string, _id: string) => {
        setSelectedImage({ img, title, _id });
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    if (!filterPhoto || filterPhoto.length === 0) {
        return (
            <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
                <Typography textAlign='center'>No photos available.</Typography>
            </Container>
        );
    }
    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
            <Box sx={{ height: 450 }}>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {filterPhoto.map((item) => (
                        <ImageListItem key={item._id}>
                            <Button
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover img': {
                                        filter: 'blur(3px)',
                                    },
                                }}
                                onClick={() => handleOpen(item.img, item.title, item._id)}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={248}
                                    height={248}
                                    layout="responsive"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:..."
                                />
                            </Button>
                        </ImageListItem>
                    ))}
                </ImageList>
                <ImageModal
                    handleClose={handleClose}
                    open={open}
                    img={selectedImage?.img ?? ''}
                    title={selectedImage?.title ?? ''}
                    _id={selectedImage?._id ?? ''}
                />
            </Box>
        </Container>
    );
};

export default WithMenuNavbarImageGallery;
