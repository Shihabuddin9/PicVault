import { Container } from "@mui/material";
import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function WithMenuNavbar({ children }: RootLayoutProps) {
    return (

        <Container maxWidth="xl">
            {children}
        </Container>

    );
}
