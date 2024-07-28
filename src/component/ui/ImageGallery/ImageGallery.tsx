import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import getAllPicVaultPhoto from '@/component/utils/getAllPicVaultPhoto';

export default async function ImageGallery() {
    const photos = await getAllPicVaultPhoto();

    if (!photos) {
        return (
            <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
                <Typography>No photos available.</Typography>
            </Container>
        );
    }
    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px' }}>
            <Box sx={{ height: 450 }}>
                <ImageList variant="masonry" cols={3} gap={22}>
                    {photos.map((item) => (
                        <ImageListItem key={item.img}>
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
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}
