import React from "react";
import "./NavBar.scss";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import { GiBandana } from "react-icons/gi";
import InLineList from "../../Molecules/List/InLineList/InLineList";

function NavBar(props) {
  const { brandName = "STAN STORE" } = props;
  return (
    <Navbar className="main-navbar" color="dark" dark>
      <NavbarBrand href="/">
        <div className="brand-name">
          <span> {brandName.toUpperCase()}</span>
          <span>
            <GiBandana />
          </span>
        </div>
      </NavbarBrand>
      <NavItem>
        <InLineList />
      </NavItem>
    </Navbar>
  );
}

export default NavBar;
