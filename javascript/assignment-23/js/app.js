//1

var arr = [
  { name: "Asher", age: 22 },
  { name: "Zubair", age: 20 },
  { name: "Kashif", age: 23 },
  { name: "Wasif", age: 17 },
  { name: "Hanzala", age: 28 },
];
// for (let i = 0; i < arr.length; i++) {
//     arr.splice(3,1, {name: 'Siddiq', age: 23})
//     arr[i].createdAt = new Date()
// }
// arr.push({name: 'Umair', age: 23})
// arr.shift()

// console.log(arr);

//2

// var nArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age >= 18) {
//         if (arr[i].name.includes('f') ) {

//       nArr.push(arr[i].name);
//     }
//   }
// }
// console.log(nArr);
// var n =  nArr.toString()
// console.log(n)

//3

var students = [
  {
    _id: "std1",
    name: "Bill Gates",
    age: 30,
  },
  {
    _id: "std2",
    name: "Steve Jobs",
    age: 30,
  },
  {
    _id: "std3",
    name: "Suzanne Collins",
    age: 30,
  },
];

var courses = [
  {
    name: "Maths",
    std_id: ["std3", "std1"],
  },
  {
    name: "Computer Science",
    std_id: ["std3", "std2"],
  },
  {
    name: "Commerce",
    std_id: ["std1"],
  },
];

for (let i = 0; i < courses.length; i++) {
  // console.log(courses[i].std_id)
  students[i].nName = [];
  students[i].nName = courses[i].name;
  for (let j = 0; j < courses[i].std_id.length; j++) {
  console.log(courses[i].std_id[j])
    // if (courses[i].std_id[j] == students[i]._id) {
    // }
  }
}
console.log(students);
