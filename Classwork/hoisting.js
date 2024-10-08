// let and const: refernce error: temperal dead zone
console.log(c);
let c = 10;

function myfunc() {
  var b = 20;
  console.log(b);
}
myfunc();

// var: undefined:
// console.log(a);
// var a = 10;

// function myfunc() {
//   var b = 20;
//   console.log(b);
// }
// myfunc();




// FUNCTION EXPRESSION 

// // 1. function expression as a anonymous function

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add);
// // console.log(sum(5, 3));
// console.log(add(5, 3));

// 2. hoisting in anonymous function expression
var a = 200;

// console.log(myfunc(3)); // Error

var myfunc = function (num) {
  return num ** 3;
};
// console.log(cube(3));
// console.log(myfunc(3)); // here it will work

