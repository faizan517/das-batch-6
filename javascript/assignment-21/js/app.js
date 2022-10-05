// setTimeout(function() {
//         console.log('Executed')
//     },500)

//    var time= setInterval(function() {
//             console.log('Hello')
//         },500)
//  var t
// function start() {
//   t= setInterval(function() {
//         console.log("www")
//         },500) 
//         console.log(t)
//         return t
// }

//     function stop() {
//         clearTimeout(t)    
//     }
    
//     function clear() {
//         clearInterval(t)
       
        
//     }

var timeoutId=null;
var check = "stop"

function start(){
    if(check==="stop"){
        timeoutId=window.setInterval(timer,1000);
        document.getElementById("start").innerHTML="Stop"; 
        check="start";
    }else{
    window.clearInterval(timeoutId);
    document.getElementById("start").innerHTML="Start";
    check="stop";
}}