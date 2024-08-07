import { useState } from 'react';

// Shared Tailwind CSS class strings
const inputClasses = "mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-transform duration-300 ease-in-out transform hover:scale-105";
const labelClasses = "block text-sm font-medium text-gray-700";
const containerClasses = "min-h-screen flex items-center justify-center bg-gray-100 text-foreground";
const cardClasses = "bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105";
const buttonClasses = "w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 ease-in-out transform hover:scale-105";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/contact-us', {  // Ensure the endpoint matches the backend route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Submission failed');
                return;
            }

            setSuccess('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setError('An error occurred while sending your message.');
        }
    };

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className={labelClasses}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={inputClasses}
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={inputClasses}
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className={inputClasses}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={buttonClasses}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
