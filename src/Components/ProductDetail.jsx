import PropTypes from 'prop-types';

// Shared Tailwind CSS class strings
const containerClasses = "max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg";
const flexClasses = "flex flex-col md:flex-row gap-6";
const buttonClasses = "py-2 px-4 rounded-lg font-semibold transition-colors";

// ProductImage Component
const ProductImage = ({ src, alt }) => (
    <div className="flex-shrink-0">
        <img src={src} alt={alt} className="w-full h-auto rounded-lg border border-gray-300" />
    </div>
);

ProductImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

// ProductTitle Component
const ProductTitle = ({ title }) => (
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
);

ProductTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

// ProductDescription Component
const ProductDescription = ({ description }) => (
    <p className="text-gray-200 mb-4">{description}</p>
);

ProductDescription.propTypes = {
    description: PropTypes.string.isRequired,
};

// ProductPrice Component
const ProductPrice = ({ price }) => (
    <div className="mb-4">
        <span className="text-3xl font-semibold text-yellow-300">{price}</span>
    </div>
);

ProductPrice.propTypes = {
    price: PropTypes.string.isRequired,
};

// ProductButtons Component
const ProductButtons = () => (
    <div className="flex items-center mb-4 space-x-4">
        <button className={`bg-yellow-400 text-white hover:bg-yellow-300 ${buttonClasses}`}>Add to Cart</button>
        <button className={`bg-green-500 text-white hover:bg-green-400 ${buttonClasses}`}>Buy Now</button>
    </div>
);

// ProductDetails Component
const ProductDetails = ({ details }) => (
    <div>
        <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
        <ul className="list-disc list-inside text-gray-200">
            {details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
        </ul>
    </div>
);

ProductDetails.propTypes = {
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// ProductCard Component
const ProductCard = () => {
    const product = {
        imageSrc: "https://placehold.co/400x400",
        imageAlt: "Product Image",
        name: "Product Name",
        description: "This is a brief description of the product. It highlights the key features and benefits, making it appealing to potential buyers.",
        price: "$99.99",
        details: [
            "Feature 1: Description of feature 1.",
            "Feature 2: Description of feature 2.",
            "Feature 3: Description of feature 3."
        ]
    };

    return (
        <div className={containerClasses}>
            <div className={flexClasses}>
                <ProductImage src={product.imageSrc} alt={product.imageAlt} />
                <div className="flex-1">
                    <ProductTitle title={product.name} />
                    <ProductDescription description={product.description} />
                    <ProductPrice price={product.price} />
                    <ProductButtons />
                    <ProductDetails details={product.details} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
