import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS class strings
const SHARED_CLASSES = {
    flexCenter: 'flex items-center justify-center',
    focusRing: 'focus:outline-none focus:ring-2 focus:ring-primary',
    buttonBase: 'p-2 rounded-r-lg hover:bg-primary/80 transition-colors duration-300 ease-in-out',
    inputBase: 'flex-1 p-3 border border-border rounded-l-lg focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out',
    container: 'w-full max-w-md p-6 bg-card rounded-lg shadow-lg',
    form: 'flex items-center gap-2',
    buttonIcon: 'w-6 h-6',
};

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // Call the callback with the search term
    };

    return (
        <form className={SHARED_CLASSES.form} onSubmit={handleSearchSubmit}>
            <input
                type="text"
                placeholder="Search for products..."
                className={`${SHARED_CLASSES.inputBase} bg-input text-foreground ${SHARED_CLASSES.focusRing}`}
                onChange={handleSearchChange}
                value={searchTerm}
            />
            <motion.button
                type="submit"
                className={`${SHARED_CLASSES.buttonBase} bg-primary text-primary-foreground ${SHARED_CLASSES.focusRing}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    aria-hidden="true"
                    alt="search-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
                    className={SHARED_CLASSES.buttonIcon}
                />
            </motion.button>
        </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired, // Expect a callback function to be provided
};

export default SearchBar;
