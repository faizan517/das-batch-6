//Q1
// Let

let name = "faizan";
name = "fazi";
// console.log(name)

// let name = 'carelessF1' //------can't redeclare
// console.log(name)

// Const

const π = 3.141;
// π = 5
// console.log(π) //------can't redeclare or change the value

//Map (Looping) ----------------- map return new array,and return boolean

let arr = ["a", "b", "c", "d"];
const users = [
  { id: 1, name: "Hasnain 1", age: 27 },
  { id: 2, name: "Faizan 1", age: 22 },
  { id: 3, name: "Omais 1", age: 25 },
  { id: 2, name: "Faizan 2", age: 22 },
  { id: 3, name: "Omais 2", age: 25 },
  { id: 4, name: "Hasnain 2", age: 27 },
];
var map = arr.map(function (v, i) {
  return v;
  // return 'fazi'
});
// console.log(map)

var m = users.map(function (v) {
  return v.age == 25; //---------return true or false
});
// console.log(m)

//Filter

var filter = arr.filter(function (val, ind) {
  return val == "a";
});
// console.log(filter)
var fil = users.filter(function (value, index) {
  return value.age == 22; //---------------return value
});
// console.log(fil)

// forEach --------- doesn't retun new array

arr.forEach(function (value, i) {
  // console.log(value)
  return value;
});

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(function myFunction(value) {
  //  console.log( sum += value)
});

//Temple Literals

var h1 = document.getElementById("class");
var userName = "faizan";
// h1.innerHTML = `<p> hello </p>`
h1.innerHTML = `<p> hello ${userName} </p>`;

//Query Selector

var guery = document.querySelector("div");
var guery = document.querySelectorAll("div");
var guery = document.querySelector("p");
var guery = document.querySelectorAll("p");
var guery = document.querySelector(".class");
var guery = document.querySelectorAll("#id");

//Default Parameters --------- set default value in function

function fruite(value = "apple") {
  console.log(value);
}
// fruite('mango')

//Spread Operators ------------ merge two or more than array or object

var firstArr = ["fazi", "hasnain"];
var secondArr = ["ali", "saad"];
var newArr = [...firstArr, ...secondArr, "sami"];
// console.log(newArr)

//Reverse ---------------- reverse make array opposite first index became last and wise vice versa

newArr.reverse();
// console.log(newArr)

// Ternary Operators -----------  work as if else

// ? -- if
// : -- else
// 1 > 2 ? console.log("it is") : console.log('it is not')

//Find ---------- main work is to find what value we give then break the loop
let find = users.find(function (v, i) {
  return v.age == 22;
});
// console.log(find)

// Bitwise Operator --------- work like Number.floor

var num = 2.9;
// console.log(~~num)


// Q2: Difference between Let & Const

// `const` is a signal that the identifier won't be reassigned.
//  `let` is a signal that the variable may be reassigned,
//  if we assign/create let/const in global scope we can reassign/create the let/const in local scope


// Q3: Difference between (Map, Filter, Find, For Each).

//All uses for looping. All return new array except forEach
//Map executes the same code on every element in an array and returns a new array with the updated elements.
//Filter check the value we want in array/obj than return the value
//Find just like name says find the value we want in array/obj than break on first occurence
//ForEach  is used to execute the same code on every element in an array but does not change the array and it returns undefined.
