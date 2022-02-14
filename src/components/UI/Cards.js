import React, { useContext, useEffect, useState } from "react";
import MyData from "../../context/data";
import HighPriceData from "../../context/highpricedata";
import PriceData from "../../context/pricedata";
import Card from "./Card";
function Cards(props) {
  const data = useContext(MyData);
  const priceData = useContext(PriceData);
  const highPriceData = useContext(HighPriceData);
  const [cardItems, setCartItems] = useState([]);

  // function for checking shorting value and set cards accordingly

  useEffect(() => {
    if (props.sortValue === "1") {
      setCartItems(data);
    }
    if (props.sortValue === "2") {
      setCartItems(priceData);
    }
    if (props.sortValue === "3") {
      setCartItems(highPriceData);
    }
  }, [props.sortValue, data, priceData, highPriceData]);

  return (
    <div className="grid gap-3 mx-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:grid-cols-2">
      {cardItems.slice(0, 20).map((el) => {
        return (
          <Card
            key={el.id}
            name={
              el.title.length > 21 ? `${el.title.slice(0, 18)}...` : el.title
            }
            price={el.price.toFixed(2)}
            imgAlt="ALT"
            imgSrc={el.image}
            onClick={() => {
              props.addToCart(el.id, el.title, el.price, el.image);
            }}
          />
        );
      })}
    </div>
  );
}

export default Cards;
