function rolldice() {
     const sides = +prompt('Give how many sides dice have?');
     let result = "";
     for (;;){
          let random = +Math.floor(Math.random() * sides) + 1;
               result += `<li>${random}</li>`;
               document.getElementById('target').innerHTML = `${result}`;
               if (random === sides) {
                    break
               }

          }
}