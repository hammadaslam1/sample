import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ecom from "../ecom/Ecom";
import Heading from "../ecom/Heading";
import EcomNavbar from "../ecom/Navbar";
import Register from "../ecom/Register";
import Login from "../ecom/Login";
import AddProduct from "../ecom/AddProduct";
import ProductList from "../ecom/ProductList";

const EcomRouter = () => {
  return (
    <BrowserRouter>
      <Heading />
      <EcomNavbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EcomRouter;
