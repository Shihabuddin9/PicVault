"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import app from '@/firebase/firebase.config';

// Define the type for your context
interface AuthContextType {
    createUser: (email: string, password: string) => Promise<UserCredential>;
    createLoginUser: (email: string, password: string) => Promise<UserCredential>;
    createLogOut: () => Promise<void>;
    user: User | null;
    loading: boolean;
}

// Initialize the context with an empty object or a default value
export const AuthContext = createContext<AuthContextType | null>(null);
const auth = getAuth(app);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

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

    // create login user
    const createLoginUser = async (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential;
        } finally {
            setLoading(false);
        }
    };

    // log out
    const createLogOut = async (): Promise<void> => {
        setLoading(true);
        try {
            await signOut(auth);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const contextInfo: AuthContextType = {
        createUser,
        createLoginUser,
        createLogOut,
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
