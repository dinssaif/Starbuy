import { useContext, useState } from "react";
import MyData from "../../../context/data";
import Cards from "../../UI/Cards";
import Loader from "../../UI/Loader";
import Sorting from "../../UI/Sorting";

function Body(props) {
  const [value, setValue] = useState("1");
  const data = useContext(MyData);

  const getSortingValue = (getValue) => {
    setValue(getValue);
  };
  return (
    <div className=" min-h-screen pb-3 bg-gray-200">
      <Sorting change={getSortingValue} />
      {data.length === 0 ? (
        <Loader />
      ) : (
        <Cards sortValue={value} addToCart={props.addToCart} />
      )}
    </div>
  );
}

export default Body;
