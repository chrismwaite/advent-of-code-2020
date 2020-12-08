const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n");
let map = [];

values.forEach(row => {
  const row_array = row.split("");
  map.push(row_array);
});

const bounds_x = map[0].length; //chars per row, before repeating
const bounds_y = map.length; //rows - we stop at bottom

let position_x = 0;
let position_y = 0;

let trees = 0;

for(position_y=1; position_y<=bounds_y; position_y++) {
  if(map[position_y]) {
    position_x += 3;

    let index_position_x = position_x;
    
    if(position_x > bounds_x) {
      let columns = Math.floor(position_x / bounds_x);
      let positions = columns * bounds_x;
      index_position_x = position_x-positions;
    }

    console.log(`${position_y}-${position_x}`);
    console.log(map[position_y][index_position_x]);
    
    if(map[position_y][index_position_x] == '#') {
      trees += 1;
    }
  }
}

console.log(trees);
