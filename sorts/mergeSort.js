import changeState from "../utils/changeState";

function merge(arr, left, mid, right, setArr) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const X = Array(n1).fill(0);
  const Y = Array(n2).fill(0);

  for (let i = 0; i < n1; i++) X[i] = arr[left + i];
  for (let j = 0; j < n2; j++) Y[j] = arr[mid + 1 + j];

  let i = 0,
    j = 0,
    k = left;
  while (i < n1 && j < n2) {
    if (X[i] <= Y[j]) {
      arr[k] = X[i];
      i++;
      changeState(arr, setArr);
    } else {
      arr[k] = Y[j];
      j++;
      changeState(arr, setArr);
    }
    k++;
  }

  while (i < n1) {
    arr[k] = X[i];
    i++;
    k++;
    changeState(arr, setArr);
  }
  while (j < n2) {
    arr[k] = Y[j];
    j++;
    k++;
    changeState(arr, setArr);
  }
}

function mergeSort(arr, left, right, setArr) {
  if (left >= right) return;
  const mid = left + Math.floor((right - left) / 2);
  mergeSort(arr, left, mid, setArr);
  mergeSort(arr, mid + 1, right, setArr);
  merge(arr, left, mid, right, setArr);
}

export default mergeSort;
