import React from "react";
import "./ProductCard.scss";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
function ProductCard(props) {
  const {
    title = "Card title",
    price = 67,
    rating = 3.8,
    category = "men's clothing",
    imgUrl = "https://picsum.photos/300/200",
  } = props;
  return (
    <>
      <Card className="main-card">
        <img alt="Sample" src={imgUrl} />
        <CardBody>
          <div className="card-body-wrapper">
            <CardTitle tag="h5">{title}</CardTitle>
            <div className="product-info">
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                <BsFillStarFill /> {rating}
              </CardSubtitle>
              <CardSubtitle className="mb-2" tag="h6">
                $ {price}
              </CardSubtitle>
            </div>
            <div className="category">
              <CardText>category: {category}</CardText>
            </div>

            <div className="cart-buttons">
              <Button outline size="sm" title="Add To Cart">
                <FaShoppingCart />
              </Button>
              <Button title="Buy" outline size="sm">
                <BsFillBagCheckFill />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductCard;
