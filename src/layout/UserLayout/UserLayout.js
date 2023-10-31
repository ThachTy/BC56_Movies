import React from "react";
import { Outlet } from "react-router-dom";
export default function UserLayout() {
  return (
    <div className="main w-full h-screen flex flex-row ">
      <div className="flex-none w-[250px]"> SideBar</div>
      <div className="flex-auto">
        <Outlet />
      </div>
    </div>
  );
}
