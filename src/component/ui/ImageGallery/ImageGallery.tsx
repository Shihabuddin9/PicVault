'use client';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface ImageGalleryProps {
    photos: { img: string; title: string; _id: string }[] | null; // Adjust according to my actual photo object shape
}

export default function ImageGallery({ photos }: ImageGalleryProps) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ img: string; title: string; _id: string } | null>(null);

    const handleOpen = (img: string, title: string, _id: string) => {
        setSelectedImage({ img, title, _id });
        setOpen(true);
    };
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
                <ImageList variant="masonry" cols={3} gap={10}>
                    {photos.map((item) => (
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
}
