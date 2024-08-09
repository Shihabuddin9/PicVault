import { Box, Button, ButtonGroup, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
const links = [
    { route: "Photos", pathName: '/', menuRoute: 'Photos' },
    { route: "Illustrations", pathName: '/illustrations' },
    { route: "PicVault+", pathName: '/picVault' },
    { route: "Golden Hour", pathName: '/goldenHour' },
    { route: "Wallpapers", pathName: '/wallpapers' },
    { route: "Nature", pathName: '/nature' },
    { route: "Sports", pathName: '/sports' },
    { route: "Travel", pathName: '/travel' },
    { route: "Architecture ", pathName: '/architecture' },
    { route: "Animals", pathName: '/animals' },
    { route: "Street Photography", pathName: '/streetPhotography' },
    { route: "Film", pathName: '/film' },
    { route: "Archival", pathName: '/archival' },
    { route: "Experimental", pathName: '/experimental' },
    { route: "Animals", pathName: '/animals' },
    { route: "Fashion & Beauty", pathName: '/fashionBeauty' },
    { route: "People", pathName: '/people' },
    { route: "Spirituality", pathName: '/spirituality' },
    { route: "Business & Work", pathName: '/businessWork' },
    { route: "Food & Drink", pathName: '/foodDrink' },
    { route: "Health & Wellness", pathName: '/healthWellness' },
    { route: "3D Renders", pathName: '/renders' },
    { route: "Current Events", pathName: '/currentEvents' },
];
const NotFoundSearch = () => {
    return (
        <Box >
            <Typography sx={{ fontWeight: 'bold' }} textAlign='center' marginBottom={2}>
                No photos found for the search query
            </Typography>
            <Box>
                {links.map(link => (
                    <Link key={link.route} href={link.pathName} passHref>
                        <Button size="small" variant="outlined">{link.route} </Button >
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default NotFoundSearch;