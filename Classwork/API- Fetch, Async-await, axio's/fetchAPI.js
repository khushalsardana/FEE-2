// API: Application Programming Interface
// A set of rules that define how to request data from a server
// API keys: A unique string of characters that identifies a user or application

// JSON: JavaScript Object Notation
// A lightweight data interchange format that is easy to read and write

// AJAX:
// Asynchronous JavaScript and XML
// A technique for making HTTP requests from JavaScript code, allowing for dynamic updates to web pages without requiring a full page reload

let url = "https://catfact.ninja/fact"

// 1.
// console.log(fetch(url))    // by default fetch returns Promise

// 2.
// fetch(url).then((res) => {
//     console.log(res);    // res is a Response object
// }).catch((err) => {
//     console.log("Error",err);
// });

// 3.
// fetch(url)                               //to retrive data from json to Promise
//     .then((res) => {
//         // console.log(res.json());      //to retrive data from Promise to object
//         res.json().then((value)=>{
//             console.log(value);          // to retrieve data from object to console
//             console.log(value.fact);     // to retrieve a specifc part of data (here fact is the data value name in API(see url value))
//         })
//     })
//     .catch((err) => {
//         console.log("Error",err);
//     });


// 4. Chaining:
// fetch(url)                               
//     .then((res) => {    
//         return res.json();
//     })
//     .then((value)=>{
//         console.log(value); 
//         console.log(value.fact);          
//     })
//     .catch((err) => {
//         console.log("Error",err);
//     });
