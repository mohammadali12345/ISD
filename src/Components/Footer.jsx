// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sharedClasses = {
    footer: "bg-gray-800 text-gray-300 py-10",
    container: "container mx-auto px-6 md:px-12",
    section: "flex flex-wrap justify-between mb-6",
    logo: "mb-4 w-40",
    description: "text-gray-400",
    heading: "text-xl font-semibold mb-4 text-gray-200",
    list: "space-y-2",
    link: "hover:text-primary transition-colors duration-300 ease-in-out",
    contact: "text-gray-400",
    socialIcons: "flex space-x-4 justify-center mt-8",
    socialIcon: "text-gray-300 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-110",
};

const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={sharedClasses.footer}>
            <div className={sharedClasses.container}>
                <div className={sharedClasses.section}>
                    {/* Company Information */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <img
                            src="https://img.freepik.com/free-vector/clothing-logo-template_23-2149505761.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid"
                            alt="Company Logo"
                            className={sharedClasses.logo}
                        />
                        <p className={sharedClasses.description}>
                            Providing quality services since 1990. Your satisfaction is our priority.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className={sharedClasses.heading}>Quick Links</h2>
                        <ul className={sharedClasses.list}>
                            <li><Link to="/" className={sharedClasses.link} onClick={handleLinkClick}>Home</Link></li>
                            <li><Link to="/about-us" className={sharedClasses.link} onClick={handleLinkClick}>About Us</Link></li>
                            <li><Link to="/contact-us" className={sharedClasses.link} onClick={handleLinkClick}>Contact</Link></li>
                            <li><Link to="/terms-and-condition" className={sharedClasses.link} onClick={handleLinkClick}>Terms and Conditions</Link></li>
                            <li><Link to="/privacy-policy" className={sharedClasses.link} onClick={handleLinkClick}>Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/3">
                        <h2 className={sharedClasses.heading}>Contact Us</h2>
                        <p className={sharedClasses.contact}>1234 Street Name, City, State, 12345</p>
                        <p className={sharedClasses.contact}>Email: info@company.com</p>
                        <p className={sharedClasses.contact}>Phone: (123) 456-7890</p>
                    </div>
                </div>

                {/* Social Media Icons */}
                {/* <motion.div
                    className={sharedClasses.socialIcons}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <a href="#" className={sharedClasses.socialIcon}>
                        <img aria-hidden="true" alt="facebook" src="https://openui.fly.dev/openui/24x24.svg?text=📘" />
                    </a>
                    <a href="#" className={sharedClasses.socialIcon}>
                        <img aria-hidden="true" alt="twitter" src="https://openui.fly.dev/openui/24x24.svg?text=🐦" />
                    </a>
                    <a href="#" className={sharedClasses.socialIcon}>
                        <img aria-hidden="true" alt="instagram" src="https://openui.fly.dev/openui/24x24.svg?text=📸" />
                    </a>
                    <a href="#" className={sharedClasses.socialIcon}>
                        <img aria-hidden="true" alt="linkedin" src="https://openui.fly.dev/openui/24x24.svg?text=🔗" />
                    </a>
                </motion.div> */}
            </div>
        </footer>
    );
};

export default Footer;
