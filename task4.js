//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
  let count = 0;
  if (typeof str === "string") {
    for (let word of str) {
      if (word === "0") count++;
    }
    return count;
  } else {
    return count;
  }
}

const string = "00010101111011";
// const string = 55;
console.log(count_zero(string));
