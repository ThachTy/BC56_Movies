import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

/* Page */
import HomePage from "../pages/HomePage/HomePage";
import NotFound from '../pages/NotFound/NotFound';
function rootRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="Home" element={<HomePage></HomePage>}></Route>
                </Route>

                <Route path="*" element={<NotFound>Not Found...</NotFound>}>
                </Route>
            </Routes>
        </BrowserRouter >)
}




export default rootRoute;