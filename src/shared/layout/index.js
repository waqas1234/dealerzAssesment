import React from "react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";

export default function Layouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
