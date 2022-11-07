import React from "react";
import { Routes, Route } from "react-router";

import ProductList from "../components/ProductList";
import Favourite from "../pages/Favourite/Favourite";
import Pagenotfound from "../pages/Pagenotfound/Pagenotfound";
import Cart from "../pages/Cart/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
};

export default AppRoutes;
