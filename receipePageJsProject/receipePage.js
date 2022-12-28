let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let recipeTitle = document.getElementById("recipeTitle");
recipeTitle.textContent = recipeObj.title;
recipeTitle.classList.add("recipe-title");

let recipeImage = document.getElementById("recipeImage");
recipeImage.setAttribute("src", recipeObj.imgSrc);

let listItemContainer = document.getElementById("listItemContainer");
for (let element of recipeObj.ingredients) {
    let listItemElement = document.createElement("li");
    listItemElement.textContent = element;
    listItemElement.style.color = "white";
    listItemElement.style.fontWeight = "normal";
    listItemContainer.appendChild(listItemElement);


}