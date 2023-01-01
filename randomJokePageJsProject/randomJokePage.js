let jokeText = document.getElementById('jokeText');
let jokeBtn = document.getElementById('jokeBtn');
let spinner = document.getElementById('spinner');

jokeBtn.onclick = function() {
    spinner.classList.toggle('d-none');
    let url = 'https://apis.ccbp.in/jokes/random';
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.toggle('d-none');
            jokeText.textContent = jsonData.value;
        });
};