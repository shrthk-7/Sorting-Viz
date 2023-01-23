import { useState, useEffect } from "react";
import genRandomArray from "../utils/genRandomArray";
import Bars from "./components/Bars";
import "./App.css";

// SORTS
import quickSort from "../sorts/quickSort";
import mergeSort from "../sorts/mergeSort";
import insertionSort from "../sorts/insertionSort";
import selectionSort from "../sorts/selectionSort";

const App = () => {
  const [arr, setArr] = useState(genRandomArray(1000, 20));

  useEffect(() => {
    const arrCopy = arr.slice();
    quickSort(arrCopy, setArr);
    // mergeSort(arrCopy, setArr);
    // insertionSort(arrCopy, setArr);
    // selectionSort(arrCopy, setArr);
  }, []);

  return (
    <div className="container">
      <Bars arr={arr} />
    </div>
  );
};

export default App;
