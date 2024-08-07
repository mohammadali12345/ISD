    import PropTypes from 'prop-types';
    import { motion } from 'framer-motion';

    // Shared Tailwind class strings
    const SHARED_CLASSES = {
    textMutedForeground: 'text-gray-600',
    roundedFull: 'rounded-full mb-4',
    flexColCenter: 'flex flex-col items-center',
    buttonPrimary: 'bg-blue-600 text-white hover:bg-blue-700',
    };

    const AboutUs = () => (
    <div className="relative p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8 overflow-hidden bg-gray-100 text-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 opacity-50"></div>
        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
        <Header />
        <Description />
        <TeamMembers />
        <LearnMoreButton />
        </div>
    </div>
    );

    const Header = () => (
    <motion.h2
        className="text-4xl font-bold mb-6 text-center text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        About Us
    </motion.h2>
    );

    const Description = () => (
    <motion.p
        className={`${SHARED_CLASSES.textMutedForeground} mb-8 text-lg text-center`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        Welcome to our company! We are dedicated to providing the best services in the industry. Our team of professionals works tirelessly to meet and exceed your expectations. We believe in innovation, integrity, and customer satisfaction.
    </motion.p>
    );

    const TeamMembers = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <TeamMember
        imgSrc="https://via.placeholder.com/150"
        name="John Doe"
        position="CEO"
        />
        <TeamMember
        imgSrc="https://via.placeholder.com/150"
        name="Jane Smith"
        position="CTO"
        />
    </div>
    );

    const TeamMember = ({ imgSrc, name, position }) => (
    <motion.div
        className={SHARED_CLASSES.flexColCenter}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
    >
        <img src={imgSrc} alt={`team-member-${name}`} className={`w-32 h-32 ${SHARED_CLASSES.roundedFull} shadow-md`} />
        <h3 className="text-xl font-semibold mt-2">{name}</h3>
        <p className={`${SHARED_CLASSES.textMutedForeground} text-lg`}>{position}</p>
    </motion.div>
    );

    TeamMember.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    };

    const LearnMoreButton = () => (
    <div className="text-center">
        <motion.button
        className={`py-2 px-6 rounded-lg ${SHARED_CLASSES.buttonPrimary}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        >
        Learn More
        </motion.button>
    </div>
    );

    export default AboutUs;
