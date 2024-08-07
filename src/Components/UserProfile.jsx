import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind class strings
const containerClass = "bg-gray-100 text-gray-800 p-8 max-w-4xl mx-auto rounded-lg shadow-lg";
const profileClass = "flex items-center space-x-6 mb-8 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105";
const orderCardClass = "bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105";
const textMutedClass = "text-gray-600";


// Animation settings
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};



// Component for user profile
const UserProfile = ({ name, email, profilePicture }) => (
    <motion.div
        className={profileClass}
        initial="hidden"
        animate="visible"
        variants={slideUp}
        transition={{ duration: 0.6 }}
    >
        <img className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-lg" src={profilePicture} alt="User profile picture" />
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">{name}</h2>
            <p className={textMutedClass}>{email}</p>
        </div>
    </motion.div>
);

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
};

// Component for order item
const OrderItem = ({ item }) => (
    <motion.li
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-gray-700"
    >
        {item}
    </motion.li>
);

OrderItem.propTypes = {
    item: PropTypes.string.isRequired,
};

// Component for order card
const OrderCard = ({ order }) => (
    <motion.div
        className={orderCardClass}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
    >
        <div className="flex justify-between items-center mb-4">
            <div>
                <h4 className="text-lg font-semibold text-gray-800">{order.id}</h4>
                <p className={textMutedClass}>Placed on: {order.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full ${order.statusClass}`}>{order.status}</span>
        </div>
        <div>
            <p className={textMutedClass}>Items:</p>
            <ul className="list-disc list-inside space-y-1">
                {order.items.map((item, index) => (
                    <OrderItem key={index} item={item} />
                ))}
            </ul>
        </div>
    </motion.div>
);

OrderCard.propTypes = {
    order: PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        statusClass: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

// Component for order history
const OrderHistory = ({ orders }) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
    >
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Order History</h3>
        <div className="space-y-4">
            {orders.map((order, index) => (
                <OrderCard key={index} order={order} />
            ))}
        </div>
    </motion.div>
);

OrderHistory.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        statusClass: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};

// Main UserProfilePage component
const UserProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        profilePicture: "https://placehold.co/96x96"
    };

    const orders = [
        {
            id: "Order #12345",
            date: "2023-09-15",
            status: "Delivered",
            statusClass: "bg-green-200 text-green-800",
            items: ["Product A - $20.00", "Product B - $35.00"]
        },
        {
            id: "Order #12344",
            date: "2023-08-30",
            status: "Shipped",
            statusClass: "bg-yellow-200 text-yellow-800",
            items: ["Product C - $15.00", "Product D - $25.00"]
        }
    ];

    return (
        <motion.div
            className={containerClass}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
        >
            <UserProfile {...user} />
            <OrderHistory orders={orders} />
        </motion.div>
    );
};

export default UserProfilePage;
