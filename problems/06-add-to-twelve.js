/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


function addToTwelve(arr) {
  // Your code here
  if(arr.length <= 1){
    return false;

  }
  let lastNum = arr.pop();
  let newLastNum = arr[arr.length-1];
  if(lastNum + newLastNum=== 12 ){
    return true;
  }
   return addToTwelve(arr);
  }

  // const addToTwelve = (arr) => {
  //   if (arr.length <= 1) return false;
  
  //   const lastNum = arr.pop();
  //   const newLastNum = arr[arr.length - 1];
  //   if (lastNum + newLastNum === 12) return true;
  
  //   return addToTwelve(arr);
  // };
  
  //? const addToTwelve = (arr) => {
  //! base case
  // if the length of the array is less than/equal to 1,
  // it can't have the ability to add up to 12
  // this doubles as the base case because as we work through it, it will get here  
  //?   if (arr.length <= 1) return false;
  
  //! recursive step
  // declare a variable to hold the last number from the array using pop
  // important note - you could also use arr.shift() instead and then use arr[0]
  //?   const lastNum = arr.pop();
  
  // declare a variable to hold the 'new' last number
  //?   const newLastNum = arr[arr.length - 1];
  
  // add those 2 numbers together and see if they equal 12 - if it ever does, it's true.
  //?   if (lastNum + newLastNum === 12) return true;
  
  //! recursive case
  // so if we get through the previous step and it isn't true, but the base case hasn't been reached -
  // we call the function again with what's left of the array(arr)
  //?   return addToTwelve(arr);
  //? };




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
