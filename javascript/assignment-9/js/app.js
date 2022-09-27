var arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  ["Abc"],
  ["Xyz"],
  ["Etc"],
  ["..."],
];

var newArray = [];
var arrayOfString = [];
var arrayOfNumber = [];
var arrayOfBoolean = [];
var arrayOfObject = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    arrayOfString.push(arr[i]);
  }
  if (typeof arr[i] == "number") {
    arrayOfNumber.push(arr[i]);
  }
  if (typeof arr[i] == "boolean") {
    arrayOfBoolean.push(arr[i]);
  }
  if (typeof arr[i] == "object") {
    arrayOfObject.push(arr[i]);
  }
}
newArray.push(arrayOfString, arrayOfNumber, arrayOfBoolean, arrayOfObject);

console.log(newArray);
