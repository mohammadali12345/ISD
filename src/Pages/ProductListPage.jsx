
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";
import FilterSortOption from "../Components/FilterSortOption";
import Pagination from "../Components/Pagination";

const ProductListPage = () => {
    return (
        <div className="ProductListPage">
            <Header />
            <ProductList />
            <FilterSortOption />
            <Pagination/>
            <Footer />
        </div>
    );
};

export default ProductListPage;