const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n\n");

let sum_yes = 0;

values.forEach(group => {
  const individuals = group.split("\n");

  let yes = [];
  individuals.forEach(individual => {
    const answers = individual.split("");
    answers.forEach(answer => {
      if(!yes.includes(answer)) {
        yes.push(answer);
      };
    });
  });

  sum_yes += yes.length;
});

console.log(sum_yes);
