"use client";
import { Container, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./CustomArrows";
import { usePathname } from "next/navigation";

const links = [
    { route: "Photos", pathName: '/photos', menuRoute: 'Photos' },
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

const MenuNavbar = () => {
    const pathname = usePathname()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <Container maxWidth="xl" sx={{ paddingX: '15px !important', position: 'relative', paddingBottom: '3px', borderBottom: '1px solid #dfdbdb' }}>
            <Slider {...settings}>
                {links.map((link, index) => {
                    const isActive = pathname === link.pathName;
                    return (
                        <MenuItem key={index} sx={{ display: 'inline-block', backgroundColor: isActive ? '#f1f1f1' : 'inherit', cursor: isActive ? 'default' : 'pointer', paddingX: 0 }}>
                            {isActive ? (
                                <Typography textAlign="center">
                                    {link.route}
                                </Typography>
                            ) : (
                                <Link href={link.pathName}>
                                    <Typography textAlign="center" >
                                        {link.route}
                                    </Typography>
                                </Link>
                            )}
                        </MenuItem>
                    );
                })}
            </Slider>
        </Container>
    );
};

export default MenuNavbar;