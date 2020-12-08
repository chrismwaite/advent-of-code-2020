const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n\n");

let valid_passports = 0;

function extractValue(input, key) {
  const regex = new RegExp(`${key}:(.*?)(\\s|\$)`);
  return input.match(regex);
}

values.forEach(passport => {
  const byr = extractValue(passport, 'byr');
  const iyr = extractValue(passport, 'iyr');
  const eyr = extractValue(passport, 'eyr');
  const hgt = extractValue(passport, 'hgt');
  const hcl = extractValue(passport, 'hcl');
  const ecl = extractValue(passport, 'ecl');
  const pid = extractValue(passport, 'pid');
  const cid = extractValue(passport, 'cid');

  if(byr && iyr && eyr && hgt && hcl && ecl && pid) {
    valid_passports += 1;
  }
});

console.log(valid_passports);
