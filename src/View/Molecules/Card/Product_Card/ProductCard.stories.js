import React from "react";
import ProductCard from "./ProductCard";

export default {
  title: "Molecules/Card/ProductCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const ProductsCard = Template.bind({});
ProductsCard.args = {
  title: "shirt",
  price: 67,
  rating: 3.8,
  category: "Mens clothing",
};
