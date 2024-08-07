
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";
import SearchBar from "../Components/SearchBar";
const SearchResultPage = () => {

    return (
        <div className="SearchResultPage">
            <Header />
            <ProductList />
            <SearchBar />
            <Footer />
        </div>
    );
};

export default SearchResultPage;