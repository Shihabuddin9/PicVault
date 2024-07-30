"use client";
import { createContext, ReactNode } from "react";

// Define the type for your context
interface AuthContextType {
    // Add properties and methods for your context here
}

// Initialize the context with an empty object or a default value
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const contextInfo: AuthContextType = {
        // Initialize properties and methods for your context
    };

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
