import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ecom from "../ecom/Ecom";
import Navbar from "../ecom/Navbar";
import Heading from "../ecom/Heading";

const EcomRouter = () => {
  return (
    <BrowserRouter>
      <Heading />
      <Navbar />
      <Routes>
        <Route path="/" element={<Ecom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EcomRouter;
