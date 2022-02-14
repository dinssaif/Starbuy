import React from "react";
import Button from "./Button";

function CartItem(props) {
  return (
    <li className=" flex justify-around block px-4 py-3 text-sm text-gray-600 capitalize">
      <img className=" w-1/4 h-20 p-5" alt="cartimage" src={props.imgSrc}></img>
      <div className="  w-3/4 flex flex-col p-2">
        <span className="">
          {props.name.length < 34
            ? props.name
            : `${props.name.slice(0, 31)}...`}
        </span>
        <span className="flex justify-between pt-2">
          <div className="font-bold text-lg flex justify-center items-center">{`$${props.price.toFixed(
            2
          )}`}</div>
          <div>
            <Button name="remove" onClick={props.removeCardItem} />
          </div>
        </span>
      </div>
    </li>
  );
}

export default CartItem;
