console.log('in client.js');

$(document).ready(onReady);

let divCount = 1;

function onReady() {
    console.log('so freakin\' ready 🤘');
    
    $('#generateBtn').on('click', divGenerator);
    $(document).on('click', '.yellowBtn', mellowYellow);
    $(document).on('click', '.deleteBtn', divDestroyer);
}


function divGenerator() {
    console.log('generate button clicked');

    $('#displayDivs').append(`
        <div class="newDivs">
            <p>Div Count: ${divCount}</p>
            <button class="yellowBtn">Yellow</button>
            <button class="deleteBtn">Delete</button>
        </div>`);

    divCount++;

    console.log(divCount);
}


function mellowYellow() {
    console.log('yellow button clicked');

    $(this).closest('.newDivs').css('background-color', 'yellow');
    $(this).closest('.newDivs').css('color', 'black');
}


function divDestroyer() {
    console.log('delete button clicked');

    $(this).closest('.newDivs').remove();
    
    divCount--;
}
