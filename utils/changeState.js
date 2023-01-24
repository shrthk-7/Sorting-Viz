let time = 0;
const timeBetweenSwaps = 10; // in ms

const changeState = (arr, setArr, reset = false) => {
  if (reset) time = 0;
  const arrCopy = JSON.parse(JSON.stringify(arr));
  time++;
  setTimeout(() => {
    setArr(arrCopy);
  }, time * timeBetweenSwaps);
};

export default changeState;
