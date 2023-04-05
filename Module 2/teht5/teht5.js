
let numbers = [];
let result = "";
for (;;){
     let number = +prompt('Give number');
     if (numbers.indexOf(number) !== -1){
          alert("You entered that number already");
          break;
     }
     numbers.push(number);
}
numbers.sort();

console.log(numbers)