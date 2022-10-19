//Local Storage
// localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser

//Set
localStorage.setItem("name", "faizan");
localStorage.setItem("num", 123);
localStorage.setItem("boolean", JSON.stringify(true));
let arr = ["a", "b", "c", "d"];
localStorage.setItem("arr", JSON.stringify(arr));
let obj = {
  name: "Fazi",
  age: 20,
  city: "Karachi",
};
localStorage.setItem("obj", JSON.stringify(obj));

//get
let num = localStorage.getItem("num");
// console.log(typeof num )
let boolean = JSON.parse(localStorage.getItem("boolean"));
// console.log(boolean)
arr = JSON.parse(localStorage.getItem("arr"));
// console.log(arr)
let object = JSON.parse(localStorage.getItem("obj"));
// console.log(object)
localStorage.removeItem("name");

// Arrow Function

let arrow = () => {
  console.log("hi");
};
// arrow();

//simple function get his father scoop and arrow function get window/grandParents scoop
//In regular function, arguments will give you list of parameter passed in function, 
//In arrow function arguments is not defined. In regular function, you always have to return any value, but in Arrow function you can skip return keyword and write in single line.

let example = {
  name: "faizan",
  sayHi: function () {
    console.log(this.name);
  },
  sayBye: () => {
    console.log(this.name);
  },
};
// example.sayHi()
// example.sayBye()

//Set Constructor
let newArr = new Set(["A", "A", "B", "c", "d", "d", 3, 3]);

// console.log(newArr)
// newArr.add("TRUE");
// console.log(newArr.entries())
// console.log(newArr.size)
// newArr.clear()

//Map Constructor
let name = new Map([
  ["fAge", 20],
  ["sAge", 21],
  ["tAge", 20],
]);

let val = name.get("sAge");
// console.log(val);

name.set("foAge", "23");
// console.log(name.size);

// fruits.clear()
