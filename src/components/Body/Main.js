import Navbar from "./Parts/Navbar";
import Body from "./Parts/Body";
import Footer from "./Parts/Footer";
import React, { useState } from "react";
import CartData from "../../context/cartdata";

function Main() {
  const [cartData, setCartData] = useState([]);

  //Adding item to cart

  const addToCart = (a, b, c, d) => {
    const x = cartData.find((el) => el.id === a);
    if (!x && cartData.length < 3) {
      setCartData([
        ...cartData,
        {
          id: a,
          name: b,
          price: c,
          image: d,
        },
      ]);
    }
  };

  //Removing Item from cart

  const deleteCartHandler = (id) => {
    const x = cartData.filter((el) => {
      return el.id !== id;
    });
    setCartData([...x]);
  };

  return (
    <CartData.Provider value={cartData}>
      <Navbar name="Brand" removeCardItem={deleteCartHandler} />
      <Body addToCart={addToCart} />
      <Footer />
    </CartData.Provider>
  );
}

export default Main;
