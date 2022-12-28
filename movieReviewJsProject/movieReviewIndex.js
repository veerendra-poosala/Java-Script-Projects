let movieReviewsContainer = document.getElementById('movieReviewsContainer');
movieReviewsContainer.classList.add('container', 'movie-review-container');

//rowContainer
let rowContainer = document.createElement('div');
rowContainer.classList.add('row');
movieReviewsContainer.appendChild(rowContainer);

//column1
let column1Container = document.createElement('div');
column1Container.classList.add('col-12');
rowContainer.appendChild(column1Container);

//mainHeading
let mainHeading = document.createElement('h1');
mainHeading.textContent = 'Movie Reviews';
mainHeading.classList.add('main-heading');
column1Container.appendChild(mainHeading);

//column2
let column2Container = document.createElement('div');
column2Container.classList.add('col-12');
rowContainer.appendChild(column2Container);

//movieTitleHeading
let movieTitleHeading = document.createElement('h1');
movieTitleHeading.textContent = 'MOVIE TITLE';
movieTitleHeading.classList.add('sub-heading');
column2Container.appendChild(movieTitleHeading);

//adding titleInputElement
let titleInputElement = document.createElement('input');
titleInputElement.id = 'titleInput';
titleInputElement.type = 'text';
titleInputElement.classList.add('mb-3');
titleInputElement.setAttribute('placeholder', 'Enter the movie title here');
column2Container.appendChild(titleInputElement);

//column3
let column3Container = document.createElement('div');
column3Container.classList.add('col-12');
rowContainer.appendChild(column3Container);

//movieTitleHeading
let yourReviewHeading = document.createElement('h1');
yourReviewHeading.textContent = 'YOUR REVIEW';
yourReviewHeading.classList.add('sub-heading');
column3Container.appendChild(yourReviewHeading);

//adding titleInputElement
let reviewInputElement = document.createElement('textArea');
reviewInputElement.id = 'reviewTextarea';
reviewInputElement.setAttribute('rows', '4');
reviewInputElement.setAttribute('cols', '30');
reviewInputElement.setAttribute('placeholder', 'Enter your review here.');
column3Container.appendChild(reviewInputElement);

//column4
let column4Container = document.createElement('div');
column4Container.classList.add('col-12', 'd-flex', 'flex-row', 'justify-content-center');
rowContainer.appendChild(column4Container);

//adding addButton

let addButton = document.createElement('button');
addButton.id = 'addBtn';
addButton.textContent = 'add';
addButton.onclick = function() {
    let reviewText = document.getElementById('reviewTextarea');
    let titleInput = document.getElementById('titleInput');

    if ((reviewText.value.trim().length === 0) || (titleInput.value.trim().length === 0)) {
        alert("Enter a valid text!");

    } else {
        let reviewContainer = document.getElementById('reviewsContainer');
        let reviewMovieHeading = document.createElement('h1');

        reviewMovieHeading.textContent = "Movie Title: " + titleInput.value;
        reviewMovieHeading.classList.add('review-heading');
        reviewContainer.appendChild(reviewMovieHeading);

        let reviewMovieParagraph = document.createElement('p');

        reviewMovieParagraph.textContent = "Review: " + reviewText.value;
        reviewMovieParagraph.classList.add('review-paragraph');
        reviewContainer.appendChild(reviewMovieParagraph);

        titleInput.value = '';
        reviewText.value = '';
    }
};
addButton.classList.add('btn', 'btn-primary');
column4Container.appendChild(addButton);

//column5
let column5Container = document.createElement('div');
column5Container.classList.add('col-12');
rowContainer.appendChild(column5Container);

let reviewContainer = document.createElement('div');
reviewContainer.id = 'reviewsContainer';
column5Container.appendChild(reviewContainer);

//console.log(movieReviewsContainer);