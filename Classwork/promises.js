// Promises represents a future event. Technically they are objects. By default Promises are in pending are in pending states. Promise state- Pending , Fulfilled, Reject:

// 1. How to create Promises: It has two callback resolve and reject
// let p= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("This is Resolved");

//     },2000);
// });
// console.log(p); // output: pending state

// let p= new Promise((resolve, reject)=>{
//     let like=true;
//     setTimeout(()=>{
//         if(like){
//             resolve("I love you Khushal");
//         } else {
//             reject("I think we are good friends");
//         }
//     },2000);
// });
// 1.2.1 consuming promises
// p.then((value)=>{
//     console.log(value);
// }), (err) => {
//     console.log("Rejected Coz you deserve better");
// }

// let p= new Promise((resolve, reject)=>{
//     let like=false;
//     setTimeout(()=>{
//         if(like){
//             resolve("I love you Khushal");
//         } else {
//             reject("I think we are good friends");
//         }
//     },2000);
// });
// p.then((value)=>{
//     console.log(value);
// }).catch((err)=> {
//     console.log("Rejected Coz you deserve better");
// });





// 2. Promise chaining:

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Resolve is working after 2 sec");
//     },2000);
// });
// p1.then((value) => {
//     console.log(value);
//     let p2= new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2 working");
//         },2000);
//     }).then((value) => {
//         console.log(value);
//     });
//     return p2;
// })
// .then((value) => {
//     console.log("Work Done");
// })
// .then((value) => {
//     console.log("OK Done");
// });





// 3. Promise inside a function

// function burgerLeAA(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dukanKhuliHai = true;
//             if(dukanKhuliHai){
//                 resolve("Burger milgya");
//             }
//             else{
//                 reject("Burger nhi mila");
//             }
//         },2000);
//     });
// }

// burgerLeAA()
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



//homework 
// create a function in javascript with name downloadMovie which has a url an argument. create promise if url is not mp4 reject it and else its mp4 then resolve it
function downloadMovie(url) {
    return new Promise((resolve, reject) => {
        const fileExtension = url.split('.').pop();
        setTimeout (() => {
        if (fileExtension === 'mp4') {
            resolve("URL is valid. Starting download...");
        } else {
            reject("Invalid URL. Only .mp4 files are supported.");
        }
    },2000);
    });
}

downloadMovie('http://example.com/movie.mp4')
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    });
