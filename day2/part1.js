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
    const quantity_min = quantity_parts[0];
    const quantity_max = quantity_parts[1];

    target = target.replace(":","");

    let target_count = 0;
    for(let i=0; i<password.length; i++) {
      if(password.charAt(i) == target) {
        target_count += 1;
      }
    }

    if(target_count >= quantity_min && target_count <= quantity_max) {
      valid_passwords += 1;
    }
  }
});

console.log(valid_passwords);
