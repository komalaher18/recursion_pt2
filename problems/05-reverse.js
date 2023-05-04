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

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
