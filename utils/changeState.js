// lower it to sort faster
let time = 100;
// time before every swap
const timeBetweenSwaps = 10; // in ms

const changeState = (arr, setArr) => {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  time++;
  setTimeout(() => {
    setArr(arrCopy);
  }, time * timeBetweenSwaps);
};

export default changeState;
