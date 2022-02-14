import React, { useContext } from "react";
import MyData from "../../context/data";

function Sorting(props) {
  const data = useContext(MyData);

  //sending option value to display shorted result

  const changeOption = (e) => {
    props.change(e.target.value);
  };

  return (
    <div className="flex items-center justify-between text-sm tracking-widest uppercase px-6 pt-4 pb-4 ">
      <p className="text-gray-500 ">{`${data.length} Items`}</p>
      <div className="flex items-center">
        <p className="text-gray-500">Sort</p>
        <select
          onChange={changeOption}
          className="font-medium text-gray-700 bg-transparent focus:outline-none"
        >
          <option value="1">Recommended</option>
          <option value="2">Price low to high</option>
          <option value="3">Price high to low</option>
        </select>
      </div>
    </div>
  );
}

export default Sorting;
