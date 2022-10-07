function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

var score = 0;
var wicket = 0;
var score2 = 0;
var wicket2 = 0;
var numofOver = prompt("enter number of overs");
var team1 = prompt("enter team first name ");
var team2 = prompt("enter team second name ");
sleepFor(1000)
console.log("The match is between "+ " " +  team1  +  " and " + team2 )
var math = Math.random().toFixed();
if (math) {
  sleepFor(3000);
  console.log(
    "team " + " " + team1 + " " + "win the toss and decide to bat first"
  );
  sleepFor(2000);
  console.log(
    numofOver +
      " " +
      " Overs match started,"
  );
}
 else {
//   sleepFor(3000);
//   console.log(
//     numofOver +
//       " " +
//       " Overs match started, " +
//       " " +
//       team2 +
//       " " +
//       " is to bat."
//   );
//   console.log(
//     "team " + " " + team2 + " " + "win the toss and decide to bat first"
//   );
}

for (let j = 1; j <= numofOver; j++) {
    sleepFor(2000)
  console.log(j + " " + "over:");
  for (let i = 1; i <= 6; i++) {
    var m = Math.random();
    var improvedNum = (m * 7);
    var numFloor = Math.floor(improvedNum);
    //   console.log(numFloor)
    if (numFloor == 0) {
      ++wicket;
      sleepFor(2000);
      console.error("It's out!");
    } else if (numFloor == 4) {
      ++score;
      ++score;
      ++score;
      ++score;
      sleepFor(1000);
      console.log("It's a four");
    } else if (numFloor == 6) {
      ++score;
      ++score;
      ++score;
      ++score;
      ++score;
      ++score;
      sleepFor(1000);
      console.log("It's a magnificent six");
    } else if (numFloor == 1) {
      ++score;
    } else if (numFloor == 2) {
      ++score;
      ++score;
    } else if (numFloor == 3) {
      ++score;
      ++score;
      ++score;
    }
    // console.log(improvedNum)
  }
  console.warn(team1 + " " +  "score" + " " + score + "/" + wicket);
}
// console.log("total score" + " " + score + "/" + wicket);
console.log(
  "team " + " " + team2 + " " + "has to score" + " " + ++score + " " + "to win"
);
// console.log("wicket"+ " " + wicket)

for (let j = 1; j <= numofOver; j++) {
    sleepFor(2000)
  console.log(j + " " + "over:");
  for (let i = 1; i <= 6; i++) {
    var m = Math.random();
    var improvedNum = (m * 7);
    var numFloor = Math.floor(improvedNum);
    if (numFloor == 0) {
      ++wicket2;
      sleepFor(2000);
      console.error("It's out!");
    } else if (numFloor == 4) {
      ++score2;
      ++score2;
      ++score2;
      ++score2;
      sleepFor(1000);
      console.log("It's a four");
    } else if (numFloor == 6) {
      ++score2;
      ++score2;
      ++score2;
      ++score2;
      ++score2;
      ++score2;
      sleepFor(1000);
      console.log("It's a magnificent six");
    } else if (numFloor == 1) {
      ++score2;
      // console.log( "It's out!")
    } else if (numFloor == 2) {
      ++score2;
      ++score2;
      // console.log( "It's out!")
    } else if (numFloor == 3) {
      ++score2;
      ++score2;
      ++score2;
    }
  }
  console.warn( team2 + " " + "score" + " " + score2 + "/" + wicket2);
}
--score
if (score > score2) {
  console.log("team " + " " + team1 + " " + "won");
} else if (score < score2) {
  console.log("team " + " " + team2 + " " + "won");
} else if (score == score2){
  console.log("Tie");
}

console.warn(
  "Total score" +
    " " +
    team1 +
    " " +
    score +
    "/" +
    wicket +
    " " +
    "Total score" +
    " " +
    team2 +
    " " +
    score2 +
    "/" +
    wicket2
);
