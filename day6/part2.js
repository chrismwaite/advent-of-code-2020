const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n\n");

let sum_yes = 0;

values.forEach(group => {
  const individuals = group.split("\n");
  
  let all_answers = [];

  individuals.forEach(individual => {
    const answers = individual.split("");
    all_answers = all_answers.concat(answers);
  });

  let yes = 0;

  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].forEach(letter => {
    let count = 0;
    for(let x=0; x < all_answers.length; x++) {
      if(all_answers[x] == letter) {
        count += 1;
      }
    }
    
    if(count == individuals.length) {
      yes += 1;
    }
  });

  sum_yes += yes;

  console.log(`${group}: ${yes}`);

 });

console.log(sum_yes);
