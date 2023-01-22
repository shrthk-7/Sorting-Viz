const genRandomArray = (size, range) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.random() * range);
  }
  return array;
};

export default genRandomArray;
