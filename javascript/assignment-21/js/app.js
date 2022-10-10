var min = 0;
var sec = 0;
var mili = 0;
var disMin = 0;
var disMili = 0;
var dispSec = 0;
var check = "stop";

function start() {
  if (check === "stop") {
    timeout = setInterval(timer, 17);
    document.getElementById("start").innerHTML = "Stop";
    check = "start";
  } else {
    clearInterval(timeout);
    document.getElementById("start").innerHTML = "Start";
    check = "stop";
  }
}
function timer() {
  sec++;
  if (sec / 60 == 1) {
    mili++;
    sec = 0;
    if (mili / 60 == 1) {
      min++;
      mili = 0;
    }
  }
  if (sec < 10) {
    dispSec = "0" + sec.toString();
  } else {
    dispSec = sec.toString();
  }
  if (mili < 10) {
    disMili = "0" + mili.toString();
  } else {
    disMili = mili.toString();
  }
  if (min < 10) {
    disMin = "0" + min.toString();
  } else {
    disMin = min.toString();
  }
  document.getElementById("timer").innerHTML =
    disMin + ":" + disMili + ":" + dispSec;
}
function reset() {
  clearInterval(timeout);
  sec = 0;
  mili = 0;
  min = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById("start").innerHTML = "Start";
}
