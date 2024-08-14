// authContext.jsx
import { createContext, useState, useEffect } from 'react';
import { signin, signup } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            // Optionally fetch user details from backend if needed
            setUser({ token: userToken });
        }
    }, []);
    
    const handleSignup = async (userData) => {
        try {
            const data = await signup(userData);
            localStorage.setItem('userToken', data.data); // Store token
            setUser({ token: data.data }); // Update user state
            return data;
        } catch (error) {
            console.error('Signup failed:', error);
            throw error;
        }
    };

    const handleSignin = async (userData) => {
        try {
            const data = await signin(userData);
            localStorage.setItem('userToken', data.data); // Store token
            setUser({ token: data.data }); // Update user state
            return data;
        } catch (error) {
            console.error('Signin failed:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, handleSignup, handleSignin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
