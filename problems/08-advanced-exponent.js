/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:

advancedExponent(2, 0); // 1
advancedExponent(2, 1); // 2
advancedExponent(2, 2); // 4
advancedExponent(2, 3); // 8
advancedExponent(2, 4); // 16
advancedExponent(2, 5); // 32
advancedExponent(2, 6); // 64
advancedExponent(2, 7); // 128
advancedExponent(2, 8); // 256
advancedExponent(2, 9); // 512
advancedExponent(2, 10); // 1024
advancedExponent(2, 11); // 2048
advancedExponent(2, 12); // 4096

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.
***********************************************************************/

const advancedExponent = (b, n) => {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n % 2 === 0){
    return advancedExponent(b, n/2) ** 2;
  }
  return b * (advancedExponent(b, (n - 1) / 2) ** 2)
  };
  
  // const advancedExponent = (b, n) => {
  // !!!! full disclosure - the solution to this problem is basically in the problem itself
  // !!!! it's just a matter of converting the math into JS code - which we will do below:
  
  //! base case(s)?
  // essentially, there are sort of 2 base cases here - due to the fact that the values will change based
  // on whether or not the power(n) is an odd or even number
  
  // if the power(n) is an odd number, it will recurse down to 1 
  // if the power(n) is an even number, it will recurse down to 0
  //?   if (n === 0) return 1;
  //?   if (n === 1) return b;
  
  //! recursive case / step - if the power (n) is even
  // utilize a modulo to see if n is even or odd from here on out
  // regardless of the outcome (even or odd) - we will then recurse from there to run the func again
  // more math - gross^infinity - but again, the math solutions are in the question itself.
  //?   if (n % 2 === 0){
  //?     return advancedExponent(b, n/2) ** 2;
  //?   }
  
  //! recursive case / step - if the power (n) is odd
  //?   return b * (advancedExponent(b, (n - 1) / 2) ** 2)
  //?   };


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = advancedExponent;
} catch (e) {
  module.exports = null;
}