
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductDetail from "../Components/ProductDetail";
import ProductReviews from "../Components/ProductReviews";
import AddToCart from "../Components/AddToCartButton";

const ProductDetailPage = () => {
    return (
        <div className="ProductDetailPage">
            <Header />

            <ProductDetail />
            <ProductReviews />
            <AddToCart/>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;