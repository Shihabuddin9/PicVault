import { Container } from "@mui/material";
import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function WithMenuNavbar({ children }: RootLayoutProps) {
    return (

        <Container maxWidth="xl">
            <h1>WithMenuNavbar</h1>
            {children}
        </Container>

    );
}
