const rolls = +prompt('How many times you wanna roll the dice');
let total = 0;
for (let i = 0; i < rolls; i++){
     total += Math.floor((Math.random() * 6) + 1);
}

document.getElementById('target').innerHTML = `You rolled ${total}`;
