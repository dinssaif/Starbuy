import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className=" flex justify-center items-center absolute top-80 ml-0 mt-0 left-0 right-0">
      <ClipLoader />
    </div>
  );
}

export default Loader;
