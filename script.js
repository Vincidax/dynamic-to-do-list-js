document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();

        // alert when input is EMPTY
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        // create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // remove task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // add button to li
        li.appendChild(removeBtn);

        // add li to task list
        taskList.appendChild(li);

        // clear input
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    // allow pressing Enter to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
