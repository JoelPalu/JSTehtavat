
let numbers = [];
let result = "";
for (;;){
     let number = +prompt('Give number');
     if (number === 0){
          break
     }
     numbers.push(number);
}
numbers.sort()


for(const name of numbers){
     result += `<li>${name}</li>`;
}


document.getElementById('target').innerHTML = `${result}`;

