import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Your backend base URL
    timeout: 10000, // Optional timeout
    headers: { 'Content-Type': 'application/json' } // Optional headers
});

export default axiosInstance;