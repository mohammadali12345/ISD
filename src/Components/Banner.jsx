import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Shared Tailwind CSS classes
const sharedClasses = {
    container: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between',
    button: 'bg-yellow-500 text-yellow-800 hover:bg-yellow-600 py-3 px-6 rounded-lg transition-transform transform hover:scale-105',
    heading: 'text-4xl font-bold mb-4 text-center md:text-left transition-transform duration-500 ease-in-out hover:scale-105',
    paragraph: 'text-lg mb-4 text-center md:text-left transition-transform duration-500 ease-in-out hover:scale-105',
    flexItem: 'flex-1 mb-4 md:mb-0',
    flexShrink: 'flex-shrink-0'
};

// ServiceWelcome Component
const ServiceWelcome = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signUp');
    };

    return (
        <div className={sharedClasses.container}>
            <div className={sharedClasses.flexItem}>
                <motion.h1
                    className={sharedClasses.heading}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Welcome to Our Service
                </motion.h1>
                <motion.p
                    className={sharedClasses.paragraph}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Experience the best service with us. Join now and enjoy exclusive benefits!
                </motion.p>
            </div>
            <div className={sharedClasses.flexShrink}>
                <motion.button
                    className={sharedClasses.button}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    onClick={handleClick}
                >
                    Get Started
                </motion.button>
            </div>
        </div>
    );
};

export default ServiceWelcome;
