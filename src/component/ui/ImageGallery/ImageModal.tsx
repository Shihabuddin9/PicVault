'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import ImageDownload from './ImageDownload'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh', // Set a max height to the modal
    overflowY: 'auto', // Enable vertical scrolling
};

type ImageModalProps = {
    handleClose: () => void
    open: boolean
    // photo: {
    //     img: string;
    //     title: string;
    //     _id: string;
    // } | null
    img: string;
    title: string;

}

export default function ImageModal({ handleClose, open, img, title }: ImageModalProps) {
    return (
        <Box sx={{}}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography>{title}</Typography>
                        <ImageDownload />
                    </Box>
                    <Box>
                        <Image
                            src={img}
                            alt={title}
                            width={600}
                            height={400}
                            layout="responsive"
                            loading="lazy"
                        />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
