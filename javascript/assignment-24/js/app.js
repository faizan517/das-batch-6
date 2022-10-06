//Object of Number
var objNum = new Number("123");
// console.log(typeof objNum,objNum)
//for value
// var valNum = objNum.valueOf()
// console.log(typeof valNum, valNum)
// var num =Number('123')
// console.log(typeof num, num)

//Object of String
var objStr = new String("faizan");
// console.log(typeof objStr,objStr)
// for value
// var valStr = objStr.valueOf()
// console.log(typeof valStr, valStr)
// var Str =String('123')
// console.log(typeof Str, Str)

//Object of Boolean
var objBool = new Boolean();
// console.log(typeof objBool,objBool)
// for value
// var valBool = objBool.valueOf()
// console.log(typeof valBool, valBool)
// var Bool =Boolean('123')
// console.log(typeof Bool, Bool)

//Object Method
var obj = {
  name: "ali",
  cnic: 113243242443,
  age: 20,
  get: function () {
    console.log(
      this.name + " age is " + this.age + " and cnic number is " + this.cnic
    );
  },
};
obj.time = 24;
// obj.get()
// console.log( obj.cnic)
// console.log( obj)
var check = "time" in obj;
//------- in return boolean true or false and use object key in string form e.g "time"
// console.log(check)

//Constructor Functions ----------- if we want to make multipal obj but all have same key diff value so we can use constructor functions
function user(first, last, age, cnic) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.cnic = cnic;
}

var user1 = new user("faizan", "pervaiz", 20, 312313123123);
var user2 = new user("hasnain", "ali", 24, 3242313123123);
//This would be just a regular function call if it weren't for that new. It's the keyword that tells JavaScript to create a new object.
// console.log(user1)
// console.log(user2)


//Prototypes ---------we can not add key and value outside the constructor function like we do in object but with the help of prototype we can do now
user.prototype.city ;
// console.log(user1)
user.prototype.sayHello = function () {
  alert("Hello world");
};
// user.prototype.sayHello()
