document.addEventListener('DOMContentLoaded', ()=>  {
    const taskForm = document.getElementById('taskForm');
    const taskListContainer = document.getElementById('taskListContainer');
    const savedTasks = JSON.parse(localStorage.getItem('taskList')) || [];

    savedTasks.forEach(savedTask => {
        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `<strong>Описание:</strong> ${savedTask.taskName}<br>
                             <strong>Дата:</strong> ${savedTask.deadline}`;
        taskListContainer.appendChild(taskDiv);
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        const taskName = document.getElementById('taskName').value;
        const deadline = document.getElementById('Deadline').value;

        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `<strong>Описание:</strong> ${taskName}<br>
                             <strong>Дата:</strong> ${deadline}`;
        taskListContainer.appendChild(taskDiv);

        const newTask = { taskName, deadline };
        savedTasks.push(newTask);
        localStorage.setItem('taskList', JSON.stringify(savedTasks));

        taskForm.reset();
    }

    taskForm.addEventListener('submit', handleFormSubmit);
});
