function save() {
  alert("you click the right link");
}

function greet() {
  var i = prompt("enter your name");
  alert("hi" + " " + i);
  alert(" length of user input is " + i.length);
}

function phone() {
  alert(" Thanks for purchasing");
}
function iN() {
  var id = document.getElementById("over");
  id.setAttribute("class", "over");
}
function out() {
  var id = document.getElementById("over");
  id.setAttribute("class", "out");
}
function swap() {
  var id = document.getElementById("swap");
  if (id.src.match("assests/img/background.jpg")) {
    id.src = "assests/img/phone.png";
  } else {
    id.src = "assests/img/background.jpg";
  }
}
