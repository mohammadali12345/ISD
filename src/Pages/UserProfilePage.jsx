
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserProfile from "../Components/UserProfile";
import OrderHistory from "../Components/OrderHistory";
const UserProfilePage = () => {
    return (
        <div className="UserProfilePage">
            <Header />

            <UserProfile />
            <OrderHistory />
            <Footer/>
        </div>
    );
};

export default UserProfilePage;