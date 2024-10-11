// Callback

// 1. simple function calling
// function first() {
//     console.log("This is the first function");
// }

// function second() {
//     console.log("This is the second function");
// }

// first();
// second();

// 2. ASYNCHRONOUS
//Call back function                function second with callback as first
// function first() {
//     console.log("This is the first function");
// }

// function second(call) {
//     console.log("This is the second function");
//     call();
// }
// second(first);
// second(first());


// 3. SYNCHRONOUS
// console.log("Stated");
// function myFunc() {
//     console.log("myFun working");
// }
// myFunc();
// console.log("ENDS");




// Asynchronous Programming



// A. setTimeout(callback, delay): This function execute after a specified delay.
//setTimeout function can be declared as like below 

// function setTimeout(){

// }

// var a = setTimeout(){

// }

// setTimeout(()=>{

// })

// 1. 
// callback function with delay
// console.log("Image Searching");
// for (let i=0; i<=1000; i++){
//     console.log("Loop is running");
// }

// 2.
// setTimeout(()=>{
//     console.log("Image rendered");
//    },1000);
// console.log("Work Done");

// 3. clearTimeout
// let a = setTimeout(()=>{
//         console.log("Image rendered");
//        },2000);
// clearTimeout(a);
// console.log("Work Done");




// setInterval
// B: SetInteval: it execute the code in repeatedly manner:

// 1.
// console.log("Image Searching");
// for (let i=0; i<=1000; i++){
//     console.log("Loop is running");
// }

// 2. clearInteval:
// let a = setInterval(()=>{
//     console.log("Image rendered");
//    });
// clearInterval(a);
// console.log("Work Done");

// 3. create a count upto 3 times:
// let count = 0;
// var a= setInterval(()=>{
//     count++;
//     console.log(` message ${count}, bahar aa oye`);
//     if(count>=3){
//         clearInterval(a);
//         console.log("Execution Stopped");
//     }
// });

// // C: Asynchronous way:

// console.log("Execution starts...");

// setTimeout(() => {
//   console.log("This is a Asynchronous execution");
// }, 1000);

// for (let i = 1; i < 1000; i++) {
//   console.log("####");
// }
// console.log("Execution Ended");








//callback hell:


// Callback Hell: Nested callback: Pyramid of DOOM:
// console.log("Maggi lene gaya");
// setTimeout(() => {
//   console.log("maggi le k aa gaya");
//   console.log("maggi banana start");
//   setTimeout(() => {
//     console.log("maggi ban gayi");
//     console.log("maggi khana start");
//     setTimeout(() => {
//       console.log("maggi khana samapat");
//     }, 2000);
//   }, 2000);
// }, 2000);

// // B) Sturucture way to write asynchronous programming to avoid callback hell:

// Suppose we have to make maggi:
// 1. Maggi lene gya: 2 sec
// 2. Maggi lekar aa gaya
// 3 maggi banana start kiya: 2 sec
// 4. maggi ban gayi
// 5. Maggi khaana shuru kiya: 2 sec
// 6. maggi khaana samapt

console.log("Maggi lene gaya");
setTimeout(()=> {
    console.log("maggi lekar aagaya");
    console.log("maggi banana start kiya");
    
    setTimeout(()=> {
        console.log("Maggi ban gayi");
        console.log("Maggi khana start kiya");

    })
})


function maggiLaao(cb) {
    console.log("Maggi lene gaye");
    setTimeout(() => {
        
    }, 2000);
}




function maggiLaao(cb) {
    console.log("Maggi Lene gaya");
    setTimeout(function () {
      console.log("Maggi Lekar aa gaya");
      cb(maggiKhao);
    }, 2000);
  }
  
  function maggiBanno(cb) {
    console.log("Maggi Banana Start");
    setTimeout(function () {
      console.log("Maggi Ban Gayi");
    }, 2000);
    cb();
  }
  
  function maggiKhao() {
    console.log("Maggi Khana Start");
    setTimeout(function () {
      console.log("Maggi Khana Samapt");
    }, 2000);
  }
  maggiLaao(maggiBanno);