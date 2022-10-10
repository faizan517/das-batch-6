//1) Object of (Number,String,Boolean,Method)

var obj = {
  name: "ali",
  cnic: 113243242443,
  boolean: true,
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
// console.log(check)

//2) Constructor Functions ----------- if we want to make multipal obj but all have same key diff value so we can use constructor functions
function User(first, last, age, cnic) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.cnic = cnic;
}

var user1 = new User("faizan", "pervaiz", 20, 312313123123);
var user2 = new User("hasnain", "ali", 24, 3242313123123);
//This would be just a regular function call if it weren't for that new. It's the keyword that tells JavaScript to create a new object.
// console.log(user1)
// console.log(user2)

//3) Prototypes ---------we can not add key and value outside the constructor function like we do in object but with the help of prototype we can do now
User.prototype.city;
// console.log(user1)
User.prototype.sayHello = function () {
  alert("Hello world");
};
// user.prototype.sayHello()
