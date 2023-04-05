function rolldice() {
     let numbers = [];
     let result = "";
     for (;;){
          let random = +Math.floor(Math.random() * 6) + 1;
               numbers.push(random);
               result += `<li>${random}</li>`;
               document.getElementById('target').innerHTML = `${result}`;
               if (random === 6) {
                    break
               }

          }
}



rolldice();