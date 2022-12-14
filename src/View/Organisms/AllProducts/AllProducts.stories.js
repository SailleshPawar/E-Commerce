import React from "react";
import AllProducts from "./AllProducts";
import store from "../../../Application/Store/index";
import { Provider } from "react-redux";
export default {
  title: "Organisms/AllProducts",
  component: AllProducts,
};

const Template = (args) => (
  <Provider store={store}>
    <AllProducts {...args} />
  </Provider>
);
export const productsList = Template.bind({});
productsList.args = {};
