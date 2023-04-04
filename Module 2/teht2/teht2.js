let people = +prompt('Amount of people');
let names = [];
let result = "";
for (let i = 0; i < people; i++){
     let human = prompt('Give name');
     names.push(human);
}
names.sort()

for(const name of names){
     result += `<li>${name}</li>`;
}


document.getElementById('target').innerHTML = `${result}`;

