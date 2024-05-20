
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const addButton = document.querySelector('.addButton');
const deleteButton = document.querySelector('.deleteButton');
const mytodos = document.getElementById('mytodos');

function add() {
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
        const todoItem = document.createElement('div');
        todoItem.innerHTML = newTodo;
        mytodos.appendChild(todoItem);
        todoInput.value = '';
    } else {
        alert('Please enter a valid todo!');
    }
}
