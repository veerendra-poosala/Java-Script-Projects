let searchInput = document.getElementById('searchInput');
let spinner = document.getElementById('spinner');
let resultCountries = document.getElementById('resultCountries');


function createAndAppendCountries(country) {

    let {

        name,
        flag,
        population
    } = country;
    //console.log(name, flag, population);

    let containerCard = document.createElement('div');
    containerCard.classList.add('col-12', 'col-md-5', 'd-flex', 'flex-row', 'country-card','mr-1','ml-1');
    resultCountries.appendChild(containerCard);

    let brEle = document.createElement('br');
    containerCard.appendChild(brEle);

    //console.log(flag);
    let flagEle = document.createElement('img');
    flagEle.src = flag;
    flagEle.classList.add('country-flag');
    containerCard.appendChild(flagEle);

    //creating text card
    let countryTextCard = document.createElement('div');
    countryTextCard.classList.add('pl-3');
    containerCard.appendChild(countryTextCard);

    //creating name element 
    let nameEle = document.createElement('p');
    nameEle.textContent = name;
    nameEle.classList.add('country-name');
    countryTextCard.appendChild(nameEle);

    //creating population Element
    let populationEle = document.createElement('p');
    populationEle.textContent = population;
    populationEle.classList.add('country-population');
    countryTextCard.appendChild(populationEle);
    //console.log(resultCountries);

}

function loadCountriesData() {
    spinner.classList.toggle('d-none');
    let url = 'https://apis.ccbp.in/countries-data';
    let options = {
        method: 'GET'
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            spinner.classList.toggle('d-none');
            //console.log(jsonData.length)
            //console.log(jsonData[20])
            for (let country of jsonData) {
                //console.log(country);
                createAndAppendCountries(country);

            }


        });

}
loadCountriesData();
//console.log(countriesArray)


function displaySearchResults() {
    let searchInputVal = searchInput.value;
    let url = 'https://apis.ccbp.in/countries-data';
    let options = {
        method: 'GET'
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            for (let country of jsonData) {
                let countryName = country.name;

                if (countryName.toLowerCase().includes(searchInputVal.toLowerCase())) { //Use toLowerCase() method to convert the string to lower case
                    createAndAppendCountries(country);
                }
            }
        });


}

searchInput.addEventListener('keydown', function() {
    resultCountries.innerHTML = '';
    displaySearchResults();
});