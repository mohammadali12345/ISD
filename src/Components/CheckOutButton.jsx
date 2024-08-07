    
    import PropTypes from 'prop-types';

    // Shared Tailwind CSS class strings
    const BUTTON_BASE_CLASSES = "py-2 px-4 rounded-lg transition-colors duration-200";
    const BUTTON_PRIMARY_CLASSES = "bg-primary text-primary-foreground hover:bg-primary/80";

    const CheckoutButton = ({ onClick }) => {
    return (
        <button
        className={`${BUTTON_BASE_CLASSES} ${BUTTON_PRIMARY_CLASSES}`}
        onClick={onClick}
        >
        Checkout
        </button>
    );
    };

    CheckoutButton.propTypes = {
    onClick: PropTypes.func, // Optional prop for handling click events
    };

    CheckoutButton.defaultProps = {
    onClick: () => {}, // Default empty function if no onClick prop is provided
    };

    export default CheckoutButton;
