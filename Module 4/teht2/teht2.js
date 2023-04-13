
document.querySelector('#form').addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const code = document.querySelector('#query').value;
    try {
        const response = await fetch (`https://api.tvmaze.com/search/shows?q=${code}`);
        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch (error){

    }
});