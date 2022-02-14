import React, { useContext, useState } from "react";
import CartView from "../../UI/CartView";
import Button from "../../UI/Button";
import Cart from "../../../Icons/Cart";
import CartData from "../../../context/cartdata";

function Navbar(props) {
  const [isOpen, SetIsOpen] = useState(false);

  const cartData = useContext(CartData);

  const isOpenHandler = () => {
    SetIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <nav className="bg-white border-solid border-b-2 border-gray px-6 py-4 mx-auto flex items-center justify-between">
      <div className="cursor-pointer text-2xl font-bold text-gray-800">
        {props.name}
      </div>
      <div className="relative inline-block  ">
        <Button name="Cart" icon={<Cart />} onClick={isOpenHandler}>
          {cartData.length > 0 && (
            <span className="mx-1 pb-1 bg-red-500 text-sm w-6 h-6 rounded-full flex justify-center items-center">
              {cartData.length}
            </span>
          )}
        </Button>
        {
          <CartView
            active={isOpen}
            activeState={SetIsOpen}
            removeCardItem={props.removeCardItem}
          />
        }
      </div>
    </nav>
  );
}

export default Navbar;
