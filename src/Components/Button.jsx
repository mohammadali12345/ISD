import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, onClick, className, type = 'button', destination }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (destination) {
            navigate(destination);
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <motion.button
            type={type}
            onClick={handleClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ${className}`}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    destination: PropTypes.string,  // Add destination prop
};

export default Button;
