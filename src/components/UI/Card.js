import React from "react";
import Button from "./Button";
import Cart from "../../Icons/Cart";

function Card(props) {
  return (
    <div className="shadow-md  p-4 mt-0 bg-white mt-8">
      <div className="flex flex-col w-full max-w-lg mx-auto">
        <img
          className="object-cover w-full rounded-md h-44 xl:h-44 hover:opacity-80"
          src={props.imgSrc}
          alt={props.imgAlt}
        />
        <h4 className="mt-2 font-medium text-sm text-gray-700">{props.name}</h4>
        <span className="flex justify-between gap-3">
          <p className="text-blue-500">{`$${props.price}`}</p>
        </span>
        <div className="mt-4 w-full">
          <Button name="Add to cart" onClick={props.onClick} icon={<Cart />} />
        </div>
      </div>
    </div>
  );
}

export default Card;
