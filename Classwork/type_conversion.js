// equal coercion
console.log(1==1);
console.log(1=="1");
console.log(1=="A");
console.log(1==[]);
console.log(1=="");
console.log([]=="");


// type conversion
console.log(1+2); //Output : 3
console.log(1 + "2"); //Output : 12      Explanation: Before concat with number 1 this value would concat to string.
console.log(10 - "2"); //output : 8     Explanation: String value to will change to int 

console.log(10 + "A"); //Output:10A
console.log(10 - "A"); //Output:NaN

console.log(10 + "2" + "A"); //Output: 102A
console.log(10 + "2" - "A"); //Output: NaN

// string to number:

let a = "20";
console.log(typeof a);
// console.log(parseInt(a));

// 2.
let d = parseInt(a);
console.log(typeof d);
// 1.constructor:
let b = Number(a);
// console.log(typeof b);