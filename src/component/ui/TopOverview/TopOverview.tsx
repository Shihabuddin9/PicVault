"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import TopOverview_1 from "@/assets/TopOverview-img/TopOverview-1.avif"
import TopOverview_2 from "@/assets/TopOverview-img/TopOverview-2.avif"
import TopOverview_3 from "@/assets/TopOverview-img/TopOverview-3.avif"
import TopOverview_4 from "@/assets/TopOverview-img/TopOverview-4.avif"
import featured from "@/assets/TopOverview-img/$REW4YT0.jpg"
import Image from "next/image";

const images = [
    { id: 1, img: TopOverview_1, category: 'UGC', name: 'by PicVault+ collections' },
    { id: 2, img: TopOverview_2, category: 'Finance', name: 'by PicVault+ Illustrations' },
    { id: 3, img: TopOverview_3, category: 'E-Vit Background', name: 'by PicVault+ collections' },
    { id: 4, img: TopOverview_4, category: 'AI', name: 'by PicVault+ collections' },
]

const TopOverview = () => {
    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', marginTop: '60px', overflow: 'hidden' }}>
            <Grid container >
                <Grid item xs={6} sm={8} md={6} sx={{ position: 'relative' }}>
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, padding: '8px' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>PicVault</Typography>
                        <Typography variant="h6" sx={{ color: '#1e1d1d' }}>
                            The internet’s source for visuals.
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#1e1d1d' }}>
                            Powered by creators everywhere.
                        </Typography>
                    </Box>
                </Grid>
                {/* middle portion */}
                <Grid item xs sx={{
                    border: '1px solid #ccc', borderRadius: '8px', padding: '12px', marginX: '22px',
                    '@media screen and (max-width: 768px)': {
                        display: 'none',
                    }
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontWeight: 'bold', marginBottom: '10px' }} variant="body1">Collections</Typography>
                        <Typography variant="body2">See all</Typography>
                    </Box>
                    <Box>
                        {
                            images.map(image => (
                                <Box key={image.id} sx={{
                                    display: 'flex',
                                    marginBottom: image.id === images.length ? 0 : '10px',
                                    transition: 'background-color 0.3s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    },
                                    padding: '7px',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}>
                                    <Image
                                        src={image.img}
                                        alt={image.name}
                                        style={{ borderRadius: '8px 0 0 8px' }}
                                        placeholder="blur"
                                    />
                                    <Box sx={{ marginLeft: 1 }}>
                                        <Typography variant="body1">{image.category}</Typography>
                                        <Typography variant="body2">{image.name}</Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box sx={{ position: 'relative', cursor: 'pointer' }}>
                        <Image
                            src={featured}
                            alt="tomas-malik"
                            style={{ borderRadius: '8px 0 0 8px', width: '100%', height: 320 }}
                            placeholder="blur"
                        />
                        <Box style={{ width: '100%' }} sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '8px' }}>
                            <Typography>Featured</Typography>
                            <Typography>eberhard 🖐 grossgasteiger</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopOverview;