import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Shared Tailwind CSS class strings
const inputClasses = "mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-transform duration-300 ease-in-out transform hover:scale-105";
const labelClasses = "block text-sm font-medium text-gray-700";
const containerClasses = "min-h-screen flex items-center justify-center bg-gray-100 text-foreground";  // Neutral background for the whole screen
const cardClasses = "bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105";  // Gradient background for the card
const buttonClasses = "w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 ease-in-out transform hover:scale-105";
const checkboxClasses = "form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary transition-transform duration-300 ease-in-out transform hover:scale-105";
const linkClasses = "text-sm text-primary hover:underline transition-transform duration-300 ease-in-out transform hover:scale-105";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    //this is function to check if user is an admin from chatGPT
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         // Login request to the customers endpoint
    //         const response = await fetch('http://localhost:3000/customers/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         const data = await response.json();

    //         if (!response.ok) {
    //             setError(data.message || 'Login failed');
    //             return;
    //         }

    //         setSuccess('Login successful!');
    //         // Save token to local storage
    //         localStorage.setItem('token', data.token); 

    //         // Check if user is an admin
    //         const adminCheckResponse = await fetch('http://localhost:3000/admin/check-admin', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email }),
    //         });

    //         const adminCheckData = await adminCheckResponse.json();

    //         if (adminCheckData.isAdmin) {
    //             navigate('/admin'); // Redirect to Admin Dashboard if admin
    //         } else {
    //             navigate('/'); // Redirect to Home page or other route
    //         }
    //     } catch (error) {
    //         setError('An error occurred during login.');
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3000/customers/login', {  // Ensure the endpoint matches the backend route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setError(data.message || 'Login failed');
                return;
            }
    
            setSuccess('Login successful!');
            // Save token and user role to local storage
            localStorage.setItem('token', data.token); // Save token to local storage
            if (data.isAdmin) {
                navigate('http://localhost:3000/admin'); // Redirect to Admin Dashboard if admin
            } else {
                navigate('/'); // Redirect to Home page or other route
            }
        } catch (error) {
            setError('An error occurred during login.');
        }
    };

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login to Your Account</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input
                            type="email"
                            id="email"
                            className={inputClasses}
                            placeholder="you@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input
                            type="password"
                            id="password"
                            className={inputClasses}
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className={checkboxClasses}
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a href="#" className={linkClasses}>Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className={buttonClasses}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
