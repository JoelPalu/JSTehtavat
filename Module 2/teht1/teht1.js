let list = [];

for (let i = 0; i < 5; i++){
     let num = +prompt('Give numbre');
     list.unshift(num)
}

document.getElementById('target').innerHTML = ` ${list}`;

