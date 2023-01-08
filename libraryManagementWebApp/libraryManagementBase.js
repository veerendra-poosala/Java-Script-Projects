let word = null;
let searchInput = document.getElementById('searchInput');
let searchResultsContainer = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');


function createAndAppendBookResult(bookDetails) {
    /*
    bookDetails = {
        title: "The Routledge Handbook of the State in Premodern India",
        imageLink: "http://books.google.com/books/content?id=yPlUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: "Hermann Kulke"

    }
    */

    let title = bookDetails.title;
    let imageLink = bookDetails.imageLink;
    let author = bookDetails.author;

    let booksBgContainer = document.createElement('div');
    booksBgContainer.classList.add('col-12', 'col-md-3', 'p-1', 'ml-1', 'mr-1', 'text-center');
    searchResultsContainer.appendChild(booksBgContainer);


    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageLink);
    imageElement.classList.add('book-cover-photo');
    booksBgContainer.appendChild(imageElement);

    let authorName = document.createElement('p');
    authorName.textContent = author;
    authorName.classList.add('book-author-name');
    booksBgContainer.appendChild(authorName);



}

function fetchLibraryBooks(bookName) {
    //bookName = 'india';
    let url = "https://apis.ccbp.in/book-store?title=" + bookName;

    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            if (jsonData.total <= 0) {
                spinner.classList.toggle('d-none');
                document.getElementById('noResultsFound').textContent = 'No results found';
                document.getElementById('searchResults').innerHTML = '';
                document.getElementById('popularBooks').textContent = '';
            } else {
                document.getElementById('noResultsFound').textContent = '';
                document.getElementById('popularBooks').textContent = 'Popular Books';
                document.getElementById('searchResults').innerHTML = '';
                spinner.classList.toggle('d-none');
                let searchResultsArray = jsonData.search_results;
                for (let eachItem of searchResultsArray) {
                    createAndAppendBookResult(eachItem);
                }

            }
        });

}


searchInput.addEventListener('keydown', function(event) {

    word = searchInput.value;

    spinner.classList.toggle('d-none');

    fetchLibraryBooks(word);

});