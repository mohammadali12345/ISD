    // src/pages/UserList.jsx
    import  { useState, useEffect } from 'react';
    import axiosInstance from '../../API/axiosInstance'; // Adjust path as needed

    const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get('/users'); // Adjust the endpoint if necessary
            setUsers(response.data);
        } catch (error) {
            setError('Failed to fetch users');
        }
        };

        fetchUsers();
    }, []);

    // Handle view user details click
    const handleViewUser = (userId) => {
        // Navigate to user details page or show details in a modal
        console.log(`View details for user ID: ${userId}`);
    };

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((user) => (
            <div key={user.userid} className="border p-4 rounded-md shadow-sm">
                <h2 className="text-lg font-semibold">{user.username}</h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Registration Date: {new Date(user.registrationdate).toLocaleDateString()}</p>
                <button
                onClick={() => handleViewUser(user.userid)}
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

    export default UserList;
