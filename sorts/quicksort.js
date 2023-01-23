import changeState from "../utils/changeState";

const swap = (arr, left, right, setArr) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  changeState(arr, setArr);
};

const partition = (arr, left, right, setArr) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j, setArr);
      i++;
      j--;
    }
  }

  return i;
};

const quickSort = (arr, left, right, setArr) => {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right, setArr);
    if (left < index - 1) {
      quickSort(arr, left, index - 1, setArr);
    }
    if (index < right) {
      quickSort(arr, index, right, setArr);
    }
  }
  return arr;
};

const performQuickSort = (arr, setArr) => {
  quickSort(arr, 0, arr.length - 1, setArr);
};

export default performQuickSort;
