    // src/pages/Dashboard.jsx
    import  { useEffect, useState } from 'react';
    import axios from '../../API/axiosInstance';

    const Dashboard = () => {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdmins = async () => {
        try {
            const response = await axios.get('http://localhost:3000/admins');
            setAdmins(response.data);
        } catch (error) {
            setError('Failed to fetch admins');
        } finally {
            setLoading(false);
        }
        };

        fetchAdmins();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Email</th>
            </tr>
            </thead>
            <tbody>
            {admins.map(admin => (
                <tr key={admin.id}>
                <td className="py-2 px-4 border-b">{admin.id}</td>
                <td className="py-2 px-4 border-b">{admin.username}</td>
                <td className="py-2 px-4 border-b">{admin.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default Dashboard;
