// FUNCTIONS

// // 1. function declaration
// function sum(a, b) {
//   // a,b are argument of function sum
//   let ans = a + b;
//   console.log(ans);
// }
// // function call
// sum(5, 3); // 5, 3 is working as a parameters for function sum

// var a = 7;
// var b = 9;

// console.log(a + b);

// // .....
// // ......
// // ......1000

// var a = 7;
// var b = 9;

// console.log(a + b);

// //  ......200

// var a = 7;
// var b = 9;

// console.log(a + b);





// // 2. default parameter:

// function multiply(a, b = 5) {
//   let ans = a * b;
//   console.log(ans);
// }
// multiply(5);  //25
// multiply(5, 3);  //15
// multiply(5); // NaN
// multiply(5, 3); //15



// RETURN KEYWORD


// function termination: 1. return 2. executable part of function

    // function multiple(a, b) {
    //     let c = a * b;
    //     console.log(c);
    //     return c;
    //     console.log("hi");
    //     console.log("hi");
    //     console.log("hi");
    //   }
    //   multiple(2, 3);




    // SCOPE


// 1.global scope: by default all variables has a functional scope means they can be accesssing throught the code base.
  
  // var globalVar1 = "GLobal Variable";
  // let globalVar2 = "GLobal Variable";
  // const globalVar3 = "GLobal Variable";
  
  // function myfunc() {
  //   console.log(globalVar1);
  //   console.log(globalVar2);
  //   console.log(globalVar3);
  // }
  // myfunc();
  // console.log(globalVar1);
  // console.log(globalVar2);
  // console.log(globalVar3);
  
  // // 2.functional scope: varibale declared inside a function can be accessed into a function only
  
  // let a = 30; //global scope
  // function myfun() {
  //   let a = 20;
  //   console.log(a);
  // }
  // myfun();
  // // console.log(a);
  
  // 3.block scope:
  // {
  //   let a = 50;
  //   const b = 30;
  //   var c = 20;
  //   //   console.log(a);
  // }
  
  // console.log(a);
  // console.log(b);
  // console.log(c);

  // 4. lexical scope: varibale decalared in outerfunction can be accessible by inner function but value assigned to inner function cannot be accessible by outer function:

function outerFunc() {
    let x = 5;
    let y = 6;
    // console.log(a);
  
    function innerFunc() {
      // let a = 10;   //This is not possible
      console.log(x);
    }
    // console.log(a); //This is not possible
    innerFunc();
  }
  outerFunc();