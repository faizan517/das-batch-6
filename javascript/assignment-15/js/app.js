var names = [
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
];
function replaceName(replaceName, newName) {
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names[i].length; j++) {
      if (names[i][j] === replaceName) {
        names[i][j] = newName;
      }
    }
  }
  if (!newName) {
    console.log("Enter replace value");
  }
  return names;
}

var result = replaceName("Sana", "Faizan");
console.log(result);
