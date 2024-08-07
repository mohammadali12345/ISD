import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../API/axiosInstance';

// Shared Tailwind CSS class strings
const cardClasses = "bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105";
const buttonClasses = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300";
const containerClasses = "min-h-screen bg-gray-100 text-gray-900 p-4";
const gridClasses = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
const loaderClasses = "flex items-center justify-center h-screen";

// ProductCard Component
const ProductCard = ({ product, onAddToCart }) => (
    <div className={cardClasses}>
        <img
            src={product.imageurl}
            alt={`Image of ${product.name}`}
            className="w-full h-48 object-cover"
            loading="lazy" // Lazy load images
        />
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-bold">${product.price}</span>
                <button
                    className={buttonClasses}
                    onClick={() => onAddToCart(product)}
                >
                    Buy Now
                </button>
            </div>
        </div>
    </div>
);

ProductCard.propTypes = {
    product: PropTypes.shape({
        productid: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number.isRequired,
        imageurl: PropTypes.string.isRequired,
        categoryid: PropTypes.number,
        brand: PropTypes.string,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

// ProductList Component
const ProductList = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const subcategory = params.get('subcategory');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/products', { params: { category, subcategory } });
                setProducts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, subcategory]);

    const handleAddToCart = async (product) => {
        const newCartItem = {
            customerid: 1, // Adjust based on actual user context
            productid: product.productid,
            quantity: 1,
            productname: product.name,
            productdescription: product.description,
            productprice: product.price,
            productimageurl: product.imageurl,
        };

        try {
            const response = await axiosInstance.post('/cart', newCartItem);
            console.log('Product added to cart:', response.data);
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert('Failed to add product to cart.');
        }
    };

    // Limit to 50 items
    const displayedProducts = products.slice(0, 50);

    return (
        <div className={containerClasses}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">Product List</h1>
                {loading ? (
                    <div className={loaderClasses}>
                        <p className="text-gray-600">Loading products...</p>
                    </div>
                ) : error ? (
                    <div className={loaderClasses}>
                        <p className="text-red-600">Error loading products: {error.message}</p>
                    </div>
                ) : (
                    <div className={gridClasses}>
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map(product => (
                                <ProductCard
                                    key={product.productid}
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No products found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
