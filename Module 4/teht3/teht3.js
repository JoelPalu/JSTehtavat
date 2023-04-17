
document.querySelector('#form').addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const code = document.querySelector('#query').value;

    try {
        const response = await fetch (`https://api.tvmaze.com/search/shows?q=${code}`);
        const jsonData = await response.json();
        console.log(jsonData);
        const main = document.querySelector('#results');
        while (main.firstChild) {
            main.removeChild(main.lastChild);
          }

        for(let i = 0; i < jsonData.length; i++){
            const article = document.createElement("article");

            const h2 = document.createElement("h2");
            h2.textContent = `${jsonData[i]['show']['name']}`;
            article.appendChild(h2);

            const a = document.createElement("a");
            a.href = `${jsonData[i]['show']['url']}`;
            a.target ='_blank';
            a.textContent = `${jsonData[i]['show']['url']}`;
            article.appendChild(a);

            const img = document.createElement("img");
            if(jsonData[i]['show']['image'] === null || jsonData[i]['show']['image']['medium'] === null){
                img.src ='https://img.freepik.com/free-vector/flat-404-error-template_23-2147741200.jpg?w=740&t=st=1681302710~exp=1681303310~hmac=56140c57d866db42e8e19306944909565e602a7745267bafacafebf62be7d981';
                img.width = 400;
            }
            else(img.src = `${jsonData[i]['show']['image']['medium']}`)
            img.alt = `${jsonData[i]['show']['name']}`;
            article.appendChild(img);

            const summ = document.createElement("div");
            summ.innerHTML = `${jsonData[i]['show']['summary']}`;
            article.appendChild(summ)

            main.appendChild(article)

        }

    }
    catch (error){

    }
});
