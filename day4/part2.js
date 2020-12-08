const fs = require("fs");
const input_path = "input.txt";

const input = fs.readFileSync(input_path, "utf-8");
const values = input.split("\n\n");

let valid_passports = 0;

function checkValid(extracted_value, key) {
  let valid = false;

  switch(key) {
    case 'byr':
      if(extracted_value[1].length == 4 && parseInt(extracted_value[1]) >= 1920 && parseInt(extracted_value[1]) <= 2002) {
        valid = true;
      }
      break;
    case 'iyr':
      if(extracted_value[1].length == 4 && parseInt(extracted_value[1]) >= 2010 && parseInt(extracted_value[1]) <= 2020) {
        valid = true;
      }
      break;
    case 'eyr':
      if(extracted_value[1].length == 4 && parseInt(extracted_value[1]) >= 2020 && parseInt(extracted_value[1]) <= 2030) {
        valid = true;
      }
      break;
    case 'hgt':
      regex = extracted_value[1].match(/(\d+)(cm|in)/);
      if(regex) {
        value = regex[1];
        unit = regex[2];
        if(unit == 'cm' && parseInt(value) >= 150 && parseInt(value) <= 193) {
          valid = true;
        }
        else if(unit == 'in' && parseInt(value) >= 59 && parseInt(value) <= 76) {
          valid = true;
        }
      }
      break;
    case 'hcl':
      if(extracted_value[1].length == 7 && extracted_value[1].match(/#(\d|[a-f]){6}/)) {
        valid = true;
      }
      break;
    case 'ecl':
      const allowed_eye_colours = ['amb','blu','brn','gry','grn','hzl','oth'];
      if(allowed_eye_colours.includes(extracted_value[1])) {
        valid = true;
      }
      break;
    case 'pid':
      if(extracted_value[1].length == 9 && extracted_value[1].match(/\d{9}/)) {
        valid = true;
      }
      break;
    case 'cid':
      valid = true;
      break;
    default:
      valid = false;
  }

  console.log(`${key}: ${extracted_value[1]} valid: ${valid}`);

  return valid;
}

function extractValue(input, key) {
  const regex = new RegExp(`${key}:(.*?)(\\s|\$)`);
  return input.match(regex);
}

function extractAndValidate(input, key) {
  const extract = extractValue(input, key);
  const valid = extract ? checkValid(extract, key) : false;
  return valid;
}

values.forEach(passport => {
  const byr = extractAndValidate(passport, 'byr');
  const iyr = extractAndValidate(passport, 'iyr');
  const eyr = extractAndValidate(passport, 'eyr');
  const hgt = extractAndValidate(passport, 'hgt');
  const hcl = extractAndValidate(passport, 'hcl');
  const ecl = extractAndValidate(passport, 'ecl');
  const pid = extractAndValidate(passport, 'pid');
  const cid = extractAndValidate(passport, 'cid');

  if(byr && iyr && eyr && hgt && hcl && ecl && pid) {
    valid_passports += 1;
  }
});

console.log(valid_passports);
