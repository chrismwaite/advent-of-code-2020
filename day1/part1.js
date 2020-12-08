const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n");

function multiplyNumbers(value, value2) {
  return parseInt(value)*parseInt(value2);
}

function compareSumToValue(value, value2, comparison) {
  if((parseInt(value)+parseInt(value2)) == comparison) {
    return true;
  }
  return false;
}

values.forEach(value => {
  values.forEach(value2 => {
    if(compareSumToValue(value, value2, 2020)) {
      console.log(multiplyNumbers(value, value2));
    }
  });
});
