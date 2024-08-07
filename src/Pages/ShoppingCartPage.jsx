
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShoppingCart from "../Components/ShoppingCart";
import CartItem from "../Components/CartItem";
import CheckOutButton from "../Components/CheckOutButton";
const ShoppingCartPage = () => {
    return (
        <div className="ShoppingCartPage">
            <Header />

            <ShoppingCart />
            <CartItem />
            <CheckOutButton />

            <Footer />
        </div>
    );
};

export default ShoppingCartPage;