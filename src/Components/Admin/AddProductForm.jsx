    // src/pages/AddProductForm.jsx
    import  { useState } from 'react';
    import axiosInstance from '../../API/axiosInstance';

    const AddProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        categoryid: '',
        brand: '',
        imageurl: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        await axiosInstance.post('/products', product);
        setProduct({
            name: '',
            description: '',
            price: '',
            categoryid: '',
            brand: '',
            imageurl: '',
        });
        setError(null);
        alert('Product added successfully!');
        } catch (error) {
        setError('Failed to add product');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Category ID</label>
            <input
                type="text"
                name="categoryid"
                value={product.categoryid}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
                type="text"
                name="imageurl"
                value={product.imageurl}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
            {loading ? 'Adding...' : 'Add Product'}
            </button>
            {error && <div className="text-red-500">{error}</div>}
        </form>
        </div>
    );
    };

    export default AddProductForm;
