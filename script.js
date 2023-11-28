document.getElementById('add-todo-btn').addEventListener('click', addTodo);

function addTodo() {
    var input = document.getElementById('todo-input');
    var text = input.value.trim();
    if (text) {
        var li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `<span>${text}</span> <button class="delete-btn">Delete</button>`;
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        filterTodos(this.id);
    });
});

function filterTodos(filter) {
    var todos = document.querySelectorAll('.todo-item');
    todos.forEach(todo => {
        switch (filter) {
            case 'all':
                todo.style.display = '';
                break;
            case 'active':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = '';
                }
                break;
            case 'completed':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = '';
                }
                break;
        }
    });
}

