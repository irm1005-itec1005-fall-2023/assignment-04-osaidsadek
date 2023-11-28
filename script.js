document.getElementById('add-todo-btn').addEventListener('click', addTodo);

function addTodo() {
    var input = document.getElementById('todo-input');
    var text = input.value.trim();
    if (text) {
        var li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = text;
        li.addEventListener('click', function () {
            this.classList.toggle('completed');
        });
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    } else {
        alert('Please enter a valid task.');
    }
}

// Additional functionality for deleting a to-do item (not provided in your original code)
document.getElementById('todo-list').addEventListener('click', function (e) {
    if (e.target && e.target.matches('li.todo-item')) {
        e.target.remove();
    }
});

