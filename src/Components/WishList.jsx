import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS class strings
const cardClasses = "flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105";
const buttonClasses = "bg-red-600 text-white hover:bg-red-700 p-2 rounded-lg transition-transform transform hover:scale-105";
const containerClasses = "max-w-md mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-md p-6";

// Animation configuration
const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const WishlistItem = ({ item, onRemove }) => (
    <motion.li
        className={cardClasses}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: 'easeOut' }}
    >
        <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border border-gray-300" />
            <span className="font-medium">{item.name}</span>
        </div>
        <button className={buttonClasses} onClick={() => onRemove(item.id)}>Remove</button>
    </motion.li>
);

WishlistItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

const Wishlist = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', image: 'https://placehold.co/50x50' },
        { id: 2, name: 'Item 2', image: 'https://placehold.co/50x50' },
        { id: 3, name: 'Item 3', image: 'https://placehold.co/50x50' },
    ]);

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className={containerClasses}>
            <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <WishlistItem key={item.id} item={item} onRemove={handleRemove} />
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
