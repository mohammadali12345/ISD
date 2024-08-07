
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Checkout from "../Components/Checkout";
import OrderSummary from "../Components/OrderSummary";
const CheckOutPage = () => {
    return (
        <div className="CheckOutPage">
            <Header />

            <Checkout/>
            <OrderSummary />

            <Footer />
        </div>
    );
};

export default CheckOutPage;