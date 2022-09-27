var name = prompt("Enter Your Name")
var score = 0 
var correctAnswer= 0
var q1 =prompt("a for?")
var q2 =prompt("b for?")
var q3 =prompt("c for?")
var q4 =prompt("d for?")
var q5 =prompt("e for?")
var q6 =prompt("f for?")
var q7 =prompt("g for?")
var q8 =prompt("h for?")
var q9 =prompt("i for?")
var q10 =prompt("j for?")

if (q1 === "apple") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q2 === "ball") {
    score++
    if (score++) {
        correctAnswer++
    }

}else{
    score--
}
if (q3 === "cat") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q4 === "dog") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q5 === "egg") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q6 === "fan") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q7 === "ground") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q8 === "hat") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q9 === "iron") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}
if (q10 === "jam") {
    score++
    if (score++) {
        correctAnswer++
    }
}else{
    score--
}

// console.log("🚀 ~ file: app.js ~ line 3 ~ score", score)

var percentage = (score/10)*100+"%"

var grade = ""
if (percentage >= "90%") {
    grade = "A+"
}else if (percentage >= "70%") {
    grade = "A"
}else if (percentage >= "60%") {
    grade = "B"
}else if (percentage >= "50%") {
    grade = "C"
}else if (percentage >= "40%") {
    grade = "D"
}else if (percentage >= "30%") {
    grade = "E"
}else{
    grade = "F"
}
console.log("name:",name,"percentage:",percentage,"grade:",grade,"total no. of correct answers:",correctAnswer)
