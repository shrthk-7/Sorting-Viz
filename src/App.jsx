import { useState, useEffect } from "react";
import genRandomArray from "../utils/genRandomArray";
import Bars from "./components/Bars";
import "./App.css";

// SORTS
import quickSort from "../sorts/quicksort";
import mergeSort from "../sorts/mergeSort";

const App = () => {
  const [arr, setArr] = useState(genRandomArray(1000, 20));

  useEffect(() => {
    const arrCopy = JSON.parse(JSON.stringify(arr));
    // quickSort(arrCopy, 0, arr.length - 1, setArr);
    mergeSort(arrCopy, 0, arr.length - 1, setArr);
  }, []);

  return (
    <div className="container">
      <Bars arr={arr} />
    </div>
  );
};

export default App;
