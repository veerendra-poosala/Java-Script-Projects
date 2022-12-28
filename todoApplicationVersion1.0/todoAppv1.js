let todoUserInput = document.getElementById("todoUserInput");
todoUserInput.placeholder = "what needs to be done";

let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueId: 1,
    },
    {
        text: "Learn CSS",
        uniqueId: 2,
    },
    {
        text: "Learn JavaScript",
        uniqueId: 3,
    }
];

let uniqueId = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {

    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);

}


function createAndAppendTodo(todo) {

    let todoId = "todo" + todo.uniqueId;
    //console.log(inputElementId);
    let checkboxId = "checkbox" + todo.uniqueId;
    let labelId = "label" + todo.uniqueId;


    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");

    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };

    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.id = labelId;
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {

        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

//for (let todo of todoList) {
//   createAndAppendTodo(todo);}


function addTodo() {

    let todoUserInput = document.getElementById("todoUserInput");
    let userInputValue = todoUserInput.value;

    if (userInputValue === "") {
        alert("Enter valid Text");
        return;
    }

    uniqueId = uniqueId + 1;
    let newTodo = {
        text: userInputValue,
        uniqueId: uniqueId

    };

    createAndAppendTodo(newTodo);

    todoUserInput.value = '';

}


let addTodoButton = document.getElementById("addTodoButton");

addTodoButton.onclick = function() {

    addTodo();

};