import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../API/axiosInstance'; // Adjust path as needed
import StatsCard from '../Components/StatCard';
import ProductList from '../Components/Admin/ProductList';
import OrderList from '../Components/Admin/OrderList';
import UserList from '../Components/Admin/UserList';

const AdminDashboard = () => {
    const [stats, setStats] = useState({ totalProducts: 0, totalOrders: 0, totalUsers: 0 });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const role = localStorage.getItem('userRole');

    useEffect(() => {
        if (role !== 'admin') {
            navigate('/login');
            return;
        }

        const fetchDashboardData = async () => {
            try {
                const [productsResponse, ordersResponse, usersResponse] = await Promise.all([
                    axiosInstance.get('/products/count'),
                    axiosInstance.get('/orders/count'),
                    axiosInstance.get('/users/count')
                ]);

                setStats({
                    totalProducts: productsResponse.data.count,
                    totalOrders: ordersResponse.data.count,
                    totalUsers: usersResponse.data.count
                });
            } catch (error) {
                setError('Failed to fetch dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [navigate, role]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="text-red-500 mb-4">{error}</div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <StatsCard title="Total Products" value={stats.totalProducts} />
                        <StatsCard title="Total Orders" value={stats.totalOrders} />
                        <StatsCard title="Total Users" value={stats.totalUsers} />
                    </div>
                    <h2 className="text-xl font-bold mb-4">Product List</h2>
                    <ProductList />
                    <h2 className="text-xl font-bold mb-4">Order List</h2>
                    <OrderList />
                    <h2 className="text-xl font-bold mb-4">User List</h2>
                    <UserList />
                </>
            )}
        </div>
    );
};

export default AdminDashboard;
