import React from "react";
import { List, ListInlineItem } from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";

import "./InLineList.scss";
import { Link } from "react-router-dom";

const routeDetails = [
  { name: "Home", route: "/", icon: <AiFillShopping /> },
  { name: "My Orders", route: "/orders", icon: <AiFillShopping /> },
  { name: "Profile", route: "/profile", icon: <BsFillPersonFill /> },
  { name: "Store", route: "/mystore", icon: <FaShoppingCart /> },
];

function InLineList(props) {
  const { type = false, routeItems = routeDetails } = props;
  return (
    <>
      <List className="main-list" type={type}>
        {routeItems.map((item) => {
          return (
            <ListInlineItem className="list-items">
              <Link to={item.route}>
                {item.icon} {item.name}
              </Link>
            </ListInlineItem>
          );
        })}
      </List>
    </>
  );
}

export default InLineList;
