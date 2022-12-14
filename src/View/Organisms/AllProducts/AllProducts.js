import React from "react";
import { useSelector } from "react-redux";
import "./AllProducts.scss";
import ProductCard from "../../Molecules/Card/Product_Card/ProductCard";
// title = "Card title",
// price = 67,
// rating = 3.8,
// category = "men's clothing",
function AllProducts() {
  const allData = useSelector((data) => data?.product?.products);
  console.log(allData, "this is a all data");
  return (
    <div className="all-prducts">
      {allData.map((data) => {
        return (
          <ProductCard
            imgUrl={data.image}
            title={data.title}
            price={data.price}
            category={data.category}
            rating={data.rating.rate}
          />
        );
      })}
    </div>
  );
}

export default AllProducts;
