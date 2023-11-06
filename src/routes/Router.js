import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

/* Layout */
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import UserLayout from "../layout/UserLayout/UserLayout";

/* Page */
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import UserPage from "../pages/UserPage/UserPage";
/* Component */
import Login from "../features/Login/Login";
import Register from "../features/Register/Register";
import MovieAdmin from "../pages/MovieAdmin/MovieAdmin";
import Booking from "../pages/Booking/Booking";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Home" element={<Navigate to="/" />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Route>

        {/* User */}
        <Route path="/User" element={<UserLayout />}>
          <Route path="/User/UserPage" element={<UserPage />}></Route>
          <Route path="/User/MovieAdmin" element={<MovieAdmin />} />
        </Route>

        {/* BOOKING */}
        <Route path="/datve" element={<Booking />}></Route>

        <Route path="*" element={<NotFound>Not Found...</NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
