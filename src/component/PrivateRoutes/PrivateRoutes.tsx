'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AuthContext } from '../ContextProvider/Context';

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authContext?.loading) {
            // While loading, just show a loading spinner
            setIsLoading(true);
        } else if (!authContext?.user) {
            // Redirect if not authenticated
            // router.push('/signIn');
            router.push(`/signIn?redirect=${encodeURIComponent(pathname)}`);
        } else {
            // User is authenticated, hide loading spinner
            setIsLoading(false);
        }
    }, [authContext?.user, authContext?.loading, pathname, router]);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-lg"></span></div>;
    }

    // Render children if not loading and user is authenticated
    return <>{children}</>;
};

export default PrivateRoutes;
