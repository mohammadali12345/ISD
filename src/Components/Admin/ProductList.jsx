    // src/pages/ProductList.jsx
    import  { useState, useEffect } from 'react';
    import axiosInstance from '../../API/axiosInstance'; // Adjust path as needed

    const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    // Fetch all products
    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await axiosInstance.get('/products'); // Adjust the endpoint if necessary
            setProducts(response.data);
        } catch (error) {
            setError('Failed to fetch products');
        }
        };

        fetchProducts();
    }, []);

    // Handle view product details click
    const handleViewProduct = (productId) => {
        // Navigate to product details page or show details in a modal
        console.log(`View details for product ID: ${productId}`);
    };

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
            <div key={product.productid} className="border p-4 rounded-md shadow-sm">
                <img
                src={product.imageurl || 'https://via.placeholder.com/150'}
                alt={product.name}
                className="w-full h-48 object-cover mb-2 rounded-md"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <button
                onClick={() => handleViewProduct(product.productid)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
                >
                View Details
                </button>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default ProductList;
