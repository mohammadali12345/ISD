import PropTypes from 'prop-types';
import { useState } from 'react';

// Shared Tailwind CSS classes with consistent colors and animations
const inputClasses = "mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary";
const labelClasses = "block text-sm font-medium text-gray-700";
const sectionHeaderClasses = "text-2xl font-semibold mb-4 text-primary transition-colors duration-300 ease-in-out hover:text-primary-dark";
const buttonClasses = "bg-primary text-white hover:bg-primary/80 p-3 rounded-lg w-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg";
const formContainerClasses = "w-full max-w-lg p-8 space-y-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-lg";

const Checkout = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardnumber: '',
        expiredate: '',
        cvc: ''
    });

    const [shippingInfo, setShippingInfo] = useState({
        fullname: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    });

    const handlePaymentChange = (e) => {
        const { id, value } = e.target;
        setPaymentInfo(prev => ({ ...prev, [id]: value }));
    };

    const handleShippingChange = (e) => {
        const { id, value } = e.target;
        setShippingInfo(prev => ({ ...prev, [id]: value }));
    };

    const handlePlaceOrder = async () => {
        try {
            const response = await fetch('http://localhost:3000/checkout', { // Update the endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...paymentInfo,
                    ...shippingInfo,
                    customerid: 1 // Replace with actual customer ID from authentication context or state
                })
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Order placed successfully:', result);
                // Optionally, redirect or show a success message
                alert('Order placed successfully!');
            } else {
                const errorMessage = await response.text();
                console.error('Error placing order:', errorMessage);
                alert(`Error: ${errorMessage || 'Unable to place order'}`);
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Network error. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
            <div className={formContainerClasses}>
                <h2 className="text-3xl font-bold text-center text-white">Checkout</h2>
                <PaymentInformation 
                    paymentInfo={paymentInfo}
                    onPaymentChange={handlePaymentChange} 
                />
                <ShippingInformation 
                    shippingInfo={shippingInfo}
                    onShippingChange={handleShippingChange} 
                />
                <div className="text-center mt-6">
                    <button className={buttonClasses} onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

const PaymentInformation = ({ paymentInfo, onPaymentChange }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className={sectionHeaderClasses}>Payment Information</h3>
        <form id="payment-form" className="space-y-4">
            <div>
                <label htmlFor="cardnumber" className={labelClasses}>Card Number</label>
                <input
                    type="text"
                    id="cardnumber"
                    className={inputClasses}
                    placeholder="Card Number"
                    value={paymentInfo.cardnumber}
                    onChange={onPaymentChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="expiredate" className={labelClasses}>Expiration Date</label>
                <input
                    type="date"
                    id="expiredate"
                    className={inputClasses}
                    value={paymentInfo.expiredate}
                    onChange={onPaymentChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="cvc" className={labelClasses}>CVC</label>
                <input
                    type="text"
                    id="cvc"
                    className={inputClasses}
                    placeholder="CVC"
                    value={paymentInfo.cvc}
                    onChange={onPaymentChange}
                    required
                />
            </div>
        </form>
    </div>
);

PaymentInformation.propTypes = {
    paymentInfo: PropTypes.shape({
        cardnumber: PropTypes.string.isRequired,
        expiredate: PropTypes.string.isRequired,
        cvc: PropTypes.string.isRequired,
    }).isRequired,
    onPaymentChange: PropTypes.func.isRequired,
};

const ShippingInformation = ({ shippingInfo, onShippingChange }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className={sectionHeaderClasses}>Shipping Information</h3>
        <form id="shipping-form" className="space-y-4">
            <div>
                <label htmlFor="fullname" className={labelClasses}>Full Name</label>
                <input
                    type="text"
                    id="fullname"
                    className={inputClasses}
                    placeholder="John Doe"
                    value={shippingInfo.fullname}
                    onChange={onShippingChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="address" className={labelClasses}>Address</label>
                <input
                    type="text"
                    id="address"
                    className={inputClasses}
                    placeholder="123 Main St"
                    value={shippingInfo.address}
                    onChange={onShippingChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="city" className={labelClasses}>City</label>
                <input
                    type="text"
                    id="city"
                    className={inputClasses}
                    placeholder="New York"
                    value={shippingInfo.city}
                    onChange={onShippingChange}
                    required
                />
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="state" className={labelClasses}>State</label>
                    <input
                        type="text"
                        id="state"
                        className={inputClasses}
                        placeholder="NY"
                        value={shippingInfo.state}
                        onChange={onShippingChange}
                        required
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="zipcode" className={labelClasses}>ZIP Code</label>
                    <input
                        type="text"
                        id="zipcode"
                        className={inputClasses}
                        placeholder="10001"
                        value={shippingInfo.zipcode}
                        onChange={onShippingChange}
                        required
                    />
                </div>
            </div>
        </form>
    </div>
);

ShippingInformation.propTypes = {
    shippingInfo: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
    }).isRequired,
    onShippingChange: PropTypes.func.isRequired,
};

export default Checkout;
