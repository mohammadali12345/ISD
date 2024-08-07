import Header from "../Components/Header";
import Banner from "../Components/Banner";
import FeaturedProducts from "../Components/FeaturedProducts";
import Promotions from "../Components/Promotions";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import AboutUs from "../Components/AboutUs";
import FAQ from "../Components/FAQList";
import ProductReviews from "../Components/ProductReviews";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <Slider />
            <FeaturedProducts />
            
            <Banner />
            
            <Promotions />
            <AboutUs />
            <ProductReviews/>
            <FAQ />
            <Footer />
        </div>
    );
};

export default HomePage;
