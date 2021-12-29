console.log('in client.js');

$(document).ready(onReady);

let divCount = 0;

function onReady() {
    console.log('so freakin\' ready 🤘');
    
    $('#generateBtn').on('click', divGenerator);
}


function divGenerator() {
    console.log('generate button clicked');
    
}
