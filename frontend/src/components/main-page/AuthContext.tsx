import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    token: string | null;
    email: string | null;
    login: (token: string, email: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [email, setEmail] = useState<string | null>(localStorage.getItem('email'));
    const navigate = useNavigate();

    const login = (token: string, email: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        setToken(token);
        setEmail(email);
        navigate('/addProducts');
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setToken(null);
        setEmail(null);
        navigate('/loginForm');
    };

    return (
        <AuthContext.Provider value={{ token, email, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
