    
    import PropTypes from 'prop-types';

    // Shared Tailwind class strings
    const buttonClasses = "flex items-center justify-center w-full px-4 py-2 rounded-lg";
    const iconClasses = "mr-2";

    const LoginButton = ({ bgColor, textColor, hoverColor, iconSrc, altText, children }) => {
    return (
        <button className={`${buttonClasses} ${bgColor} ${textColor} hover:${hoverColor}`}>
        <img aria-hidden="true" alt={altText} src={iconSrc} className={iconClasses} />
        <span>{children}</span>
        </button>
    );
    };

    LoginButton.propTypes = {
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
    };

    const LoginButtons = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
        <LoginButton
            bgColor="bg-primary"
            textColor="text-primary-foreground"
            hoverColor="bg-primary/80"
            iconSrc="https://openui.fly.dev/openui/24x24.svg?text=🔍"
            altText="Google icon"
        >
            Login with Google
        </LoginButton>
        <LoginButton
            bgColor="bg-secondary"
            textColor="text-secondary-foreground"
            hoverColor="bg-secondary/80"
            iconSrc="https://openui.fly.dev/openui/24x24.svg?text=📘"
            altText="Facebook icon"
        >
            Login with Facebook
        </LoginButton>
        <LoginButton
            bgColor="bg-accent"
            textColor="text-accent-foreground"
            hoverColor="bg-accent/80"
            iconSrc="https://openui.fly.dev/openui/24x24.svg?text=🐦"
            altText="Twitter icon"
        >
            Login with Twitter
        </LoginButton>
        </div>
    );
    };

    export default LoginButtons;
