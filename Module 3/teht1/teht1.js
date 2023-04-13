document.getElementById('target').innerHTML = `${names}`;
function concat(names) {
     let result = "";
     for(let i of names){
          result = result.concat(i);
     }
     document.getElementById('target').innerHTML = `${result}`;
}

