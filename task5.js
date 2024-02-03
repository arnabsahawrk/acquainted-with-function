//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(int) {
  if (typeof int === "number") return int % 2 === 1 ? "Odd" : "Even";
  return "Not A Number";
}

let num = 538949;
let num2 = 634390;
// let num2 = "Hello";

num = odd_even(num);
num2 = odd_even(num2);

console.log(`First number is ${num}. Second number is ${num2}.`);
