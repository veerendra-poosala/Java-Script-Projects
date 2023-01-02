let userInput = document.getElementById('userInput');
let spinner = document.getElementById('spinner');
let factEle = document.getElementById('fact');

userInput.addEventListener('keydown', function() {
    factEle.textContent = '';
    
    if (event.key === 'Enter') {
        spinner.classList.toggle('d-none');
        
        let number = userInput.value;
        let url = 'https://apis.ccbp.in/numbers-fact?number=' + number;
        let options = {
            method: 'GET'
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                spinner.classList.toggle('d-none');
                let {
                    fact
                } = jsonData;
                factEle.textContent = fact;

            });
    }
});