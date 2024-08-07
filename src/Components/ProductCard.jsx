    import PropTypes from 'prop-types';

    // Shared Tailwind class strings
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
    buttonHover: "hover:shadow-lg hover:scale-105"
    };

    // Image Component
    const ProductImage = ({ src, alt }) => (
    <img className={sharedClasses.image} src={src} alt={alt} />
    );

    ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    };

    // Title Component
    const ProductTitle = ({ title }) => (
    <h2 className={sharedClasses.title}>{title}</h2>
    );

    ProductTitle.propTypes = {
    title: PropTypes.string.isRequired,
    };

    // Description Component
    const ProductDescription = ({ description }) => (
    <p className={sharedClasses.description}>{description}</p>
    );

    ProductDescription.propTypes = {
    description: PropTypes.string.isRequired,
    };

    // Price Component
    const ProductPrice = ({ price, oldPrice }) => (
    <div className={sharedClasses.priceContainer}>
        <span className={sharedClasses.primaryText}>{price}</span>
        {oldPrice && <span className={sharedClasses.mutedText}>{oldPrice}</span>}
    </div>
    );

    ProductPrice.propTypes = {
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    };

    // Button Component
    const AddToCartButton = ({ onClick }) => (
    <button className={`${sharedClasses.button} ${sharedClasses.buttonHover}`} onClick={onClick}>
        Add to Cart
    </button>
    );

    AddToCartButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    };

    // Main Product Card Component
    const ProductCard = () => {
    const handleAddToCart = () => {
        // Handle add to cart logic here
        alert('Added to cart!');
    };

    return (
        <div className={sharedClasses.container}>
        <ProductImage src="https://placehold.co/600x400" alt="Product Image" />
        <div className={sharedClasses.padding}>
            <ProductTitle title="Product Title" />
            <ProductDescription description="This is a brief description of the product highlighting its features and benefits." />
            <ProductPrice price="$99.99" oldPrice="$129.99" />
            <AddToCartButton onClick={handleAddToCart} />
        </div>
        </div>
    );
    };

    export default ProductCard;
