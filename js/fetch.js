'use strict';
console.log('main.js');


// parsisiusti user.json

function getLocalUser() {
    fetch('data/user.json')
        .then((response) => response.json())
        .then((data) => console.log('data ===', data))
        .catch ((err) => console.warn('Klaida', err));
}
getLocalText();

function getLocalText() {
    fetch('data/colors.txt')
        .then((response) => response.json())
        .then((data) => {
            console.log('data ===', data)
            const arr = data.split(', ');
            console.log('arr ===', arr);
        })
        .catch ((err) => console.warn('Klaida', err));
}
getLocalText();

function iniHtml() {
    fetch('data/footer.html')
        .then((response) => response.text())
        .then((data) => document.body.insertAdjacentElement('beforeend', data))
        .catch((err) => console.warn('Klaida', err));
}
iniHtml();