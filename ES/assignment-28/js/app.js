//Q1
//API stands for Application Programming Interface.it's work as bridge throuhg frontend to backend api connect beckend to frontend. API are developed in back-end using any stack

//Q2
//The event looping is javascript Asyncronous line of code it is use to control javascript Asyncronous code.

// console.log('Test 1') //Sync

// setTimeout(() => {
//   console.log('Test 2'); //Async
// },0)

// console.log('Test 3') //Sync

//line by line execute
// console.log('Test 1')
// setTimeout(() => {
//   console.log('Test 2');
//   console.log('Test 3')},3000)

//Q3
//States of event looping:
//1) Running
//2) Waiting Stack /Queue Stack
//3) Executing Stack

//Q4
//The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that return the data in JSON or XML.

//Q5
//Type of APIs Call / Methods:

// 1) Get // To get data from the database using api (Default)
// 2) Post // To add data in database using api
// 3) Put // To update data in the database using api
// 4) Delete // To delete data from the database using api

// fetch('https:fakestoreapi.com/products/1').then((res) =>{
// // console.log(res)
// return res.json()
// }).then(result=>{
//   console.log(result)
// })

// fetch('https:fakestoreapi.com/products').then((res) =>{
//   // console.log(res)
//   return res.json()
//   }).then(result=>{
//     console.log(result)
//   })

// fetch('https:fakestoreapi.com/products?limit=5').then((res) =>{
//   // console.log(res)
//   return res.json()
//   }).then(result=>{
//     console.log(result)
//   })

// fetch('https:fakestoreapi.com/products/categories').then((res) =>{
//   // console.log(res)
//   return res.json()
//   }).then(result=>{
//     console.log(result)
//   })

// fetch('https:fakestoreapi.com/products/category/jewelery').then((res) =>{
//   // console.log(res)
//   return res.json()
//   }).then(result=>{
//     console.log(result)
//   })

// fetch("https:fakestoreapi.com/products", {
//   method: "POST",
//   body: JSON.stringify({
//     price: "102",
//     title: "hand-band",
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "fashion",
//   }),
// })
//   .then((res) => {
//     // console.log(res)
//     return res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// fetch('https:fakestoreapi.com/products').then((res) =>{
//     // console.log(res)
//     return res.json()
//     }).then(result=>{
//       console.log(result)
//     })

// fetch("https://fakestoreapi.com/products/21", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "hasnain product",
//     price: 200,
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "electronic",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
