const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n");

let valid_passwords = 0;

values.forEach(row => {
  if(row != "") {
    const row_parts = row.split(" ");
    const quantity = row_parts[0];
    let target = row_parts[1];
    const password = row_parts[2];
    
    const quantity_parts = quantity.split("-");
    const position1 = quantity_parts[0]-1;
    const position2 = quantity_parts[1]-1;

    target = target.replace(":","");

    if(
      (password.charAt(position1) == target && password.charAt(position2) != target) || 
      (password.charAt(position1) != target && password.charAt(position2) == target)
    ) {
      valid_passwords +=1;
    }
  }
});

console.log(valid_passwords);
