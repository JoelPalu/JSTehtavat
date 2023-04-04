let year = +prompt('Give year');

if (year%4===0 && year%100!==0 || year%400 === 0){
    document.getElementById('target').innerHTML = `${year} is leap`;
}
else {
     document.getElementById('target').innerHTML = `${year} not leap`;
}
