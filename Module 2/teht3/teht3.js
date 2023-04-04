let dogs = 6
let names = [];
let result = "";
for (let i = 0; i < dogs; i++){
     let dog = prompt('Give name');
     names.push(dog);
}
names.sort()
names.reverse()

for(const name of names){
     result += `<li>${name}</li>`;
}


document.getElementById('target').innerHTML = `${result}`;

