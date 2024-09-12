// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar";
// import Card from "./Components/card";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Card /> */}
    </>
  );
};


export default Layout;