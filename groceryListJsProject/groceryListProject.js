let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById("groceryListContainer");
groceryListContainer.classList.add("grocery-list-container");

let mainHeadingElement = document.createElement("h1");
mainHeadingElement.classList.add("grocery-list-main-heading");
mainHeadingElement.textContent = "Grocery List";
groceryListContainer.appendChild(mainHeadingElement);

let listItemsBgContainer = document.createElement("ul");
listItemsBgContainer.classList.add("grocery-list-items-bg-container");
groceryListContainer.appendChild(listItemsBgContainer);

for (let item of groceryList) {

    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add("grocery-list-item");
    listItemsBgContainer.appendChild(listItem);

}