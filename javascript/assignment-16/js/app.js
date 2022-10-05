//Simple Function
function name() {
  alert("Hello World");
}
// name()
// name()

//Parameterized Function
function name(n) {
  alert("hi" + " " + n);
}
// name('faizan')

//Function Returning
function nameReturn() {
  var user = prompt("Enter name");
  return user;
}
// var n = nameReturn()
// console.log(n)

//Local Variables--------- local variable is only accessible to the current scope like within a function or loop etc although there is some ways to acess local variable into global
function local() {
  var string = "fazi";
  console.log(string);
}
// console.log(string)

//Global Variables ---------- A global variable is easily accessible globally and localy

var country = ["pakistan", "india", "brazil", "UAE"];
function countryName() {
  console.log(country);
  for (let i = 0; i < country.length; i++) {
    console.log(i);
  }
}
// countryName()

//Access Local Variables Globally using return
function local() {
  var string = "fazi";
  return string;
}
//  var string = local()
//  console.log(string)

//While Loop
i = 0;
while (i < 10) {
  var text = "The number is " + i;
  i++;
  // console.log( text)
}

//Do-while Loop
do {
  var text = "The number is " + i;
  i++;
} while (i < 10);
{
  i = 0;
  // console.log( text)
}

//Create function & variable then call and use that function in another script file.
var n = external();
console.log(n);
