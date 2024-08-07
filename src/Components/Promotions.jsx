import { useEffect, useState } from 'react';
import axiosInstance from '../API/axiosInstance'; // Ensure this file exports the configured axios instance
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Shared Tailwind CSS classes with updated design and animations
const sharedClasses = {
    card: 'bg-white text-gray-900 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300',
    button: 'bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded transition-transform transform hover:scale-105 duration-300',
    img: 'w-full h-48 object-cover mb-4 rounded-md',
    textMuted: 'text-gray-600 mb-4',
    textHeading: 'text-xl font-semibold mb-2'
};

// Promotions Component with integrated functionality
const Promotions = () => {
    const [promotions, setPromotions] = useState([]);

    // Fetch promotions data from API
    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const response = await axiosInstance.get('/promotions'); // Adjust this path if necessary
                setPromotions(response.data);
            } catch (error) {
                console.error('Error fetching promotions:', error);
            }
        };

        fetchPromotions();
    }, []);

    // Handle adding a promotion to the cart
    const handleAddToCart = async (promotion) => {
        const newCartItem = {
            customerid: 1, // You might need to get this from user context or other source
            productid: promotion.id,
            quantity: 1,
            productname: promotion.title,
            productdescription: promotion.description,
            productprice: promotion.price, // Ensure price is a number
            productimageurl: promotion.imagesrc,
        };

        try {
            const response = await axiosInstance.post('/cart', newCartItem);
            console.log('Response:', response.data); // Log the response
            alert('Promotion added to cart!');
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Error Response Data:', error.response.data);
                console.error('Error Response Status:', error.response.status);
                console.error('Error Response Headers:', error.response.headers);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error Request Data:', error.request);
            } else {
                // Something else happened
                console.error('Error Message:', error.message);
            }
        }
    };

    // PromotionCard component with framer-motion for animations
    const PromotionCard = ({ promotion }) => (
        <motion.div
            className={sharedClasses.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img src={promotion.imagesrc} alt={promotion.title} className={sharedClasses.img} />
            <h3 className={sharedClasses.textHeading}>{promotion.title}</h3>
            <p className={sharedClasses.textMuted}>{promotion.description}</p>
            <p className={sharedClasses.textMuted}>${promotion.price}</p>
            <motion.button
                className={sharedClasses.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(promotion)}
            >
                Shop Now
            </motion.button>
        </motion.div>
    );

    PromotionCard.propTypes = {
        promotion: PropTypes.shape({
            id: PropTypes.number.isRequired,
            imagesrc: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired,
    };

    return (
        <div className="bg-gray-100 text-gray-900 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Special Promotions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promotion) => (
                    <PromotionCard key={promotion.id} promotion={promotion} />
                ))}
            </div>
        </div>
    );
};

export default Promotions;
