'use strict';

// Selecting elements
const btnsOpenModel = document.querySelectorAll('.show-model');
const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-model');

// Open model window
const openModel = () => {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Close model window
const closeModel = () => {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Event listeners
for (let i = 0; i < btnsOpenModel.length; i++) {
    btnsOpenModel[i].addEventListener('click', openModel);
    btnCloseModel.addEventListener('click', closeModel);
    overlay.addEventListener('click', closeModel);

    // This allows the user to close the modal by pressing the Escape key from anywhere on the page.
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !model.classList.contains('hidden')) {
            closeModel();
            console.log('Esc was pressed');
        };
    });
}