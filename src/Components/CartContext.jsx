import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../API/axiosInstance'; // Import axios for API calls

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to validate product
    const validateProduct = (product) => {
        return (
            product &&
            typeof product.customerid === 'number' &&
            (typeof product.productid === 'number' || product.productid === undefined) &&
            (typeof product.quantity === 'number' || product.quantity === null) &&
            (product.quantity === null || product.quantity >= 0) &&
            typeof product.productname === 'string' &&
            typeof product.productdescription === 'string' &&
            (typeof product.productprice === 'string' || typeof product.productprice === 'number') &&
            typeof product.productimageurl === 'string'
        );
    };

    // Add to cart function to handle API call
    const addToCart = async (FeaturedProduct) => {
        console.log('Featured Product Data:', FeaturedProduct); // Log the data from featured products
    
        const cartProduct = {
            customerid: 1, // Example value
            productid: FeaturedProduct.productid || null,
            productname: FeaturedProduct.name || null, // Map 'name' to 'productname'
            productdescription: FeaturedProduct.description || null, // Map 'description' to 'productdescription'
            productimageurl: FeaturedProduct.image || null, // Map 'image' to 'productimageurl'
            productprice: parseFloat(FeaturedProduct.price) || null, // Ensure price is a number
            quantity: 1 // Default value for quantity
        };
    
        console.log('Mapped Cart Product Data:', cartProduct); // Log the mapped data
    
        if (!validateProduct(cartProduct)) {
            console.error('Invalid product:', cartProduct);
            return;
        }
    
        try {
            const response = await axiosInstance.post('http://localhost:3000/cart', cartProduct);
            setCart(prevCart => [...prevCart, response.data]);
        } catch (error) {
            console.error('Error adding to cart:', error.response ? error.response.data : error.message);
        }
    };

    // Function to remove item from cart
    const removeFromCart = async (id) => {
        try {
            await axiosInstance.delete(`http://localhost:3000/cart/${id}`);
            setCart(prevCart => prevCart.filter(item => item.cartid !== id));
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    // Function to get total price
    const getTotal = () => {
        return cart.reduce((acc, item) => acc + ((item.productprice || 0) * (item.quantity || 0)), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
