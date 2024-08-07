import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS classes
const sharedClasses = {
    container: "bg-gray-100 p-8 rounded-lg shadow-xl max-w-6xl mx-auto",
    header: "text-4xl font-extrabold text-gray-900 mb-8 text-center",
    section: "mb-12",
    sectionHeader: "text-3xl font-bold text-gray-800 mb-6",
    grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
    card: "bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out",
    cardImage: "w-32 h-32 mb-4 object-cover rounded-full border-2 border-gray-200",
    cardText: "text-xl font-semibold text-gray-800",
};

// CategoryCard Component
const CategoryCard = ({ imgSrc, altText, categoryName, gender }) => {
    const handleClick = () => {
        window.location.href = `/product-list?category=${encodeURIComponent(categoryName)}&gender=${encodeURIComponent(gender)}`;
    };

    return (
        <motion.div
            className={sharedClasses.card}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick} // Add click event handler
        >
            <img src={imgSrc} alt={altText} className={sharedClasses.cardImage} />
            <span className={sharedClasses.cardText}>{categoryName}</span>
        </motion.div>
    );
};

CategoryCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired, // Add gender prop validation
};

// Main Component
const ClothesCategories = () => {
    const categories = {
        men: [
            { imgSrc: "https://img.freepik.com/premium-photo/man-wearing-grey-sweater-sweater-with-bow-tie-it_869640-172349.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👖", altText: "Pants category", categoryName: "Pants" },
            { imgSrc: "https://img.freepik.com/free-photo/young-curly-man-sitting-studio-chair-isolated-white-wall_231208-1181.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👖", altText: "Jeans category", categoryName: "Jeans" },
            { imgSrc: "https://img.freepik.com/free-photo/man-choosing-foot-wear-mens-store_1303-30841.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👟", altText: "Shoes category", categoryName: "Shoes" },
            { imgSrc: "https://img.freepik.com/free-photo/asian-fashion-model-photography_1409-5385.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid", altText: "T-Shirts category", categoryName: "T-Shirts" },
            { imgSrc: "https://img.freepik.com/free-photo/shirt_1203-8183.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👔", altText: "Shirts category", categoryName: "Shirts" },
        ],
        women: [
            { imgSrc: "https://img.freepik.com/free-photo/blue-line-loose-pants-women-s-apparel_53876-102870.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👖", altText: "Pants category", categoryName: "Pants" },
            { imgSrc: "https://img.freepik.com/free-photo/woman-shirt-posing-with-crossed-arms-looking-camera-isolated-gray-wall_231208-1376.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👖", altText: "Jeans category", categoryName: "Jeans" },
            { imgSrc: "https://img.freepik.com/free-photo/fashion-pink-glamour-women-heels_1203-6509.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👟", altText: "Shoes category", categoryName: "Shoes" },
            { imgSrc: "https://img.freepik.com/premium-photo/womens-white-short-sleeve-round-neck-tshirt-mockup-it-is-useful-tool-clothing-designers-help-visualize-tshirts-before-actual-production-save-time-money-makes-it-easier-decide_34046-5998.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👕", altText: "T-Shirts category", categoryName: "T-Shirts" },
            { imgSrc: "https://img.freepik.com/free-photo/business-woman-evening-street_1303-3826.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👔", altText: "Shirts category", categoryName: "Shirts" },
            { imgSrc: "https://img.freepik.com/free-photo/unsure-young-female-model-holding-hangers-with-two-dresses-preparing-party_197531-7072.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👗", altText: "Dresses category", categoryName: "Dresses" },
        ],
        kids: [
            { imgSrc: "https://img.freepik.com/free-photo/blonde-kids-tee-with-sweat-pants_53876-96273.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👖", altText: "Pants category", categoryName: "Pants" },
            { imgSrc: "https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-21552.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👖", altText: "Jeans category", categoryName: "Jeans" },
            { imgSrc: "https://img.freepik.com/free-photo/baby-shoes_1203-6837.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👟", altText: "Shoes category", categoryName: "Shoes" },
            { imgSrc: "https://img.freepik.com/premium-photo/child-sits-rug-with-shirt-that-says-happy-birthday_662214-22147.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid👕", altText: "T-Shirts category", categoryName: "T-Shirts" },
            { imgSrc: "https://img.freepik.com/premium-photo/cotton-shirts-with-shorts-stylish-baby-clothes-accessories-summer-fashion-kids-outfit_629685-25373.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid", categoryName: "Shirts" },
        ],
    };

    return (
        <div className={sharedClasses.container}>
            <h1 className={sharedClasses.header}>Clothes Categories</h1>
            
            <section className={sharedClasses.section}>
                <h2 className={sharedClasses.sectionHeader}>Men</h2>
                <div className={sharedClasses.grid}>
                    {categories.men.map((category, index) => (
                        <CategoryCard
                            key={index}
                            imgSrc={category.imgSrc}
                            altText={category.altText}
                            categoryName={category.categoryName}
                            gender="men" // Pass gender prop
                        />
                    ))}
                </div>
            </section>

            <section className={sharedClasses.section}>
                <h2 className={sharedClasses.sectionHeader}>Women</h2>
                <div className={sharedClasses.grid}>
                    {categories.women.map((category, index) => (
                        <CategoryCard
                            key={index}
                            imgSrc={category.imgSrc}
                            altText={category.altText}
                            categoryName={category.categoryName}
                            gender="women" // Pass gender prop
                        />
                    ))}
                </div>
            </section>

            <section className={sharedClasses.section}>
                <h2 className={sharedClasses.sectionHeader}>Kids</h2>
                <div className={sharedClasses.grid}>
                    {categories.kids.map((category, index) => (
                        <CategoryCard
                            key={index}
                            imgSrc={category.imgSrc}
                            altText={category.altText}
                            categoryName={category.categoryName}
                            gender="kids" // Pass gender prop
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClothesCategories;
