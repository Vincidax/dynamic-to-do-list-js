document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();

        // alert when the input is EMPTY
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        // create list element
        const li = document.createElement("li");
        li.textContent = taskText;

        // create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = "remove-btn";
        
        removeBtn.addEventListener('click', function (){
            taskList.removeChild(li);
        });

        // append button to li
        li.appendChild(removeBtn);

        // append li to list
        taskList.appendChild(li);

        // clear input
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    // keypress for Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
