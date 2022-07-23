// Defining UI vars
const form = document.querySelector('#tasks-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Local all event listeners
loadEventListeners();

// Local all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
};
