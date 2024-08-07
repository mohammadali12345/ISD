    import PropTypes from 'prop-types';
    import { motion } from 'framer-motion';

    const Alert = ({ message, type, onClose }) => (
    <motion.div
        className={`bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-3 rounded relative shadow-lg`}
        role="alert"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
    >
        <span className="block sm:inline">{message}</span>
        {onClose && (
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-${type}-700 hover:text-${type}-900 transition-colors duration-200"
            aria-label="Close"
        >
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                d="M13.414 6.586a2 2 0 10-2.828 2.828L10.828 10l-2.412 2.414a2 2 0 102.828 2.828L13.414 12l2.414 2.414a2 2 0 102.828-2.828L16.828 10l2.414-2.414a2 2 0 10-2.828-2.828L13.414 7.172 10 4.758 7.586 7.172a2 2 0 10-2.828-2.828L4.172 10l-2.414-2.414a2 2 0 10-2.828 2.828L1.172 10l2.414 2.414a2 2 0 102.828 2.828L4.172 12l2.414-2.414a2 2 0 102.828-2.828L10 7.172l2.414-2.414z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        )}
    </motion.div>
    );

    Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
    onClose: PropTypes.func,
    };

    export default Alert;
