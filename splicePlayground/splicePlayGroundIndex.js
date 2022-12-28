let arr = [1, 7, 3, 1, 0, 20, 77];

//stringfying array
let strArr = JSON.stringify(arr);
//console.log(strArr);
//console.log(typeof(strArr));
let updatedArrayElement = document.getElementById('updatedArray');
updatedArrayElement.textContent = strArr;

let spliceBtn = document.getElementById('spliceBtn');
spliceBtn.onclick = function() {

    let startIndexInput = document.getElementById('startIndexInput');
    let textContentOfStartInput = startIndexInput.value;
    //console.log(textContentOfStartInput);
    if (textContentOfStartInput.trim().length === 0) {
        updatedArrayElement.textContent = JSON.stringify(arr);
        document.getElementById('deleteCountInput').value = '';
        document.getElementById('itemToAddInput').value = '';
        startIndexInput.value = '';

    } else {

        let deleteCountInput = parseInt(document.getElementById('deleteCountInput').value);
        let itemToAddInput = (document.getElementById('itemToAddInput').value);

        let startIndex = parseInt(textContentOfStartInput);

        let spliceArr = arr.splice(startIndex, deleteCountInput, itemToAddInput);
        //console.log(spliceArr);
        updatedArrayElement.textContent = JSON.stringify(arr);
        document.getElementById('deleteCountInput').value = '';
        document.getElementById('itemToAddInput').value = '';
        startIndexInput.value = '';

    }

};