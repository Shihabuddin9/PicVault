"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import app from '@/firebase/firebase.config';

// Define the type for your context
export interface AuthContextType {
    createUser: (email: string, password: string) => Promise<UserCredential>;
    createLoginUser: (email: string, password: string) => Promise<UserCredential>;
    createLogOut: () => Promise<void>;
    user: User | null;
    loading: boolean;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>
    searched: { img: string; title: string; _id: string }[] | null;
    setPhotos: Dispatch<SetStateAction<any[]>>
}

// Initialize the context with an empty object or a default value
export const AuthContext = createContext<AuthContextType | null>(null);
const auth = getAuth(app);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    // search handle start
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [photos, setPhotos] = useState<any[]>([]);
    const [searched, setSearched] = useState<any[]>([])
    // Filter photos based on search query
    useEffect(() => {
        if (searched) {
            const timeOutId = setTimeout(() => {
                setSearched(
                    photos.filter(photo =>
                        Object.values(photo).join().toLowerCase().includes(searchQuery.toLowerCase())
                    )
                );
            }, 500)
            return () => clearTimeout(timeOutId)
        } else {
            setSearched(photos);
        }
    }, [searchQuery]);

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        // console.log(searched);
        // console.log(photos);
        // setSearchQuery(''); // Clear the input field
    };
    // search handle end

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
        handleSubmit,
        searchQuery,
        setSearchQuery,
        searched,
        setPhotos,

    };

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
