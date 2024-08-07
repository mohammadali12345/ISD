import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../API/axiosInstance';

const sharedClasses = {
    container: "max-w-sm mx-auto bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105",
    image: "w-full h-48 object-cover",
    padding: "p-6",
    title: "text-2xl font-semibold mb-2 text-gray-800",
    description: "text-gray-600 mb-4",
    priceContainer: "flex items-center justify-between mb-4",
    primaryText: "text-indigo-600 text-lg font-bold",
    mutedText: "text-gray-500 line-through",
    button: "w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition-colors duration-300",
    buttonHover: "hover:shadow-lg hover:scale-105",
    totalContainer: "flex justify-between items-center mt-4",
    emptyCart: "text-center text-gray-600",
    checkoutButton: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
};

const ShoppingCart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const customerId = 1; // Replace with the actual customer ID from context or props

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axiosInstance.get(`/cart/customer/${customerId}`);
                setCartItems(response.data);
                calculateTotal(response.data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [customerId]);

    const calculateTotal = (items) => {
        const totalAmount = items.reduce((acc, item) => acc + parseFloat(item.productprice) * (item.quantity || 0), 0);
        setTotal(totalAmount);
    };

    const handleRemove = async (cartId) => {
        try {
            await axiosInstance.delete(`/cart/${cartId}`);
            const response = await axiosInstance.get(`/cart/customer/${customerId}`);
            setCartItems(response.data);
            calculateTotal(response.data);
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/check-out');
            window.scrollTo(0, 0); // Scroll to the top of the page
        } else {
            alert("Your cart is empty. Add items to the cart before proceeding to checkout.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">Shopping Cart</h1>
                <div className="space-y-4">
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map(item => (
                                <div key={item.cartid} className={sharedClasses.container}>
                                    <img className={sharedClasses.image} src={item.productimageurl} alt={item.productname} />
                                    <div className={sharedClasses.padding}>
                                        <h2 className={sharedClasses.title}>{item.productname}</h2>
                                        <p className={sharedClasses.description}>{item.productdescription}</p>
                                        <div className={sharedClasses.priceContainer}>
                                            <span className={sharedClasses.primaryText}>${item.productprice}</span>
                                        </div>
                                        <button
                                            className={`${sharedClasses.button} ${sharedClasses.buttonHover}`}
                                            onClick={() => handleRemove(item.cartid)}
                                        >
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className={sharedClasses.totalContainer}>
                                <p className="text-xl font-bold text-gray-900">Total: ${total.toFixed(2)}</p>
                                <button
                                    className={sharedClasses.checkoutButton}
                                    onClick={handleCheckout}
                                >
                                    Checkout
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className={sharedClasses.emptyCart}>Your cart is empty.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
