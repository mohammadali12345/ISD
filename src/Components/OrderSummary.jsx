import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS class strings
const SHARED_CLASSES = {
    container: 'max-w-md mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg',
    heading: 'text-2xl font-semibold mb-4 text-white',
    row: 'flex justify-between mb-4',
    label: 'text-gray-300',
    value: 'font-medium text-yellow-300',
    totalRow: 'flex justify-between mb-6 border-t border-gray-500 pt-4',
    totalLabel: 'font-semibold text-yellow-300',
    button: 'w-full bg-yellow-500 text-yellow-800 py-2 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105'
};

// Component for individual rows
const SummaryRow = ({ label, value }) => (
    <div className={SHARED_CLASSES.row}>
        <span className={SHARED_CLASSES.label}>{label}</span>
        <span className={SHARED_CLASSES.value}>{value}</span>
    </div>
);

SummaryRow.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

// Main OrderSummary component
const OrderSummary = () => {
    return (
        <motion.div
            className={SHARED_CLASSES.container}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)' }}
        >
            <h2 className={SHARED_CLASSES.heading}>Order Summary</h2>
            <SummaryRow label="Subtotal" value="$79.99" />
            <SummaryRow label="Shipping" value="$5.99" />
            <SummaryRow label="Tax" value="$6.40" />
            <div className={SHARED_CLASSES.totalRow}>
                <span className={SHARED_CLASSES.totalLabel}>Total</span>
                <span className={SHARED_CLASSES.totalLabel}>$92.38</span>
            </div>
            <button className={SHARED_CLASSES.button}>Proceed to Checkout</button>
        </motion.div>
    );
};

export default OrderSummary;
