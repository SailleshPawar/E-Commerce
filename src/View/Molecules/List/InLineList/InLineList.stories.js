import React from "react";
import InLineList from "./InLineList";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Molecules/List/InLineList",
  component: InLineList,
  //   decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => (
  <BrowserRouter>
    <InLineList {...args} />
  </BrowserRouter>
);

export const inLineList = Template.bind({});
inLineList.args = {
  type: "inline",
};

export const unstyledList = Template.bind({});
unstyledList.args = {
  type: "unstyled",
};

export const stringList = Template.bind({});
stringList.args = {
  type: "string",
};
