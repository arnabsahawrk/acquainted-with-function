//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function isOddEven(num) {
  return num % 2 === 1 ? num * 2 : num / 2;
}

console.log(isOddEven(55));
console.log(isOddEven(110));
