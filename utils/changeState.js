// lower it to sort faster
let time = 200;
// time before every swap
const timeBetweenSwaps = 5; // in ms

function changeState(arr, setArr) {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  time++;
  setTimeout(
    (arrCopy) => {
      setArr(arrCopy);
    },
    time * timeBetweenSwaps,
    arrCopy
  );
}

export default changeState;
