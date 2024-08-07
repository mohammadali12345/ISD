    import PropTypes from 'prop-types';
    import { motion } from 'framer-motion';

    const Card = ({ title, description, imageUrl, children, className }) => (
    <motion.div
        className={`max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
        <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        {children && <div className="mt-4">{children}</div>}
        </div>
    </motion.div>
    );

    Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    };

    export default Card;
