// INFO: HERE WE WILL HANDLE API REQUEST FOR AUTHTHENTICATION
import axios from 'axios';

//NOTE: THIS IS BACKENED API TO INTERACT
const API_URL = 'http://localhost:3001/api/v1'; 

export const signup = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/signup', userData);
        console.log('Signup response:', response.data); // Log response to check structure
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};

// In authService.jsx
export const signin = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        console.log('Signin response:', response.data); // Log the response for debugging

        // Extract token from response
        const { data } = response.data; // Assuming 'data' contains the JWT token
        localStorage.setItem('userToken', data); // Store token in localStorage

        return response.data; // Return the entire response for further use if needed
    } catch (error) {
        console.error('Signin error:', error);
        throw error.response?.data || error;
    }
};



