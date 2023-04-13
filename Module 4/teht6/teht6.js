
document.querySelector('#form').addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const code = document.querySelector('#query').value;

    try {
        document.getElementById('results').innerHTML= '';
        const response = await fetch (`https://api.chucknorris.io/jokes/search?query=${code}`);
        const jsonData = await response.json();
        console.log(jsonData);
        const main = document.querySelector('#results');
        for(let i = 0; i < jsonData.result.length; i++){
            const article = document.createElement("article");
            const p = document.createElement("p");
            p.textContent = jsonData['result'][i]['value'];
            console.log(jsonData['result'][i]['value']);
            article.appendChild(p);
            main.appendChild(article);
        }

    }
    catch (error){

    }
});
