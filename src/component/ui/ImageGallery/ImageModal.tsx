'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import ImageDownload from './ImageDownload'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh', // Set a max height to the modal
    overflowY: 'auto', // Enable vertical scrolling
};

type ImageModalProps = {
    handleClose: () => void
    open: boolean
    img: string;
    title: string;
    _id: string

}

export default function ImageModal({ handleClose, open, img, title, _id }: ImageModalProps) {
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', mb: 1 }}>
                            <IconButton onClick={handleClose} aria-label="add to favorites">
                                <ClearIcon sx={{ '&:hover': { color: "red" } }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography>{title}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon sx={{ '&:hover': { color: "black" } }} />
                                </IconButton>
                                <IconButton aria-label="add to favorites">
                                    <AddCircleIcon sx={{ '&:hover': { color: "black" } }} />
                                </IconButton>
                                <ImageDownload _id={_id} />
                            </Box>
                        </Box>
                        <Box>
                            <Image
                                src={img}
                                alt={title}
                                width={248}
                                height={248}
                                layout="responsive"
                                loading="lazy"
                            />
                        </Box>

                    </Box>
                    <Box sx={{ marginY: 5 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box>
                                <Typography>Views</Typography>
                                <Typography sx={{ color: 'black' }}>7,450,554</Typography>
                            </Box>
                            <Box sx={{ ml: 5 }}>
                                <Typography>Downloads</Typography>
                                <Typography sx={{ color: 'black' }}>21,710</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ marginY: 5 }}>
                            <Typography>Going totally meta and sharing a remix of one of my photos and Svetlana Pochatun (@spochatun on PicVault)</Typography>
                        </Box>
                        <Box>
                            <Typography>Published on June 21, 2024</Typography>
                            <Typography>SONY, ILCE-7RM3</Typography>
                            <Typography>Free to use under the PicVault License</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={{ color: 'black' }}>Related images</Typography>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
