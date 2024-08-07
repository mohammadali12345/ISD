import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const sharedClasses = {
    header: "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b border-transparent",
    container: "container mx-auto flex items-center justify-between p-4",
    logo: "flex items-center space-x-2",
    logoImage: "h-10 w-10 rounded-full shadow-md",
    logoText: "text-2xl font-bold",
    navDesktop: "hidden md:flex items-center justify-between flex-0.1",
    navItem: "text-white hover:text-yellow-300 transition-colors duration-300",
    searchInput: "bg-white text-gray-900 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105",
    mobileMenuButton: "md:hidden text-white hover:text-yellow-300 focus:outline-none transition-colors duration-300",
    mobileNav: "md:hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white border-t border-transparent",
    mobileNavItem: "block py-2 px-4 text-white hover:text-yellow-300 transition-colors duration-300",
    cartButton: "flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300",
    cartIcon: "w-6 h-6",
    modalOverlay: "fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center",
    modalContent: "bg-white rounded-lg shadow-lg p-6 w-full max-w-sm",
    closeButton: "absolute top-2 right-2 text-gray-500 hover:text-gray-700",
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <header className={sharedClasses.header}>
                <div className={sharedClasses.container}>
                    <div className={sharedClasses.logo}>
                        <img src="https://img.freepik.com/free-vector/clothing-logo-template_23-2149505761.jpg?ga=GA1.1.293560560.1714911958&semt=ais_hybrid" alt="Fashion Tech Logo" className={sharedClasses.logoImage} />
                        <span className={sharedClasses.logoText}>Fashion Tech</span>
                    </div>

                    <nav className={sharedClasses.navDesktop}>
                        <div className="flex flex-1 space-x-6">
                            <button onClick={() => handleNavigation('/')} className={sharedClasses.navItem}>Home</button>
                            <button onClick={() => handleNavigation('/about-us')} className={sharedClasses.navItem}>About</button>
                            <button onClick={() => handleNavigation('/category')} className={sharedClasses.navItem}>Category</button>
                            <button onClick={() => handleNavigation('/contact-us')} className={sharedClasses.navItem}>Contact</button>
                            <button onClick={() => handleNavigation('/login')} className={sharedClasses.navItem}>Login</button>
                            <button onClick={() => handleNavigation('/signUp')} className={sharedClasses.navItem}>Register</button>
                        </div>
                        <button onClick={() => handleNavigation('/shopping-cart')} className={sharedClasses.cartButton}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Cart Icon" className={sharedClasses.cartIcon} />
                            <span>My Shopping Cart</span>
                        </button>
                    </nav>

                    <button onClick={toggleMenu} className={sharedClasses.mobileMenuButton}>
                        <img aria-hidden="true" alt="menu-icon" src="https://openui.fly.dev/openui/24x24.svg?text=☰" />
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className={sharedClasses.mobileNav}>
                        <button onClick={() => handleNavigation('/')} className={sharedClasses.mobileNavItem}>Home</button>
                        <button onClick={() => handleNavigation('/about-us')} className={sharedClasses.mobileNavItem}>About</button>
                        <button onClick={() => handleNavigation('/category')} className={sharedClasses.mobileNavItem}>Category</button>
                        <button onClick={() => handleNavigation('/contact-us')} className={sharedClasses.mobileNavItem}>Contact</button>
                        <button onClick={() => handleNavigation('/login')} className={sharedClasses.mobileNavItem}>Login</button>
                        <button onClick={() => handleNavigation('/signUp')} className={sharedClasses.mobileNavItem}>Register</button>
                        <button onClick={() => handleNavigation('/shopping-cart')} className={sharedClasses.mobileNavItem}>My Shopping Cart</button>
                    </nav>
                )}
            </header>
        </>
    );
};

Header.propTypes = {
    isMenuOpen: PropTypes.bool,
    toggleMenu: PropTypes.func,
};

export default Header;
