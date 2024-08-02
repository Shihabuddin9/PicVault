// components/ImageGallery.tsx
'use client';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface ImageGalleryProps {
    photos: { img: string; title: string }[] | null; // Adjust according to your actual photo object shape
}

export default function ImageGallery({ photos }: ImageGalleryProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (!photos || photos.length === 0) {
        return (
            <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
                <Typography textAlign='center'>No photos available.</Typography>
            </Container>
        );
    }
    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
            <Box sx={{ height: 450 }}>
                <ImageList variant="masonry" cols={3} gap={22}>
                    {photos.map((item) => (
                        <ImageListItem key={item.img}>
                            <Button onClick={handleOpen}>
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
                <ImageModal handleOpen={handleOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
            </Box>
        </Container>
    );
}
