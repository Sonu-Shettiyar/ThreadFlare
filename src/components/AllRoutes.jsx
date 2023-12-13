import { Route,Routes } from "react-router-dom";
import LandingPage from "./landing";
import Product from "./product";
import SingleProduct from "./singleProductpage";
import WomenProduct from "./ProductWomen";
import Login from "./Login";
import Signup from "./signup";
import Success from "./success";

function AllRoutes(){
    return(
        <>
        <Routes>
            
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/products/women" element={<WomenProduct/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/PaymentSuccessfull" element={<Success/>}/>
            <Route path="/products/women/:category" element={<WomenProduct/>}/>
            <Route path="/products/men" element={<Product/>}/>
            <Route path="/products/men/:category" element={<Product/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes;
