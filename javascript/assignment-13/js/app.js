// var text =
//   "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";

// //slice
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 4) === "lazy") {
//     text = text.slice(0, i) + "big" + text.slice(i + 4);
//   }
//   if (text.slice(i, i + 5) === "quick") {
//     text = text.slice(0, i) + "lazy" + text.slice(i + 5);
//   }
//   if (text.slice(i, i + 5) === "brown") {
//     text = text.slice(0, i) + "black" + text.slice(i + 5);
//   }
//   if (text.slice(i, i + 3) === "fox") {
//     text = text.slice(0, i) + "cat" + text.slice(i + 3);
//   }
//   if (text.slice(i, i + 3) === "dog") {
//     text = text.slice(0, i) + "wall" + text.slice(i + 3);
//   }
// }
// console.log(text)

// indexOf
// var iindexof = text.indexOf("jump")
// text = text.slice(0,iindexof)+ 'bounce' + text.slice(iindexof+5)

// lastIndexOf
// var llastIndexOf = text.lastIndexOf("brown")
// text = text.slice(0,llastIndexOf)+'black'+ text.slice(llastIndexOf+5)

//replace
// var result = text.replace("the",'A')

//Global replace
// var result = text.replace(/jumps/g,'jumping')
// console.log(result)
