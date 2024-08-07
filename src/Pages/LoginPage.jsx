
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Login from "../Components/Login";
// import SocialLoginButtons from "../Components/SocialLoginButtons";
const LoginPage = () => {
    return (
        <div className="loginpage">
            <Header />
            <Login />
            {/* <SocialLoginButtons /> */}
            <Footer />
        </div>
    );
};

export default LoginPage;