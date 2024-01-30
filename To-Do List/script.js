document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = '<span>' + taskInput.value + '</span> ' +
                    '<button onclick="editTask(this)">Edit</button> ' +
                    '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);

    
    saveTasks();

    taskInput.value = '';
}

function editTask(button) {
    var li = button.parentNode;
    var span = li.querySelector('span');
    var newTask = prompt('Edit task:', span.textContent);

    if (newTask !== null) {
        span.textContent = newTask;
        
        saveTasks();
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    var taskList = li.parentNode;
    taskList.removeChild(li);

    
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById('taskList');
    localStorage.setItem('tasks', taskList.innerHTML);
}

function loadTasks() {
    var taskList = document.getElementById('taskList');
    var savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}document.addEventListener('DOMContentLoaded', function () {
            loadTasks();
        });

        function addTask() {
            var taskInput = document.getElementById('taskInput');
            var taskList = document.getElementById('taskList');

            if (taskInput.value.trim() === '') {
                alert('Please enter a task.');
                return;
            }

            var li = document.createElement('li');
            li.innerHTML = '<span>' + taskInput.value + '</span> ' +
                            '<button onclick="editTask(this)">Edit</button> ' +
                            '<button onclick="deleteTask(this)">Delete</button>';
            taskList.appendChild(li);

            
            saveTasks();

            taskInput.value = '';
        }

        function editTask(button) {
            var li = button.parentNode;
            var span = li.querySelector('span');
            var newTask = prompt('Edit task:', span.textContent);

            if (newTask !== null) {
                span.textContent = newTask;
                
                saveTasks();
            }
        }

        function deleteTask(button) {
            var li = button.parentNode;
            var taskList = li.parentNode;
            taskList.removeChild(li);

            
            saveTasks();
        }

        function saveTasks() {
            var taskList = document.getElementById('taskList');
            localStorage.setItem('tasks', taskList.innerHTML);
        }

        function loadTasks() {
            var taskList = document.getElementById('taskList');
            var savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                taskList.innerHTML = savedTasks;
            }
        }