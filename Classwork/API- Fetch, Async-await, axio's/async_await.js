// async await

let url = "https://catfact.ninja/fact";

// 1. It returns undefined Promise 
// async function getData() {
//     let res = fetch(url);
//     console.log(res);
// }

// 2. to return a Promise with response
// async function getData() {
//     let res = fetch(url);
//     console.log(res);
// }
// getData()

// 3. To check if async is working or not we use try and catch
async function getData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(res);
        console.log(data);
        console.log(res.fact);
    } catch(e) {
        console.log("Error",e);
    }}
getData()