// HOF 

// // HOF: when we pass one function into another function as a argument


// //1.printName is a HOF bcz it takes myname function as a argument.
// function printName(func, num) {
//   for (let i = 1; i <= num; i++) {
//     func();
//   }
// }

// let myName = function () {
//   console.log("Yash");
// };
// printName(myName, 20);


// 2..
// let arr = [2, 4, 6, 8, 9];

// function evenOrNot(func, arr) {
//   for (let i = 0; i < 5; i++) {
//     func(arr[i]);
//   }
// }
// const even = function (num) {
//   if (num % 2 == 0) {
//     console.log(num);
//   } else {
//     console.log("Not even");
//   }
// };

// evenOrNot(even, arr);



// METHOD 

//  Any function that is being defined inside a object is called methods.

// const calulate = {
//     add: function (a, b) {
//       return a + b;
//     },
//     sub: function (a, b) {
//       return a - b;
//     },
//     mul: function (a, b) {
//       return a * b;
//     },
//     div: function (a, b) {
//       return a / b;
//     },
//   };
//   calulate();



// ITERATOR 

let str = "yash";
let obj = { name: "yash" };

// for in: gives key
for (let num in obj) {
  console.log(num);
  console.log(obj[num]);
  console.log(obj);
}
console.log(obj);

// for (let i of obj) {
//   console.log(i);
// }

// for of: gives value
// for (let i of str) {
//   let iterator = str[Symbol.iterator]();
//   //   console.log(iterator);
// }
// let iterator = str[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(str[Symbol.iterator]);
// console.log(obj[Symbol.iterator]);