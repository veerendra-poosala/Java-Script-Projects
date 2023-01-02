let searchInput = document.getElementById('searchInput');
let spinner = document.getElementById('spinner');
let searchResults = document.getElementById('searchResults');


function createAndAppendElements(result) {

    let {
        title,
        link,
        description
    } = result;

    let searchResultItem = document.createElement('div');
    searchResultItem.classList.add('result-item');
    searchResults.appendChild(searchResultItem);

    let titleElement = document.createElement('a');
    titleElement.classList.add('result-title');
    titleElement.href = link;
    titleElement.target = '_blank';
    titleElement.textContent = title;
    searchResultItem.appendChild(titleElement);

    let breakElement = document.createElement('br');
    searchResultItem.appendChild(breakElement);

    let linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.textContent = link;
    linkElement.target = '_blank';
    linkElement.classList.add('result-url');
    searchResultItem.appendChild(linkElement);

    let descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.classList.add('link-description');
    searchResultItem.appendChild(descriptionElement);


}

function getSearchResultData(keyword) {
    let url = 'https://apis.ccbp.in/wiki-search?search=' + keyword;
    let options = {
        method: 'GET',

    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            spinner.classList.toggle('d-none');
            //console.log(jsonData.search_results.length);
            let dataArray = jsonData.search_results;
            for (let result of dataArray) {
                createAndAppendElements(result);
            }

        });

}

function pressEnterBtn() {
    let keyword = searchInput.value;
    if (keyword === '') {
        alert("Please enter a valid keyname");
    } else {
        getSearchResultData(keyword);
    }
}

searchInput.addEventListener('keydown', function() {
    //console.log(event.key)

    if (event.key === 'Enter') {
        spinner.classList.toggle('d-none');
        pressEnterBtn();
    }
});