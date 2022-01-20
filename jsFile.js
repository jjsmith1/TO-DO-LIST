let addTaskButton = document.getElementById('add');

let taskContainer = document.getElementById('taskContainer');

let inputTask = document.getElementById('inputTask');

addTaskButton.addEventListener('click', function(){
        var paragraph = document.createElement('p')
        paragraph.classList.add('paragraph-style');
        paragraph.innerText = inputTask.value;
        taskContainer.appendChild(paragraph);
        inputTask.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
         paragraph.addEventListener("dblclick", function () {
           paragraph.style.textDecoration = "line-through";
           taskContainer.removeChild(paragraph);
         });
})