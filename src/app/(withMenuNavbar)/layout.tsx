import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function WithMenuNavbar({ children }: RootLayoutProps) {
    return (

        <div>
            <h1>WithMenuNavbar</h1>
            {children}
        </div>

    );
}
