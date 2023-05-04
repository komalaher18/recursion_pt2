/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {
    // Your code here
    if(power ===0){
        return 1;
    } else if(power > 0){
        return num * exponent(num, power-1);
    } else {
        return (1/ num )* exponent(num, power+1)
    }

}

// const exponent = (num, power) => {
//     if (power === 0) return 1;
//     if (power > 0) return num * exponent(num, power - 1);
//     return (1 / num) * exponent(num, power + 1);
//   };
  
  //?   const exponent = (num, power) => {
  //! base case
  // we eventually want the power to get to 0 - whether we increment or decrement
  // once we get to the power being 0, we are finished recursing
  //?     if (power === 0) return 1;
  
  //! recursive case/step - if power is a positive number
  // in order to get to the base case, we have to decrement the power each time we call the func.
  // the rest is math (gross)
  //?     if (power > 0) return num * exponent(num, power - 1);
  
  //! recursive case/step - if the power is negative (also an implied else statement)
  // if the power is negative, we have to increment the power each time to get up to 0
  // again, more math (gross*2)
  // because the power is negative, we want to return the denominator, hence the 1/num here;
  //?     return (1 / num) * exponent(num, power + 1);
  //?    }



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
