let name = prompt('What is your name?');

let random = Math.floor(Math.random() * 4) + 1;

if (random == 1) {
    document.getElementById('target').innerHTML = `${name} you are Gryffindor`;
}
else if (random === 2) {
    document.getElementById('target').innerHTML = `${name} you are Slytherin`;
}
else if (random === 3) {
    document.getElementById('target').innerHTML = `${name} you are Hufflepuff`;
}
else if (random === 4) {
    document.getElementById('target').innerHTML = `${name} you are Ravenclaw`;
}
