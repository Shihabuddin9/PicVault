"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";

const SubmitImage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch('https://photo-server-lilac.vercel.app/uploadPhoto', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("File uploaded successfully!");
            } else {
                alert("Failed to upload file.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occurred while uploading the file.");
        }
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Box textAlign="center" sx={{ color: 'black', fontWeight: 'bold' }}>
                    <Typography>Upload a photo JPEG</Typography>
                    <form onSubmit={handleSubmit}>
                        <Typography>
                            Drag and drop up to image or
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="raised-button-file">
                                <Button component="span">
                                    Browse
                                </Button>
                            </label>
                            to choose a file
                        </Typography>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </Box>
                <Box sx={{ marginY: 2 }}>
                    <Typography variant="body2" textAlign="center">Max 50 MB</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="body2">- High quality images (for photos)</Typography>
                        <Typography variant="body2">- Images are clear & original</Typography>
                    </Box>
                    <Box sx={{ marginX: 2 }}>
                        <Typography variant="body2">- Only upload images you own the rights to</Typography>
                        <Typography variant="body2">- Zero tolerance for nudity, violence or hate</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">- Respect the intellectual property of others</Typography>
                        <Typography variant="body2">- Read the PicValut Terms</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default SubmitImage;
