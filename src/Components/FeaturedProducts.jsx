import { useEffect, useState } from 'react';
import axiosInstance from '../API/axiosInstance';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS classes with updated design and animations
const sharedClasses = {
    card: 'bg-white text-gray-900 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300',
    button: 'bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded transition-transform transform hover:scale-105 duration-300',
    img: 'w-full h-48 object-cover mb-4 rounded-md',
    textMuted: 'text-gray-600 mb-4',
    textHeading: 'text-xl font-semibold mb-2'
};

// FeaturedProducts Component with integrated ProductCard functionality
const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // Local state for cart

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/featured-products'); // Replace with your API endpoint
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = async (product) => {
    
        const newCartItem = {
            customerid: 1,
            productid: product.productid || 0,
            quantity: 1,
            productname: product.name || 'Unknown Product',
            productdescription: product.description || 'No description available',
            productprice: parseFloat(product.price) || 0, // Ensure price is a number
            productimageurl: product.image || 'default-image-url',
        };
        try {
            const response = await axiosInstance.post('/cart', newCartItem);
            console.log('Response:', response.data); // Log the response
            alert('Product added to cart!');
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
    return (
        <div className="bg-gray-100 text-gray-900 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <motion.div
                        key={product.productid}
                        className={sharedClasses.card}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={product.image} alt={product.name} className={sharedClasses.img} />
                        <h3 className={sharedClasses.textHeading}>{product.name}</h3>
                        <p className={sharedClasses.textMuted}>{product.description}</p>
                        <p className={sharedClasses.textMuted}>${product.price}</p>
                        <motion.button
                            className={sharedClasses.button}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleAddToCart(product)} // Pass product to handleAddToCart
                        >
                            Buy Now
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

FeaturedProducts.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        productid: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
};

export default FeaturedProducts;
