//ZADACA 1

let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

console.log ("Does the student have either tea or milk?");
console.log (hasTea || hasMilk);

console.log ("Does the student have both coffee and tea?");
console.log (hasCoffee && hasTea); 

console.log ("Is it true that the student doesn't have tea?");
console.log (!hasTea); 

console.log ("Does the student have either coffee or milk, but not both?");
console.log ((hasCoffee || hasMilk) && (!(hasCoffee && hasMilk)));

console.log ("Is it true that the student has either tea and milk, or coffee and tea?");
console.log ((hasTea && hasMilk) || (hasCoffee && hasTea));

console.log ("Does the student have neither coffee nor tea?");
console.log (!hasCoffee && !hasTea);

//ZADACA 2

const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

const result1 = (num1-num4-num7)*num3/num4*(num2+num5+num6);
const result2 = ((num1**num4)**num7) * (num2/num6 + num3/num5);
const result3 = (num5 + num1)/(num3+num2)/(num4-num6+num7);
const result4 = (num1-num2+num3-num4+num5-num6+num7) * (num1+num2-num3+num4-num5+num6-num7); 
const result5 = ((num1%num3 * num5%num2)**num4) / (num6*num7); 
console.log ("1.", result1, "2.", result2, "3.", result3, "4.", result4, "5.", result5); 

//ZADACA 3
// ne moze da se koristat iminjata num1 i num2 zasto se veke iskoristeni vo zadaca2, zatoa vo zadaca 3 se postaveni number1 i number 2 kako iminja na varijablite

const number1 = 12
const number2 = 4
const sum = number1 + number2; 
const diff = number1 - number2; 
const mult = number1 * number2; 
const div= number1 / number2; 
const rem = number1 % number2; 

console.log ("sum:", sum, "diff:", diff, "mult:", mult, "div:", div, "rem:", rem)





