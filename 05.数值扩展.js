/* let num1 = Number.isFinite(100) // true
let num2 = Number.isFinite(100/0) // false
let num3 = Number.isFinite(Infinity) // false
let num4 = Number.isFinite("100") // false
console.log(num1, num2, num3, num4); */

/* let num1 = Number.isNaN(100) // false
let num2 = Number.isNaN(100/0) // false
let num3 = Number.isNaN(Infinity) // false
let num4 = Number.isNaN("100") // false
console.log(num1, num2, num3, num4); */

/* 
let num1 = Number.isInteger(100) // true
let num2 = Number.isInteger(100.00) // true
let num3 = Number.isInteger(Infinity) // false
let num4 = Number.isInteger("100") // false
console.log(num1, num2, num3, num4); */

/* function isEqual(a, b) { 
  return Math.abs(a - b) < Number.EPSILON;
 }
 console.log(isEqual(0.1 + 0.2, 0.3)); // true
 console.log(0.1 + 0.2 === 0.3); // false */

/*  console.log(Math.trunc(1.2)); // 1
 console.log(Math.trunc(1.8)); // 1
 console.log(Math.trunc(-1.8)); // -1
 console.log(Math.trunc(-1.2)); // -1 */

 console.log(Math.sign(-100)); // -1
 console.log(Math.sign(100)); // 1
 console.log(Math.sign(0)); // 0
 console.log(Math.sign(-0)); // -0
 console.log(Math.sign("codexgh")); // NaN 