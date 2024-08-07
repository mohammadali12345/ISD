    // src/pages/OrderList.jsx
    import { useState, useEffect } from 'react';
    import axiosInstance from '../../API/axiosInstance'; // Adjust path as needed

    const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    // Fetch all orders
    useEffect(() => {
        const fetchOrders = async () => {
        try {
            const response = await axiosInstance.get('/orders'); // Adjust the endpoint if necessary
            setOrders(response.data);
        } catch (error) {
            setError('Failed to fetch orders');
        }
        };

        fetchOrders();
    }, []);

    // Handle view details click
    const handleViewDetails = (orderId) => {
        // Navigate to order details page or show details in a modal
        console.log(`View details for order ID: ${orderId}`);
    };

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Order List</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div>
            <h2 className="text-xl font-bold mb-4">Orders</h2>
            <ul className="space-y-2">
            {orders.map((order) => (
                <li key={order.orderid} className="border p-4 rounded-md">
                <div><strong>Order ID:</strong> {order.orderid}</div>
                <div><strong>Customer ID:</strong> {order.customerid}</div>
                <div><strong>Status ID:</strong> {order.statusid}</div>
                <div><strong>Order Date:</strong> {new Date(order.orderdate).toLocaleDateString()}</div>
                <div><strong>Total Amount:</strong> ${order.totalamount.toFixed(2)}</div>
                <button
                    onClick={() => handleViewDetails(order.orderid)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
                >
                    View Details
                </button>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };

    export default OrderList;
