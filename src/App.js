import { useEffect, useState } from "react";
import Main from "./components/Body/Main";
import MyData from "./context/data";
import HighPriceData from "./context/highpricedata";
import PriceData from "./context/pricedata";

function App() {
  const [data, setData] = useState([]);
  const [priceData, setPriceData] = useState([]);

  //Fetching AAPI

  const getAPI = async () => {
    const jsonData = await fetch(
      "https://mystore-api-b589a-default-rtdb.asia-southeast1.firebasedatabase.app/0/bydate.json"
    );
    const data = await jsonData.json();
    setData(data);

    //Sorting data by price

    const arry = [...data];
    const sortData = arry.sort(function (a, b) {
      return a.price - b.price;
    });
    setPriceData(sortData);
  };

  const highArry = [...data];
  const SortetHighArry = highArry.sort((a, b) => b.price - a.price);

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div className="App">
      <MyData.Provider value={data}>
        <PriceData.Provider value={priceData}>
          <HighPriceData.Provider value={SortetHighArry}>
            <Main />
          </HighPriceData.Provider>
        </PriceData.Provider>
      </MyData.Provider>
    </div>
  );
}

export default App;
