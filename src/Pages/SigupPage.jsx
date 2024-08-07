
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SignUp from "../Components/SignUp";
// import SocialLoginButtons from "../Components/SocialLoginButtons";
const SignUpPage = () => {
    return (
        <div className="Signup">
            <Header />
            <SignUp/>
            {/* <SocialLoginButtons/> */}
            <Footer />
        </div>
    )
}

export default SignUpPage