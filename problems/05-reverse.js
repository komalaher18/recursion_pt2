/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here
  if(str.length === 0){
    return "";
  }
  let arr = str.split("");
  let lastLetter = arr.pop('');
  let newArray = arr.join("");
  let result = reverse(newArray);
  return lastLetter + result;


}

// const reverse = (str) => {
//   let arr = str.split("");
//   if (str.length === 0) return "";

//   let chars = arr.pop();
//   let mutatedString = arr.join("");
//   let recursiveReturn = reverse(mutatedString);

//   return chars + recursiveReturn;
// };

//? const reverse = (str) => {
// start by splitting the word(str) into an array
//? let arr = str.split("");

//   //! base case
// if the string is empty, you're done
// if the length of the string is 0, just return an empty string
// we work towards this base case by taking off the last value each time.
//?   if (str.length === 0) {
//?    return "";
//?  }

//   //! recursive step
// take off the last letter
// declare a variable to hold the letter we just popped off
// by taking off the last value each time, the array becomes shorter
//?   let chars = arr.pop();

//   //! recursive case - part 1
// once we've taken off that last letter, we can join the remaining letters
// this makes the array(arr) a string(str) that is missing the last letter
//?   let mutatedString = arr.join("");

// //! recursive case - part 2
// declare a variable to hold the value of running the function again
// when you run reverse this time, you are running it on the new string that was created above
//?   let recursiveReturn = reverse(mutatedString);

//   //! last step - make sure to return something or it will be undefined
// return the last letter (char) + the return value of running reverse again
//?   return chars + recursiveReturn;
//? };

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
