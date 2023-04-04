let anal = confirm('Wanna count a square???');

if (anal === true){
    let num = +prompt('Give numbre');

    if (num >=0){
        let result = Math.sqrt(num);
        document.getElementById('target').innerHTML = `Square of ${num} is ${result} `;
    }
    else{
        document.getElementById('target').innerHTML = `You can't square an negative, you donut!`;
    }
}
else{
    document.getElementById('target').innerHTML = `Oh well... You just wasted my time :(`;
}
