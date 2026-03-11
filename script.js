let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        li.onclick = function(){
            tasks.splice(index,1);
            saveTasks();
        };

        list.appendChild(li);
    });
}

function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === "") return;

    tasks.push(task);
    input.value = "";

    saveTasks();
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function clearTasks(){
tasks = [];
saveTasks();
}

let li = document.createElement("li");
li.textContent = task;

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){
    tasks.splice(index,1);
    saveTasks();
};

li.appendChild(deleteBtn);
list.appendChild(li);

displayTasks();
