import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Organisms/NavBar",
  component: NavBar,
};

const Template = (args) => (
  <BrowserRouter>
    <NavBar {...args} />
  </BrowserRouter>
);

export const NavBars = Template.bind({});
NavBars.args = {
  brandName: "STAN STORE",
};
