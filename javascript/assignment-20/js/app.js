//1) onClick
function clk() {
  alert("Hello");
}

//2) onMouseover
function mouseOver() {
  var get = document.getElementById("main");
  get.style.color = "red";
}

//3) onMouseout
function mouseOut() {
  var get = document.getElementById("main");
  get.style.color = "blue";
}

//4) onFocus

function focusOn() {
  var input = document.getElementById("input");
  input.style.backgroundColor = "blue";
}

//5) onBlur
function blurOn() {
  var input = document.getElementById("input");
  input.style.borderColor = "red";
}

//6) onKeyPress
function keyPress() {
  var input = document.getElementById("input");
  input.style.Color = "red";
}

// 7) Mouse Event // 9) Add Class
function mouseIn() {
  var img = document.getElementById("img");
  img.src = "assests/img/2.jpg";
  img.setAttribute("class", "img");
  img.style.height = "400px";
}

//10) getElementById
var img = document.getElementById("img");

//11) getElementByTagName
var clas = document.getElementsByClassName("img");
