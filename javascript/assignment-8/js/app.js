//Q1
// var user = prompt("Enter Your Name")
// alert("Hi"+" "+ user)

//Q2
// var enterNum = prompt("Enter Number")

// var num = enterNum;
// if (num) {
//     for (let i = 1; i <= 10; i++) {

//         console.log(num + ' * ' + i + " = " + num*i)
//     }
// }

//Q3
// var city = prompt("Enter City Name")
// if (city == 'karachi') {
//     alert("Welcome to cityof lights")
// }else{
//     alert("Welcome" )
// }

//Q4
// var gender = prompt("Enter Your Gender")
// if (gender == 'male') {
//     alert("Good Morning Sir.")
// }else if(gender == 'female'){
//     alert("Good Morning Ma’am." )
// }

//Q5
// var trafficLight = prompt("Enter Traffic Light Color")
// if (trafficLight == 'red') {
//     alert("vehicles must stop")
// }else if(trafficLight == 'yellow'){
//     alert("vehicles should get ready to move" )
// }else if(trafficLight == 'green'){
//     alert("vehicles can move now" )
// }

//Q6
// var maxAge = prompt("Enter Max Age")
// var currAge = prompt("Enter Current Age")

// if (currAge <= maxAge  ) {
//     alert("You are welcome")
// }

//Q7
// var fuel = prompt("fuel in car (in litres)")

// if (fuel < 0.25  ) {
//     alert("Please refill the fuel in your car")
// }

//Q8
//a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Q9
// var math =Number( prompt("Enter Math Marks"))
// var science =Number( prompt("Enter science Marks"))
// var computer =Number( prompt("Enter computer Marks"))

// var obtainedMarks = math+science+computer
// var percentage = (obtainedMarks / 300) * 100
// var grade
// var remarks
// if (percentage >= 80) {
//     grade = "A-One"
//     remarks = "Excellent"
// }else if (percentage >= 70) {
//     grade = "A"
//     remarks = "Good"
// }else if (percentage >= 60) {
//     grade = "B"
//     remarks ="You need to improve"
// }else {
//     grade = "Fail"
//     remarks = "Sorry"
// }
// console.log("TotalMarks:"+" " + 300, "ObtainedMarks:"+ " "+obtainedMarks,"percentage:"+" "+ percentage+"%","Grade:"+ " " +grade,"Remarks:"+ " " +remarks)

//Q10
// var nameOfItem1 = prompt("Enter First Product name")
// var nameOfItem2 = prompt("Enter Second Product name")
// var priceOfItem1 = Number(prompt("Enter First Product Price"))
// var priceOfItem2 = Number(prompt("Enter Second Product Price"))
// var quantityOfItem1 = Number(prompt("Enter First Product Quantity"))
// var quantityOfItem2 = Number(prompt("Enter Second Product Quantity"))

// var shippingCharges = 200
// var total1 = priceOfItem1 * quantityOfItem1
// var total2 = priceOfItem2 * quantityOfItem2
// var addTotals = total1+total2

// if (addTotals >= 2000) {
//     addTotals = (addTotals-100)
// }

// console.log("nameOfItem1", nameOfItem1)
// console.log("priceOfItem1", priceOfItem1)
// console.log("nameOfItem2", nameOfItem2)
// console.log("priceOfItem2", priceOfItem2)
// console.log("shippingCharges", shippingCharges)
// console.log("addTotals", addTotals)
// console.log(addTotals)

//Q11
// var num = 5
// var secretNum = Number(prompt("Guess The Number"))
// if (secretNum == num) {
//     alert("Bingo! Correct Answer")
// }else if (secretNum+1 == num) {
//     alert('Close enough to the correct answer')
// }else if (secretNum-1 == num) {
//     alert('Close enough to the correct answer')
// }

//Q12
// var input =Number( prompt("Enter Number"))
// if (input % 3 == 0) {
//      console.log("the number is divisible by 3.")
// }

//Q13
// var fTeamN = prompt("Enter First Team Name")
// var fTeamS = prompt("Enter First Team Score")

// var sTeamN = prompt("Enter Second Team Name")
// var sTeamS = prompt("Enter Second Team Score")

// if (fTeamS > sTeamS) {
//     alert(fTeamN+ " " +"WON")
// }else if (sTeamS > fTeamS) {
//     alert(sTeamN+ " " +"WON")
// }else if (fTeamS == sTeamS) {
//     alert("TIE")
// }

//Q14
// var string = "pakistan";
// var number = 92;
// var boolean = true || false;
// console.log(string + " is " + typeof string);
// console.log(number + " is " + typeof number);
// console.log(boolean + " is " + typeof boolean);

//Q15
// var input = Number(prompt("Enter number"))
// if (input % 2 == 0) {
//     console.log('even')
// }else{
//     console.log( "odd")
// }

//Q16
// var temp = prompt("Enter Current Temperature")

// if (temp > 40) {
//     alert("It is too hot outside.")
// }else if (temp > 30) {
//     alert("The Weather today is Normal.")
// }else if (temp > 20) {
//     alert("Today’s Weather is cool.")
// }else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.")
// }

//Q17
// var first =Number( prompt("Enter First Number"))
// var Second =Number(prompt("Enter Second Number"))
// var op = prompt("Enter Operator")
// if ('*') {
//    console.log( (first*Second))
// }else if ('-') {
//     console.log( first-Second)
//  }else if ('+') {
//     console.log( (first+Second))
//  }else if ('/') {
//     console.log( first/Second)
//  }else if ('%') {
//     console.log( first%Second)
//  }

//Q18
// var days = prompt("What Day Is Today");
// var arr = ["monday", "tuesday", "wednesday", "thursday", "friday"];
// for (let i = 0; i < arr.length; i++) {
//   if (days == arr[i]) {
//     console.log("It’s a week day.");
// }
// }if (days == 'saturday') {
//   console.log("It’s weekend.");
// }else if (days == 'sunday') {
//   console.log("Yay! It’s a holiday.");
// }

//Q19
// var score = Number(prompt("Enter your score"))
// if (score > 50 ) {
//     console.log("You are passed.")
// }else{
//     console.log('Try again!')
// }

//Q20
// var num1 = Number(prompt("Enter First Numner "))
// var num2 = Number(prompt("Enter Second Numner "))

// if (num1 > num2) {

//     console.log("The greaternumber of "+ num1 +" and "+num2 +" is "+num1 +".")
// }else if (num2 > num1) {

//     console.log("The greaternumber of "+ num1 +" and "+num2 +" is "+num2 +".")
// }else if (num2 == num1) {

//     console.log( num1 +" and "+num2 +" is equal.")
// }

//Q21
// var lanCode = prompt("es , de , en")
// if (lanCode=='es') {
//     alert("Hola Mundo")
// }else if (lanCode=='en') {
//     alert("Hello world")
// }else if (lanCode=='de') {
//     alert("Hallo Welt")
// }

//Q22
// var input = prompt("Enter Number")
// if (input >= 1) {
//     console.log(input + " " +"positive")
// }else if (input < 0) {
//     console.log(input + " " +"negative")
// }

//Q23
// var noun = prompt("Enter Noun")
// var num = prompt("Enter Num")
// var result = (num+ " " +noun)
// console.log(result)
