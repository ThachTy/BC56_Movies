import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import UserPage from "../pages/UserPage/UserPage";

export default function AdminPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="/users" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
