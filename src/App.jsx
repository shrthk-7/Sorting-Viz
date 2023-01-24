import { useState, useEffect } from "react";
import genRandomArray from "../utils/genRandomArray";
import Bars from "./components/Bars";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [arr, setArr] = useState(genRandomArray(1000, 20));

  return (
    <>
      <Navbar arr={arr} setArr={setArr} />
      <div className="container">
        <Bars arr={arr} />
      </div>
    </>
  );
};

export default App;
