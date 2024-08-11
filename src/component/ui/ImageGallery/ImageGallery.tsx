'use client';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { AuthContext } from '@/component/ContextProvider/Context';
import NotFoundSearch from './NotFoundSearch';

interface ImageGalleryProps {
    photos: { _id: string; img: string; title: string; }[] | null; // Adjust according to my actual photo object shape
}

export default function ImageGallery({ photos }: ImageGalleryProps) {
    const authContext = React.useContext(AuthContext);

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
                <Typography textAlign='center'>No photos found for the search query</Typography>
            </Container>
        );
    }

    // Guard against possible undefined authContext
    const searchQuery = authContext?.searchQuery ?? '';
    const searchedPhotos = authContext?.searched ?? [];
    authContext?.setPhotos(photos)

    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
            <Box sx={{ height: 450 }}>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {/* Conditionally render based on search query */}
                    {
                        searchQuery.length > 0 ? (
                            searchedPhotos.length === 0 ? (
                                <Box>
                                    <NotFoundSearch />
                                </Box>
                            ) : (
                                searchedPhotos.map((item) => (
                                    <ImageListItem key={item._id}>
                                        <Button
                                            sx={{
                                                position: 'relative',
                                                overflow: 'hidden',
                                                '&:hover img': {
                                                    filter: 'blur(3px)',
                                                },
                                            }}

                                            onClick={() => handleOpen(item.img, item.title, item._id)}

                                        >
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
                                ))
                            )
                        )
                            :
                            (
                                photos.map((item) => (
                                    <ImageListItem key={item._id}>
                                        <Button
                                            sx={{
                                                position: 'relative',
                                                overflow: 'hidden',
                                                '&:hover img': {
                                                    filter: 'blur(3px)',
                                                },
                                            }}

                                            onClick={() => handleOpen(item.img, item.title, item._id)}

                                        >
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
                                ))
                            )
                    }

                </ImageList>
                {/* image modal */}
                <ImageModal
                    handleClose={handleClose}
                    open={open}
                    img={selectedImage?.img ?? ''}
                    title={selectedImage?.title ?? ''}
                    _id={selectedImage?._id ?? ''}
                // photos={photos} // Pass the photos prop
                />
            </Box>
        </Container>
    );
}
