import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Root() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
