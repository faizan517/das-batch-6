var main = document.getElementById("main");

//heading
var headingDiv = document.createElement("div");
headingDiv.setAttribute("class", "headingDiv");
var h1 = document.createElement("h1");
h1.innerHTML = "Login";
headingDiv.appendChild(h1);
main.appendChild(headingDiv);

//input
var inputDiv = document.createElement("div");
inputDiv.setAttribute("class", "inputDiv");

var input1 = document.createElement("input");
input1.setAttribute("placeholder", "username");
inputDiv.appendChild(input1);
main.appendChild(inputDiv);

var input2 = document.createElement("input");
input2.setAttribute("placeholder", "password");
inputDiv.appendChild(input2);
main.appendChild(inputDiv);

var p = document.createElement("p");
p.setAttribute("class", "fp");
p.innerText = "Forgot Password?";
inputDiv.appendChild(p);
main.appendChild(inputDiv);

var button = document.createElement("button");
button.innerHTML = "Login";
inputDiv.appendChild(button);
main.appendChild(inputDiv);

var signup = document.createElement("p");
signup.innerText = "Not a member?";
var a = document.createElement("a");
a.style = "color: #2691D9";
a.innerHTML = "Signup";
signup.appendChild(a);
main.append(signup);
