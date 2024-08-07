import PropTypes from 'prop-types';

// Shared Tailwind CSS class strings
const SHARED_CLASSES = {
    cardContainer: 'p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl',
    userInfo: 'flex items-center mb-2',
    userImage: 'w-10 h-10 rounded-full mr-4 border border-gray-300',
    userName: 'text-lg font-semibold',
    userMeta: 'flex items-center',
    userReview: 'text-gray-200',
    container: 'max-w-2xl mx-auto p-4 bg-background text-foreground rounded-lg shadow-md'
};

// ReviewCard Component
const ReviewCard = ({ name, profilePic, rating, timeAgo, review }) => (
    <div className={SHARED_CLASSES.cardContainer}>
        <div className={SHARED_CLASSES.userInfo}>
            <img className={SHARED_CLASSES.userImage} src={profilePic} alt={`${name} profile picture`} />
            <div>
                <h3 className={SHARED_CLASSES.userName}>{name}</h3>
                <div className={SHARED_CLASSES.userMeta}>
                    <span className="text-yellow-300">{rating}</span>
                    <span className="ml-2 text-gray-400">{timeAgo}</span>
                </div>
            </div>
        </div>
        <p className={SHARED_CLASSES.userReview}>{review}</p>
    </div>
);

ReviewCard.propTypes = {
    name: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
};

// Sample review data
const reviews = [
    {
        id: 1,
        name: "John Doe",
        profilePic: "https://placehold.co/40x40",
        rating: "⭐⭐⭐⭐⭐",
        timeAgo: "2 days ago",
        review: "This product is amazing! It exceeded my expectations and I highly recommend it to everyone."
    },
    {
        id: 2,
        name: "Jane Smith",
        profilePic: "https://placehold.co/40x40",
        rating: "⭐⭐⭐⭐",
        timeAgo: "1 week ago",
        review: "Good product, but it took a while to arrive. Overall, I'm satisfied with my purchase."
    },
    {
        id: 3,
        name: "Alice Johnson",
        profilePic: "https://placehold.co/40x40",
        rating: "⭐⭐⭐⭐⭐",
        timeAgo: "3 weeks ago",
        review: "Excellent quality and fast shipping. Will definitely buy again!"
    }
];

// ProductReviews Component
const ProductReviews = () => (
    <div className={SHARED_CLASSES.container}>
        <h2 className="text-2xl font-semibold mb-4 text-white">Product Reviews</h2>
        <div className="space-y-6">
            {reviews.map(review => (
                <ReviewCard
                    key={review.id}
                    name={review.name}
                    profilePic={review.profilePic}
                    rating={review.rating}
                    timeAgo={review.timeAgo}
                    review={review.review}
                />
            ))}
        </div>
    </div>
);

export default ProductReviews;
