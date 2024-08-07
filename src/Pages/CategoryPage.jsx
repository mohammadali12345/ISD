
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import ProductList from "../Components/ProductList";
// import FilterSortOption from "../Components/FilterSortOption";
import Category from "../Components/Category";
const CatergoryPage = () => {
    return (
        <div className="CategoryPage">
            <Header />
            <Category/>
            {/* <ProductList /> */}
            {/* <FilterSortOption/> */}

            <Footer />
        </div>
    )
}   

export default CatergoryPage