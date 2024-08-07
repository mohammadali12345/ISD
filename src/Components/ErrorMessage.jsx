import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react'; // Correctly import useEffect from React

// Shared Tailwind CSS class strings
const SHARED_CLASSES = {
    container: 'relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 overflow-hidden',
    icon: 'w-8 h-8',
    errorText: 'font-semibold text-lg',
    description: 'text-gray-200',
    hoverEffect: 'transition-transform duration-300 ease-in-out transform hover:scale-105',
    image: 'w-12 h-12 rounded-full border-4 border-white',
    gradientOverlay: 'absolute inset-0 bg-gradient-to-br from-transparent via-red-500 to-transparent opacity-30'
};

// Icon Component
const Icon = ({ src, alt }) => (
    <img className={SHARED_CLASSES.icon} alt={alt} src={src} />
);

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

// ErrorText Component
const ErrorText = ({ children }) => (
    <span className={SHARED_CLASSES.errorText}>{children}</span>
);

ErrorText.propTypes = {
    children: PropTypes.node.isRequired,
};

// Description Component
const Description = ({ children }) => (
    <span className={SHARED_CLASSES.description}>{children}</span>
);

Description.propTypes = {
    children: PropTypes.node.isRequired,
};

// Main ErrorComponent
const ErrorComponent = () => {
    const controls = useAnimation();

    useEffect(() => {
        // Scroll animation
        const handleScroll = () => {
            const offset = window.scrollY;
            controls.start({
                opacity: 1,
                y: Math.max(0, -offset / 2),
                background: `linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.8))`,
                transition: { duration: 0.5 }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <motion.div
            className={`${SHARED_CLASSES.container} ${SHARED_CLASSES.hoverEffect}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: '#f87171' }} // Hover effect
            whileTap={{ scale: 0.95 }} // Click effect
        >
            <div className="relative flex-shrink-0">
                <div className={SHARED_CLASSES.gradientOverlay} />
                <img
                    className={SHARED_CLASSES.image}
                    src="https://via.placeholder.com/50"
                    alt="error-image"
                />
            </div>
            <div className="flex-1 relative">
                <div className="flex items-center space-x-2">
                    <Icon aria-hidden="true" alt="error-icon" src="https://openui.fly.dev/openui/24x24.svg?text=❗" />
                    <ErrorText>Error:</ErrorText>
                </div>
                <Description>Something went wrong. Please try again.</Description>
            </div>
        </motion.div>
    );
};

export default ErrorComponent;
