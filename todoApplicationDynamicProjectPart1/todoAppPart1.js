let todoItemsContainer = document.getElementById("todoItemsContainer");

function addTask() {
    //adding list item
    let todoItem = document.createElement('li');
    todoItem.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoItem);

    //adding checkbox 
    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = 'myCheckBoxInput';
    inputElement.classList.add("checkbox-input");
    todoItem.appendChild(inputElement);

    //for labeling we creating a div container 
    let lableContainer = document.createElement('div');
    lableContainer.classList.add("label-container", "d-flex", "flex-row");
    todoItem.appendChild(lableContainer);

    //ceating label element
    let lableElement = document.createElement('label');
    lableElement.classList.add("checkbox-label");
    lableElement.setAttribute("for", "myCheckBoxInput");
    lableElement.textContent = "learn Html";
    lableContainer.appendChild(lableElement);

    //creating delete icon container and delete icon 
    let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add("delete-icon-container");
    lableContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fa-solid", "fa-trash-can", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);


}