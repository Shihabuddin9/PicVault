import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function WithNavbar({ children }: RootLayoutProps) {
    return (

        <div>
            <h1>Profile navbar</h1>
            {children}
        </div>

    );
}
