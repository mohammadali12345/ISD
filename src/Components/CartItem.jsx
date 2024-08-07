    import PropTypes from 'prop-types';

    // Shared Tailwind CSS class strings
    const CARD_CLASSES = "flex items-center p-4 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105";
    const BUTTON_CLASSES = "bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-lg transition-colors duration-300";
    const TEXT_CLASSES = "text-lg font-semibold text-gray-800";

    const ProductImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-24 h-24 rounded-lg mr-4 object-cover shadow-sm transition-transform transform hover:scale-110" />
    );

    ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    };

    const ProductDetails = ({ name, description, price, onRemove }) => (
    <div className="flex-1">
        <h2 className={TEXT_CLASSES}>{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center mt-2">
        <span className="text-blue-500 font-bold">{price}</span>
        <button className={`ml-auto ${BUTTON_CLASSES}`} onClick={onRemove}>Remove</button>
        </div>
    </div>
    );

    ProductDetails.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    };

    const ProductCard = ({ product, onRemove }) => (
    <div className={CARD_CLASSES}>
        <ProductImage src={product.image} alt="Product image" />
        <ProductDetails 
        name={product.name} 
        description={product.description} 
        price={product.price} 
        onRemove={onRemove} 
        />
    </div>
    );

    ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    };

    const App = () => {
    const product = {
        image: "https://placehold.co/100x100",
        name: "Product Name",
        description: "Product description goes here. It can be a brief summary of the product features.",
        price: "$99.99"
    };

    const handleRemove = () => {
        console.log("Remove button clicked");
    };

    return (
        <div className="p-4">
        <ProductCard product={product} onRemove={handleRemove} />
        </div>
    );
    };

    export default App;
