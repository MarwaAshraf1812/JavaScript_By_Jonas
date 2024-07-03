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
}