import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS class strings
const SHARED_CLASSES = {
    cardContainer: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg flex justify-between items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl',
    productImage: 'w-16 h-16 rounded-lg border border-gray-300',
    productInfo: 'flex items-center space-x-4',
    productName: 'text-lg font-semibold',
    orderDate: 'text-gray-300',
    price: 'text-yellow-300 font-bold',
};

// Mock order data
const orders = [
    {
        id: 1,
        productName: 'Product Name',
        orderDate: '2023-10-01',
        price: '$49.99',
        imageUrl: 'https://placehold.co/60x60',
    },
    {
        id: 2,
        productName: 'Product Name',
        orderDate: '2023-09-15',
        price: '$29.99',
        imageUrl: 'https://placehold.co/60x60',
    },
    {
        id: 3,
        productName: 'Product Name',
        orderDate: '2023-08-22',
        price: '$19.99',
        imageUrl: 'https://placehold.co/60x60',
    },
];

// OrderCard component to display individual order details
const OrderCard = ({ order }) => (
    <motion.div
        className={SHARED_CLASSES.cardContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
    >
        <div className={SHARED_CLASSES.productInfo}>
            <img src={order.imageUrl} alt="Product Image" className={SHARED_CLASSES.productImage} />
            <div>
                <h3 className={SHARED_CLASSES.productName}>{order.productName}</h3>
                <p className={SHARED_CLASSES.orderDate}>Order Date: {order.orderDate}</p>
            </div>
        </div>
        <div>
            <p className={SHARED_CLASSES.price}>{order.price}</p>
        </div>
    </motion.div>
);

OrderCard.propTypes = {
    order: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        orderDate: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

// OrderHistory component to display a list of OrderCard components
const OrderHistory = () => (
    <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="space-y-4">
            {orders.map(order => (
                <OrderCard key={order.id} order={order} />
            ))}
        </div>
    </div>
);

export default OrderHistory;
