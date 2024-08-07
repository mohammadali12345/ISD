// src/App.js

// import React from 'react';


// import ProductCard from './Components/ProductCard';
import {  Route, Routes } from 'react-router-dom';
// import Pagination from './Components/Pagination';
// import Footer from './Components/Footer';
// // import Nav from './Components/Nav';
// // import Category from './Components/Category';
// // import Header from './Components/Header';
// // import Carousel from './Components/Carousel';
// // import ProductCard from './Components/ProductCard';


// import ShoppingCart from './Components/ShoppingCart';
// import Checkout from './Components/Checkout';
// import UserProfile from './Components/UserProfile';

// import SearchBar from './Components/SearchBar';
// import FilterSortOption from './Components/FilterSortOption';
// import Login from './Components/Login';

// import SignUp from './Components/SignUp';

// import Banner from './Components/Banner';
// // import FeaturedProducts from './Components/FeaturedProducts';
// import Promotions from './Components/Promotions';
// import SocialLoginButtons from './Components/SocialLoginButtons';
// // import ProductDetail from './Components/ProductDetail';
// // import ProductReviews from './Components/ProductReviews';
// import AddToCartButton from './Components/AddToCartButton';
// import CartItem from './Components/CartItem';
// import OrderSummary from './Components/OrderSummary';
// import OrderHistory from './Components/OrderHistory';
// import WishList from './Components/WishList';

// import WishListItem from './Components/WishListItem';

// import OrderConfirmationDetail from './Components/OrderConfirmationDetail';
// import AboutUs from './Components/AboutUs';
// import ContactUs from './Components/ContactUs';
// import FAQList from './Components/FAQList';
// import ErrorMessage from './Components/ErrorMessage';
// import PrivacyPolicy from './Components/PrivacyPolicy';
// import TermsAndConditions from './Components/TermsCondition';

import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import HomePage from './Pages/HomePage';
import WishListPage from './Pages/WishListPage';
import SignUpPage from './Pages/SigupPage';
import LoginPage from './Pages/LoginPage';
import TermsAndConditionPage from './Pages/TermsAndConditionPage';
import ProductListPage from './Pages/ProductListPage';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import SearchResultPage from './Pages/SearchResultPage';
import CheckoutPage from './Pages/CheckOutPage';
// import Slider from './Components/Slider';
import CategoryPage from './Pages/CategoryPage';
import UserProfilePage from './Pages/UserProfilePage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import FAQPage from './Pages/FAQPage';
import ErrorPage from './Pages/ErrorPage(404)';
import ProductDetailPage from './Pages/ProductDetailPage';
import { CartProvider } from './Components/CartContext';
// import Sidebar from './Components/Admin/Sidebar';
// import AddProductForm from './Components/Admin/AddProductForm';
// import OrderDetails from './Components/Admin/OrderDetails';
// import OrderList from './Components/Admin/OrderList';
// import ProductList from './Components/Admin/ProductList';
// import Dashboard from './Components/Admin/Dashboard';
// import UserList from './Components/Admin/UserList';
import AdminDashboard from './Pages/AdminDashboard';


const App = () => {
  return (
    <div className="App">
      <CartProvider>
      {/* <Router> */}
      
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/wish-list" element={<WishListPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/terms-and-condition" element={<TermsAndConditionPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/check-out" element={<CheckoutPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/error-message" element={<ErrorPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
          
        Define other routes here
      </Routes>
        {/* </Router> */}
        {/* <Sidebar />
        <AddProductForm />
        <Dashboard />
        <OrderDetails />
        <ProductList />
        <UserList />
        <OrderList /> */}
        

        
          
        
      
      
      
      {/* <OrderSummary/> */}
      

  
      
    
      
      {/* <Checkout/>
      <ShoppingCart/> */}
      {/* <ProductCard/> */}
      
    
      
      
        
      
      
      {/* <Footer /> */}
      </CartProvider>,
    </div>
  );
};

export default App;
