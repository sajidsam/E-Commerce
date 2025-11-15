import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";
import ProductsDetail from "../Pages/ProductsDetail";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminLayout from "../Admin/AdminLayout";
import AdminProducts from "../Admin/AdminProducts";
import AdminUser from "../Admin/AdminUser";
import PrivateRoute from "../Admin/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/productDetail" element={<ProductsDetail />} />

      <Route
        path="/admin/*"
        element={
          <PrivateRoute role="admin">
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="users" element={<AdminUser />} />
      </Route>

      
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
