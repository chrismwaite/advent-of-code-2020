const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n");

function multiplyNumbers(value_array) {
  let total = 1;

  value_array.forEach(value => {
    total *= parseInt(value);
  });

  return total;
}

function compareSumToValue(value_array, comparison) {
  let total = 0;
  
  value_array.forEach(value => {
    total += parseInt(value);
  });
  
  if(total == comparison) {
    return true;
  }
  
  return false;
}

values.forEach(value => {
  values.forEach(value2 => {
    values.forEach(value3 => {
      if(compareSumToValue([value, value2, value3], 2020)) {
        console.log(multiplyNumbers([value, value2, value3]));
      }
    })
  });
});
