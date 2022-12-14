import React from "react";
import NavBar from "../Organisms/NavBar/NavBar";
import { Route, Routes } from "react-router";
import "./Template.scss";
import AllProducts from "../Organisms/AllProducts/AllProducts";
function Templates() {
  return (
    <>
      <div className="template-container">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="componet-container">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            {/* <Route path="/" />
            <Route path="/aboutus" />
            <Route path="/mybooks" /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Templates;
