import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS class strings
const containerClasses = "mb-6";
const headingClasses = "text-lg font-semibold text-gray-900";
const textMutedClasses = "text-gray-600";
const cardClasses = "bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto transition-transform transform hover:scale-105";
const buttonClasses = "w-full bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md mt-4 transition-transform transform hover:scale-105";

const OrderDetail = ({ title, content }) => (
    <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
    >
        <h3 className={headingClasses}>{title}</h3>
        {content}
    </motion.div>
);

OrderDetail.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

const OrderConfirmation = () => (
    <motion.div
        className={cardClasses}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <h2 className="text-2xl font-bold mb-4 text-white">Order Confirmation</h2>
        <p className={`${textMutedClasses} mb-6`}>
            Thank you for your purchase! Your order details are below:
        </p>

        <OrderDetail
            title="Order Number"
            content={<p className="text-white">#123456789</p>}
        />

        <OrderDetail
            title="Shipping Address"
            content={
                <>
                    <p className={textMutedClasses}>John Doe</p>
                    <p className={textMutedClasses}>1234 Elm Street</p>
                    <p className={textMutedClasses}>Springfield, IL 62704</p>
                </>
            }
        />

        <OrderDetail
            title="Items Ordered"
            content={
                <ul className={`list-disc list-inside ${textMutedClasses}`}>
                    <li>Product 1 - $19.99</li>
                    <li>Product 2 - $29.99</li>
                    <li>Product 3 - $39.99</li>
                </ul>
            }
        />

        <OrderDetail
            title="Total Amount"
            content={<p className="text-white">$89.97</p>}
        />

        <button className={buttonClasses}>
            Track Order
        </button>
    </motion.div>
);

export default OrderConfirmation;
