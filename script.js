let btn = document.getElementById("addBtn");
let lists = document.getElementById("lists");
let task = document.getElementById("task");


function addTask() {
    let task = document.getElementById("task").value.trim();

    let checkbox = document.createElement("input")
        checkbox.type = 'checkbox'

    if (task === ""){
        alert("please enter a task")
    }
    else{
        let list = document.createElement("div");
        list.classList.add("list");

        list.appendChild(checkbox)
        lists.appendChild(list)

        var taskElement = document.createElement('span');
        taskElement.textContent = " "+task;
        list.appendChild(taskElement);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            setTimeout(function() {
                list.style.display = "none";
            }, 1000);
        } else {
            list.style.display = "block";
        }
    });
    }
    document.getElementById("task").value = "";
};

