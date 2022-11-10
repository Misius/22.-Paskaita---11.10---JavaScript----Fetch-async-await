'use strict';
console.log('fetchAsync.js');


const pEl = document.getElementById('todo');

fetch('https://dummyjson.com/todos')
    .then((resp) => resp.json())
    .then((todo) => console.log('todo ===', todo))
    .catch((err) => console.warn('Klaida gauti todo', err));


    async function getTodo() {
        try {
        const response = await fetch('https://dummyjson.com/todos/1');
        console.log('response ===', response);
        if (!response.ok) {
            throw response.statusText;
        }
        const todo = await response.json();
        console.log('todo ===', todo);
        } catch (error) {
            console.warn('Klaida gauti todo', error);
            return 'Not found';
        }
        
    }


    const todo1 = getTodo().then((td1) => {
        console.log('td1 ===', td1);
    });
    console.log('todo1 ===', todo1);