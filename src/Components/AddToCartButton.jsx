import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Shared Tailwind class strings for the button
const BUTTON_CLASSES = "bg-green-600 text-white hover:bg-green-700 p-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105";

const BuyNowButton = ({ destination }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(destination);
    };

    return (
        <motion.button
            className={BUTTON_CLASSES}
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <span>Buy Now</span>
        </motion.button>
    );
};

BuyNowButton.propTypes = {
    destination: PropTypes.string.isRequired,
};

export default BuyNowButton;
