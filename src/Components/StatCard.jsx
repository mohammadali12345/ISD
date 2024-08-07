
import PropTypes from 'prop-types';

const StatsCard = ({ title, value }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
};

// Define prop types
StatsCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default StatsCard;
