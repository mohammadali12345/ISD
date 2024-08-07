
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import WishList from "../Components/WishList"
import WishListItem from "../Components/WishListItem"
const WishListPage = () => {
    return (
        <div className="WishListPage">
            <Header />

            <WishList />
            <WishListItem />

            <Footer />
        </div>
    )
}

export default WishListPage
