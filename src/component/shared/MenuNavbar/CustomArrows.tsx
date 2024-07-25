import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <ArrowBackIosNewIcon
            className={className}
            style={{ ...style, display: "block", left: 0, color: 'rgb(90 75 75)', zIndex: 2 }}
            onClick={onClick}
        >
        </ArrowBackIosNewIcon>
    );
};

export const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <ArrowForwardIosIcon
            className={className}
            style={{ ...style, display: "block", right: 0, color: 'rgb(90 75 75)', zIndex: 2 }}
            onClick={onClick}
        >
        </ArrowForwardIosIcon>
    );
};
