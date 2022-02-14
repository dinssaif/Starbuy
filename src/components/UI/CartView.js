import React, { useContext } from "react";
import CartData from "../../context/cartdata";
import Button from "./Button";
import CartItem from "./CartItem";

function CartView(props) {
  const cartdata = useContext(CartData);
  const viewHandler = () => {
    if (props.active) {
      return "";
    } else return "hidden";
  };

  // totalprice loop
  let y = 0;
  for (const x of cartdata) {
    y = y + x.price;
  }

  //display all cartitems
  const cartItems = cartdata.map((el) => {
    return (
      <CartItem
        name={el.name}
        price={el.price}
        imgSrc={el.image}
        key={el.id}
        removeCardItem={() => {
          props.removeCardItem(el.id);
        }}
      />
    );
  });

  // cart empty view

  const cartEmpty = (
    <div className=" py-10 flex justify-center text-lg text-bold text-gray-700 font-bold">
      Cart is empty
    </div>
  );

  return (
    <div
      className={`${viewHandler()} shadow-md absolute min-h-full  border-t-4 border-black right-0 z-20 w-96 py-2 mt-2 bg-white rounded-md`}
    >
      {cartdata.length === 0 ? cartEmpty : cartItems}
      <div className={`${cartdata.length === 0 && "hidden"} py-6 border-t-2`}>
        <div className="flex justify-between font-bold px-8">
          <div>Total Amount</div>
          <div>${y}</div>
        </div>
        <div className="px-8 text-sm text-gray-700">
          Shipping and taxes calculated at checkout.
        </div>
        <div className="px-6 pt-6">
          <Button name="Checkout" />
        </div>
      </div>
    </div>
  );
}

export default CartView;
