import changeState from "../utils/changeState";

const insertionSort = (arr, setArr) => {
  const size = arr.length;
  for (let step = 1; step < size; step++) {
    const key = arr[step];
    let j = step - 1;
    while (key < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    changeState(arr, setArr);
    arr[j + 1] = key;
  }
};

const performInsertionSort = (arr, setArr) => {
  changeState(arr, setArr, true);
  insertionSort(arr, setArr);
};

export default performInsertionSort;
