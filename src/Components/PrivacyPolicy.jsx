import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Shared Tailwind CSS class strings with enhanced styles
const sharedClasses = {
    container: "bg-white text-gray-800 p-8 max-w-4xl mx-auto my-8 rounded-lg shadow-lg",
    heading1: "text-4xl font-extrabold mb-6 text-gray-900",
    heading2: "text-2xl font-semibold mb-4 text-blue-700",
    paragraph: "mb-4 text-gray-700",
    list: "list-disc list-inside mb-4 text-gray-600",
    listItem: "mb-2"
};

// Section Component for titles and content with Framer Motion
const Section = ({ title, children }) => (
    <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <h2 className={sharedClasses.heading2}>{title}</h2>
        {children}
    </motion.div>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

// Main Privacy Policy Component with Framer Motion
const PrivacyPolicy = () => (
    <div className={sharedClasses.container}>
        <motion.h1
            className={sharedClasses.heading1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Privacy Policy
        </motion.h1>
        <motion.p
            className={sharedClasses.paragraph}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website,
            and other sites we own and operate.
        </motion.p>
        <Section title="Information We Collect">
            <motion.p
                className={sharedClasses.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                We only collect information about you if we have a reason to do so – for example, to provide our services, to communicate with you, or to make our services better.
            </motion.p>
            <ul className={sharedClasses.list}>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <strong>Personal Information:</strong> We may collect personal information such as your name, email address, and contact details.
                </motion.li>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <strong>Usage Data:</strong> We may collect information on how you access and use our services.
                </motion.li>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <strong>Cookies:</strong> We use cookies to track your activity on our website and hold certain information.
                </motion.li>
            </ul>
        </Section>
        <Section title="How We Use Information">
            <motion.p
                className={sharedClasses.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                We use the information we collect in various ways, including to:
            </motion.p>
            <ul className={sharedClasses.list}>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Provide, operate, and maintain our website
                </motion.li>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Improve, personalize, and expand our website
                </motion.li>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Understand and analyze how you use our website
                </motion.li>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Develop new products, services, features, and functionality
                </motion.li>
                <motion.li
                    className={sharedClasses.listItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Communicate with you, either directly or through our partners
                </motion.li>
            </ul>
        </Section>
        <Section title="Data Security">
            <motion.p
                className={sharedClasses.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                We take reasonable measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </motion.p>
        </Section>
        <Section title="Third-Party Services">
            <motion.p
                className={sharedClasses.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. Please review their privacy policies before providing any personal information.
            </motion.p>
        </Section>
        <Section title="Changes to This Policy">
            <motion.p
                className={sharedClasses.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </motion.p>
        </Section>
        <Section title="Contact Us">
            <motion.p
                className={sharedClasses.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
            </motion.p>
        </Section>
    </div>
);

export default PrivacyPolicy;
