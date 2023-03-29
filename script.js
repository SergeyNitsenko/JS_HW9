'use strict'

function creatToDoList() {
    let input = document.querySelector('.input');
    let button = document.querySelector('.listTopButton');

    input.addEventListener('change', creatTask);
    button.addEventListener('click', deleteTasks);




    function creatTask(event) {
        let value = event.target.value;

        if (!value.trim()) return alert("Введите задачу!");

        let taskBloсk = document.createElement('div')
        taskBloсk.className = 'taskBlok';

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.className = 'checkbox';
        taskBloсk.append(checkbox);

        let task = document.createElement('span');
        task.className = 'task';
        task.innerHTML = value;
        taskBloсk.append(task);

        const tasks = document.querySelector('.listTasks');
        tasks.prepend(taskBloсk);

        input.value = '';

        checkbox.addEventListener('click', checkTask);
        task.addEventListener('click', editTask);
    }


    function checkTask() {
        this.nextSibling.classList.toggle('active')
    }

    function editTask(event) {
        let editTaskOne = event.target
        editTaskOne.innerHTML = prompt('Редактируйте задачу :', event.target.textContent);
    }

    // function deleteTask() {
    //     const deleteElement = document.querySelector('.deleteTask')
    //     deleteElement.innerHTML = deleteTask.remove();
    // }

    function deleteTasks() {
        const deleteElements = document.querySelector('.listTasks')
        deleteElements.innerHTML = '';

    }

}

creatToDoList()