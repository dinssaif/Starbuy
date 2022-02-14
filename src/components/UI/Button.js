import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center w-full px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
    >
      {props.icon}
      <span className="mx-1">{props.name}</span>
      {props.children}
    </button>
  );
}

export default Button;
