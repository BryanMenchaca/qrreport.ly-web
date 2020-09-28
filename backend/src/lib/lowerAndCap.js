const capFirstLetter = require("./capFirstLetter");

module.exports = (value) => {
  const words = value.split(" ").map((word) => {
    return capFirstLetter(word.toLowerCase());
  });

  var newValue = "";

  words.forEach((element, index) => {
    index == words.length - 1
      ? (newValue += `${element}`)
      : (newValue += `${element} `);
  });

  return newValue;
};
