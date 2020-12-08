const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n");

let highest_id = 0;
const rows = 128;
const columns = 8;

let seat_ids = [];

values.forEach(boarding_pass => {
  boarding_pass_array = boarding_pass.split("");
  
  current_range_min = 0; //0
  current_range_max = (rows-1); //127

  let row = null;
  let column = null;

  //row
  for(let x=0; x<7; x++) {
    current_value = boarding_pass_array[x];

    current_front_min = current_range_min;
    current_front_max = current_range_min+((((current_range_max+1)-current_range_min) / 2)-1);
    current_back_min = current_front_max + 1;
    current_back_max = current_range_max;

    //console.log(`${current_front_min}-${current_front_max} ${current_back_min}-${current_back_max}`);

    if(current_value == 'F') {
      current_range_min = current_front_min;
      current_range_max = current_front_max;
    }
    else if(current_value == 'B') {
      current_range_min = current_back_min;
      current_range_max = current_back_max;
    }
    //console.log(`${current_value}: ${current_range_min}-${current_range_max}`);
    row = current_range_min;
  }

  current_range_min = 0; //0
  current_range_max = (columns-1); //7

  //column
  for(let x=7; x<10; x++) {
    current_value = boarding_pass_array[x];

    current_front_min = current_range_min;
    current_front_max = current_range_min+((((current_range_max+1)-current_range_min) / 2)-1);
    current_back_min = current_front_max + 1;
    current_back_max = current_range_max;

    //console.log(`${current_front_min}-${current_front_max} ${current_back_min}-${current_back_max}`);

    if(current_value == 'L') {
      current_range_min = current_front_min;
      current_range_max = current_front_max;
    }
    else if(current_value == 'R') {
      current_range_min = current_back_min;
      current_range_max = current_back_max;
    }
    //console.log(`${current_value}: ${current_range_min}-${current_range_max}`);
    column = current_range_min;
  }

  const seat_id = (parseInt(row)*8)+parseInt(column);
  seat_ids.push(seat_id);

  if(seat_id > highest_id) {
    highest_id = seat_id;
  }

  //console.log(`${boarding_pass}: row ${row}, column ${column}, seat ID ${seat_id}`);
});

seat_ids = seat_ids.sort();

missing_id = 0;

for(x = 0; x < seat_ids.length-1; x++) {
  if(seat_ids[x+1]-seat_ids[x] == 2) {
    missing_id=seat_ids[x]+1;
  }
}

console.log(missing_id);
