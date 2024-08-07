import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Shared Tailwind CSS class strings
const inputClasses = "mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-transform duration-300 ease-in-out transform hover:scale-105";
const labelClasses = "block text-sm font-medium text-gray-700";
const buttonClasses = "w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 ease-in-out transform hover:scale-105";
const checkboxClasses = "form-checkbox h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary transition-transform duration-300 ease-in-out transform hover:scale-105";
const containerClasses = "min-h-screen flex items-center justify-center bg-gray-100 text-foreground";  // Neutral background for the whole screen
const cardClasses = "bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105";  // Gradient background for the card
const closeButtonClasses = "absolute top-2 right-2 text-white hover:text-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-110";

const FormInput = ({ id, type, placeholder, label, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className={labelClasses}>{label}</label>
        <input
            type={type}
            id={id}
            className={inputClasses}
            placeholder={placeholder}
            required
            value={value}
            onChange={onChange}
        />
    </div>
);

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const Checkbox = ({ id, label, checked, onChange }) => (
    <div className="flex items-center justify-between mb-6">
        <label className="flex items-center text-sm text-gray-600">
            <input
                type="checkbox"
                id={id}
                className={checkboxClasses}
                checked={checked}
                onChange={onChange}
            />
            <span className="ml-2">{label}</span>
        </label>
    </div>
);

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });
    const [isVisible, setIsVisible] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { id, value, checked, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password, confirmPassword, termsAccepted } = formData;

        // Basic validation
        if (!termsAccepted) {
            setError('You must accept the terms and conditions.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/customers/register', { // Ensure the endpoint is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }), // Send username
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || 'Registration failed');
                return;
            }

            setSuccess('Registration successful! Redirecting to home...');
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                termsAccepted: false,
            });

            // Navigate to the Home page
            setTimeout(() => {
                navigate('/');
            }, 1000); // Optional: Delay navigation for user feedback

        } catch (error) {
            setError('An error occurred during registration.');
        }
    };

    if (!isVisible) return null;

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                <button onClick={() => setIsVisible(false)} className={closeButtonClasses}>
                    <span aria-hidden="true">×</span>
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Your Account</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <FormInput id="username" type="text" placeholder="JohnDoe" label="Username" value={formData.username} onChange={handleChange} />
                    <FormInput id="email" type="email" placeholder="you@example.com" label="Email" value={formData.email} onChange={handleChange} />
                    <FormInput id="password" type="password" placeholder="••••••••" label="Password" value={formData.password} onChange={handleChange} />
                    <FormInput id="confirmPassword" type="password" placeholder="••••••••" label="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    <Checkbox id="termsAccepted" label="I agree to the terms and conditions" checked={formData.termsAccepted} onChange={handleChange} />
                    <button type="submit" className={buttonClasses}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
