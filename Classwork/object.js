 // slice

// let arr = [1,2,3,4]
// console.log(arr.slice(1,3))
// console.log(arr)

// arr[1] = 5
// console.log(arr)



// splice

// let arr = [1,2,3,4]

// console.log(arr.splice(1))
// console.log(arr)


// let arr = [1,2,3,4]

// console.log(arr.splice(1,3,5,6,4))
// console.log(arr)


// let arr = [1,2,3,4]

// console.log(arr.splice(1,3,5,6,4))
// console.log(arr)

// objects :-
// 1. constructor :- var obj = object(value)
//                 obj.name = "Yash"
//                 console.log(obj)
//                 => Yash

// there are two ways to declare an object : contructor / literals:

// A) constructor
// const obj = new Object();
// obj.name = 'yash'
// console.log(typeof obj)
// console.log(obj)

// B) literals 
// const users = {
//     name: 'yash',
//     'roll number' : 234567890,
//     subject : 'FEE'
// }

// 2.change object value
// users.name='somya singh'
// console.log(users)

// console.log(users.name)
// console.log(users('roll number')) (this is wrong)
// console.log(users['roll number'])
// console.log(users.subject)

// 1. Accessing object value:
// console.log(users.name)
// console.log(users['name'])
// // console.log(users('roll number'))
// console.log(users['roll number'])

// 3.object inside an object:

// let users = {
//     user1 :{
//         name: 'abc',
//         age: {
//             user2 :{
//                 name: 'cde',
//                 age: 24
//             }
//         }
//     }
// }
// console.log(users.user1.age.user2.age)

// 4: object inside an array:
// let arr = [
//     {
//         name:'shivam'
//     },
//     {
//         name:'yash',
//         'roll number': 12343
//     },
//     {
//         name:'kanav',
//         'roll number': 123
//     }
// ]
// console.log(arr[2].name)


// 5.merge object:
obj1 = {name1: 'kanav', age:24}
obj2 = {name2: 'yash', age:25}
// obj3 = {...obj1,...obj2}
// console.log(obj3);
obj4 = Object.assign(obj1,obj2);
console.log(obj4)





// let users ={
//     user1 :{
//         name: 'Devdutt',
//         age: 24
//     },
//     user2 :{
//         name: 'yash',
//         age: 24
//     }
// }
// console.log(users.user2.age)
let a = 5;
let b = 10;

let c = a++ + --b;
const d = c-- - ++a + b++;

console.log(a, b, c, d);