// src/react-slick.d.ts
declare module 'react-slick' {
    import * as React from 'react';

    export interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        arrows?: boolean;
        pauseOnHover?: boolean;
        responsive?: {
            breakpoint: number;
            settings: {
                slidesToShow?: number;
                slidesToScroll?: number;
                infinite?: boolean;
                dots?: boolean;
            };
        }[];
    }

    export default class Slider extends React.Component<Settings> { }
}  