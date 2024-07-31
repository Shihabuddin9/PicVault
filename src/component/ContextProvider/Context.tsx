"use client";
import { createContext, ReactNode, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import app from '@/firebase/firebase.config';

// Define the type for your context
interface AuthContextType {
    createUser: (email: string, password: string) => Promise<UserCredential>;
    loading: boolean;
}

// Initialize the context with an empty object or a default value
export const AuthContext = createContext<AuthContextType | null>(null);
const auth = getAuth(app);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = async (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential;
        } finally {
            setLoading(false);
        }
    };

    const contextInfo: AuthContextType = {
        createUser,
        loading,
    };

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
