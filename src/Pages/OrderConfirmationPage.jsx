
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import OrderConfirmationDetail from '../Components/OrderConfirmationDetail';

const OrderConfirmationPage = () => {
    return (
        <div className="OrderConfirmationPage">
            <Header />

            <OrderConfirmationDetail />

            <Footer />
        </div>
    );
};

export default OrderConfirmationPage;