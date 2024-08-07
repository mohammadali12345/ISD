    // src/components/Admin/Sidebar.jsx
    
    import { Link } from 'react-router-dom';

    const Sidebar = () => {
    return (
        <div className="sidebar bg-gray-800 text-white w-64 h-full fixed top-0 left-0 p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
            <li>
            <Link to="/admin/products" className="block py-2 px-4 hover:bg-gray-700 rounded">Products</Link>
            </li>
            <li>
            <Link to="/admin/orders" className="block py-2 px-4 hover:bg-gray-700 rounded">Orders</Link>
            </li>
            <li>
            <Link to="/admin/users" className="block py-2 px-4 hover:bg-gray-700 rounded">Users</Link>
            </li>
            <li>
            <Link to="/admin/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</Link>
            </li>
        </ul>
        </div>
    );
    };

    export default Sidebar;
