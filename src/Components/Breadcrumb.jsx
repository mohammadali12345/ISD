    import PropTypes from 'prop-types';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const Breadcrumb = ({ links }) => (
    <nav className="flex items-center space-x-2 text-gray-500">
        {links.map((link, index) => (
        <span key={index} className="flex items-center">
            {link.to ? (
            <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <Link to={link.to} className="hover:text-gray-700 font-medium transition-colors duration-300">
                {link.label}
                </Link>
            </motion.div>
            ) : (
            <span className="font-semibold text-gray-800">{link.label}</span>
            )}
            {index < links.length - 1 && (
            <span className="text-gray-400 mx-2">/</span>
            )}
        </span>
        ))}
    </nav>
    );

    Breadcrumb.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string,
        })
    ).isRequired,
    };

    export default Breadcrumb;
