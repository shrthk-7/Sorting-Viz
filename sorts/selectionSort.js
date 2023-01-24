import changeState from "../utils/changeState";

const selectionSort = (arr, setArr) => {
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    changeState(arr, setArr);
  }
  return arr;
};

const performSelectionSort = (arr, setArr) => {
  changeState(arr, setArr, true);
  selectionSort(arr, setArr);
};

export default performSelectionSort;
