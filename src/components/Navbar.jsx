import quickSort from "../../sorts/quickSort";
import mergeSort from "../../sorts/mergeSort";
import insertionSort from "../../sorts/insertionSort";
import selectionSort from "../../sorts/selectionSort";
import genRandomArray from "../../utils/genRandomArray";

const randomize = (setArr) => {
  // clear all remaining transitions
  const highestId = setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      clearTimeout(i);
    }
    setArr(genRandomArray(500, 20));
  }, 0);
};

const perform = (sortAlgo, arr, setArr) => {
  const highestId = setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      clearTimeout(i);
    }
    sortAlgo(arr, setArr);
  });
};

const Navbar = ({ arr, setArr }) => {
  return (
    <div className="navbar">
      <div className="navitem" onClick={() => randomize(setArr)}>
        Randomize
      </div>
      <div
        className="navitem"
        onClick={() => perform(insertionSort, arr, setArr)}
      >
        Insertion Sort
      </div>
      <div
        className="navitem"
        onClick={() => perform(selectionSort, arr, setArr)}
      >
        Selection Sort
      </div>
      <div className="navitem" onClick={() => perform(mergeSort, arr, setArr)}>
        Merge Sort
      </div>
      <div className="navitem" onClick={() => perform(quickSort, arr, setArr)}>
        Quick Sort
      </div>
    </div>
  );
};

export default Navbar;
