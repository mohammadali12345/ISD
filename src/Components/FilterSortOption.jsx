import { useState } from 'react';
import { motion } from 'framer-motion';

// Shared Tailwind class strings with enhanced colors and animations
const sharedClasses = {
    label: "text-sm font-medium text-gray-600",
    select: "bg-white text-gray-800 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300",
    button: "p-2 rounded-md font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105",
    container: "p-6 bg-gray-50 text-gray-900 rounded-lg shadow-lg max-w-md mx-auto border border-gray-200",
    flexBetween: "flex justify-between items-center mb-4",
    inputRange: "w-full bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
};

const FilterComponent = () => {
    const [sort, setSort] = useState('price-asc');
    const [category, setCategory] = useState('all');
    const [priceRange, setPriceRange] = useState(500);

    const handleApplyFilters = () => {
        // Logic to apply filters
        console.log({ sort, category, priceRange });
    };

    const handleClearFilters = () => {
        setSort('price-asc');
        setCategory('all');
        setPriceRange(500);
    };

    return (
        <div className={sharedClasses.container}>
            <div className={sharedClasses.flexBetween}>
                <label htmlFor="sort" className={sharedClasses.label}>Sort by:</label>
                <motion.select
                    id="sort"
                    className={sharedClasses.select}
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                </motion.select>
            </div>
            <div className="mb-4">
                <label htmlFor="category" className={sharedClasses.label}>Category:</label>
                <motion.select
                    id="category"
                    className={`${sharedClasses.select} w-full`}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                    <option value="beauty">Beauty</option>
                </motion.select>
            </div>
            <div className="mb-4">
                <label htmlFor="price-range" className={sharedClasses.label}>Price Range:</label>
                <input
                    type="range"
                    id="price-range"
                    min="0"
                    max="1000"
                    step="10"
                    className={sharedClasses.inputRange}
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                />
            </div>
            <div className="flex justify-between items-center">
                <motion.button
                    className={`bg-blue-600 text-white hover:bg-blue-700 ${sharedClasses.button}`}
                    onClick={handleApplyFilters}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Apply Filters
                </motion.button>
                <motion.button
                    className={`bg-red-600 text-white hover:bg-red-700 ${sharedClasses.button}`}
                    onClick={handleClearFilters}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Clear Filters
                </motion.button>
            </div>
        </div>
    );
};

export default FilterComponent;
