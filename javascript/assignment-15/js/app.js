var names = [
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
];
function replaceName(replaceName, newName) {
  var newArray = [];
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names[i].length; j++) {
      if (names[i][j] === replaceName) {
        newArray.push(newName);
      } else {
        newArray.push(names[i][j]);
      }
    }
    return newArray;
  }
}
var result = replaceName("Sana", "Faizan");
console.log(result);
