    // src/pages/OrderDetails.jsx
    import  { useState, useEffect } from 'react';
    import axiosInstance from '../../API/axiosInstance';

    const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [selectedOrderDetail, setSelectedOrderDetail] = useState(null);
    const [form, setForm] = useState({ orderId: '', productId: '', quantity: '', price: '' });
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all order details
    useEffect(() => {
        const fetchOrderDetails = async () => {
        try {
            const response = await axiosInstance.get('/order-details');
            setOrderDetails(response.data);
        } catch (error) {
            setError('Failed to fetch order details');
        }
        };

        fetchOrderDetails();
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Handle add order detail
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
        await axiosInstance.post('/order-details', form);
        setForm({ orderId: '', productId: '', quantity: '', price: '' });
        setEditing(false);
        setError(null);
        // Refresh order details list
        const response = await axiosInstance.get('/order-details');
        setOrderDetails(response.data);
        } catch (error) {
        setError('Failed to add order detail');
        }
    };

    // Handle update order detail
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
        await axiosInstance.put(`/order-details/${selectedOrderDetail.id}`, form);
        setForm({ orderId: '', productId: '', quantity: '', price: '' });
        setEditing(false);
        setError(null);
        // Refresh order details list
        const response = await axiosInstance.get('/order-details');
        setOrderDetails(response.data);
        } catch (error) {
        setError('Failed to update order detail');
        }
    };

    // Handle delete order detail
    const handleDelete = async (id) => {
        try {
        await axiosInstance.delete(`/order-details/${id}`);
        // Refresh order details list
        const response = await axiosInstance.get('/order-details');
        setOrderDetails(response.data);
        } catch (error) {
        setError('Failed to delete order detail');
        }
    };

    // Handle edit click
    const handleEditClick = (orderDetail) => {
        setForm({
        orderId: orderDetail.orderId,
        productId: orderDetail.productId,
        quantity: orderDetail.quantity,
        price: orderDetail.price,
        });
        setSelectedOrderDetail(orderDetail);
        setEditing(true);
    };

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={editing ? handleUpdate : handleAdd} className="space-y-4 mb-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Order ID</label>
            <input
                type="text"
                name="orderId"
                value={form.orderId}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Product ID</label>
            <input
                type="text"
                name="productId"
                value={form.productId}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
                type="number"
                step="0.01"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            </div>
            <button
            type="submit"
            className={`px-4 py-2 ${editing ? 'bg-green-500' : 'bg-blue-500'} text-white rounded-md`}
            >
            {editing ? 'Update Order Detail' : 'Add Order Detail'}
            </button>
        </form>
        <div>
            <h2 className="text-xl font-bold mb-4">Order Details List</h2>
            <ul className="space-y-2">
            {orderDetails.map((orderDetail) => (
                <li key={orderDetail.id} className="border p-4 rounded-md">
                <div><strong>Order ID:</strong> {orderDetail.orderId}</div>
                <div><strong>Product ID:</strong> {orderDetail.productId}</div>
                <div><strong>Quantity:</strong> {orderDetail.quantity}</div>
                <div><strong>Price:</strong> ${orderDetail.price.toFixed(2)}</div>
                <button
                    onClick={() => handleEditClick(orderDetail)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded-md mt-2 mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(orderDetail.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md mt-2"
                >
                    Delete
                </button>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };

    export default OrderDetails;
