    import PropTypes from 'prop-types';
    import { motion } from 'framer-motion';

    // Shared Tailwind class strings
    const cardContainerClasses = "max-w-sm mx-auto bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105";
    const textMutedForegroundClasses = "text-gray-600 mb-4";
    const buttonClasses = "bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300";

    // Animation settings
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const bounceIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    // Component for product image
    const ProductImage = ({ src, alt }) => (
        <motion.img
            className="w-full h-48 object-cover"
            src={src}
            alt={alt}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
        />
    );

    ProductImage.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    };

    // Component for product title
    const ProductTitle = ({ title }) => (
        <motion.h2
            className="text-2xl font-semibold mb-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {title}
        </motion.h2>
    );

    ProductTitle.propTypes = {
        title: PropTypes.string.isRequired,
    };

    // Component for product description
    const ProductDescription = ({ description }) => (
        <motion.p
            className={textMutedForegroundClasses}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {description}
        </motion.p>
    );

    ProductDescription.propTypes = {
        description: PropTypes.string.isRequired,
    };

    // Component for product price
    const ProductPrice = ({ price }) => (
        <motion.span
            className="text-blue-500 font-bold"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            {price}
        </motion.span>
    );

    ProductPrice.propTypes = {
        price: PropTypes.string.isRequired,
    };

    // Component for Add to Cart button
    const AddToCartButton = ({ onClick }) => (
        <motion.button
            className={buttonClasses}
            onClick={onClick}
            initial="hidden"
            animate="visible"
            variants={bounceIn}
            transition={{ duration: 0.4, delay: 0.8 }}
        >
            Add to Cart
        </motion.button>
    );

    AddToCartButton.propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    // Main ProductCard component
    const ProductCard = ({ product }) => {
        const handleAddToCart = () => {
            // Handle add to cart logic here
            console.log(`${product.title} added to cart`);
        };

        return (
            <motion.div className={cardContainerClasses}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
            >
                <ProductImage src={product.image} alt={product.title} />
                <div className="p-4">
                    <ProductTitle title={product.title} />
                    <ProductDescription description={product.description} />
                    <div className="flex items-center justify-between mt-4">
                        <ProductPrice price={product.price} />
                        <AddToCartButton onClick={handleAddToCart} />
                    </div>
                </div>
            </motion.div>
        );
    };

    ProductCard.propTypes = {
        product: PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        }).isRequired,
    };

    // Example usage
    const App = () => {
        const product = {
            image: "https://placehold.co/400x300",
            title: "Product Title",
            description: "This is a brief description of the product. It highlights key features and benefits to entice the user.",
            price: "$99.99"
        };

        return <ProductCard product={product} />;
    };

    export default App;
