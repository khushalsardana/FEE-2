// we can redeclare a variable through var 
var a = 10;
console.log(a)
var a = 20;
console.log(a)

// with let we can't redclare that but can update this and also assignment is possible 
// let b = 10; 
console.log(b)
let b = 20;
console.log(b) // this will throw an error because we are trying to redeclare a variable

// with const no redeclaration and assignment is possible 
const c = 10;
console.log(c)
console.log(c = 20) // this will throw an error because we are trying to redeclare
