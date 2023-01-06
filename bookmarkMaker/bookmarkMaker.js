// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarksArray = [];

let bookmarkObject = {
    siteName: '',
    siteUrl: ''
};

let bookmarkForm = document.getElementById('bookmarkForm');

bookmarkForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

let siteNameInput = document.getElementById('siteNameInput');
let siteNameErrMsg = document.getElementById('siteNameErrMsg');

siteNameInput.addEventListener('change', function(event) {

    if (event.target.value === '') {
        siteNameErrMsg.textContent = 'Required*';
    } else {
        bookmarkObject.siteName = event.target.value;
        siteNameErrMsg.textContent = '';
    }

});

siteNameInput.addEventListener('blur', function(event) {

    if (event.target.value === '') {
        siteNameErrMsg.textContent = 'Required*';
    } else {
        siteNameErrMsg.textContent = '';
    }

});

let siteUrlInput = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById('siteUrlErrMsg');

siteUrlInput.addEventListener('change', function(event) {

    if (event.target.value === '') {
        siteUrlErrMsg.textContent = 'Required*';
    } else {
        bookmarkObject.siteUrl = event.target.value;
        siteUrlErrMsg.textContent = '';
    }
});

siteUrlInput.addEventListener('blur', function(event) {

    if (event.target.value === '') {
        siteUrlErrMsg.textContent = 'Required*';
    } else {
        siteUrlErrMsg.textContent = '';
    }
});

let bookmarksList = document.getElementById('bookmarksList');

function createAndAppendBookmarks(siteName, siteUrl) {

    //let siteName = item.siteName;
    //let siteUrl = item.siteUrl;

    let listItemEl = document.createElement('li');
    listItemEl.classList.add('list-item', 'shadow-lg');
    bookmarksList.appendChild(listItemEl);
    let listItemContainer = document.createElement('div');
    listItemContainer.classList.add('result-container');
    listItemEl.appendChild(listItemContainer);

    let nameEl = document.createElement('h1');
    nameEl.textContent = siteName;
    nameEl.classList.add('result-heading');
    listItemContainer.appendChild(nameEl);

    //let lineBreak = document.createElement('br');
    //listItemContainer.appendChild(lineBreak);

    let anchorEl = document.createElement('a');
    anchorEl.setAttribute('href', siteUrl);
    anchorEl.textContent = siteUrl;

    anchorEl.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(anchorEl.href, '_blank');
    });

    listItemContainer.appendChild(anchorEl);


}


let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event) {

    if (siteNameInput.value === '') {
        siteNameErrMsg.textContent = 'Required';
    }
    if (siteUrlInput.value === '') {
        siteUrlErrMsg.textContent = 'Required*';
    }
    if (siteNameInput.value !== '' && siteUrlInput.value !== '') {

        bookmarksArray.push(bookmarkObject);
        let siteName = siteNameInput.value;
        let siteUrl = siteUrlInput.value;
        createAndAppendBookmarks(siteName, siteUrl);
        siteNameInput.value = '';
        siteUrlInput.value = '';


    }
});