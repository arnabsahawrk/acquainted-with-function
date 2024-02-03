//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array, size) {
  if (!Array.isArray(array) && array.length === size)
    return console.log("input a array with integer numbers");
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += array[i];
  }
  return (sum = parseInt(sum / size));
}

const array = [300, 30, 60];
// const array = 22;
console.log(make_avg(array, array.length));
