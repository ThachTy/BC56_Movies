import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col justify-between items-center w-ful">
      <Header></Header>
      <div className="flex flex-grow w-full h-max justify-center">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
}
