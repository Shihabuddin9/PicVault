import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function WithNavbar({ children }: RootLayoutProps) {
    return (

        <div>
            {children}
        </div>

    );
}
