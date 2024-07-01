'use strict';

document.querySelector('#submit-btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('#guess').value);
    const message = document.querySelector('.message');
    
    if(!guess){
        message.textContent = '⛔️ No number!';
    } else {
    }
});