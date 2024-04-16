import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ecom from "../ecom/Ecom";
import Heading from "../ecom/Heading";
import EcomNavbar from "../ecom/Navbar";
import Register from "../ecom/Register";

const EcomRouter = () => {
  return (
    <BrowserRouter>
      <Heading />
      <EcomNavbar />
      <Routes>
        <Route exact path="/" element={<Ecom />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EcomRouter;
