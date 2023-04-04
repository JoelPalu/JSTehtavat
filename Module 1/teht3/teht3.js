const num1n = +prompt('give number 1st.');
const num2n = +prompt('give number 2nd.');
const num3n = +prompt('give number 2nd.');

let sum = num1n + num2n + num3n;
let prod = num1n * num2n * num3n;
let average = (num1n + num2n + num3n)/3;

document.getElementById('target').innerHTML = `${sum}, ${prod}, ${average}`;