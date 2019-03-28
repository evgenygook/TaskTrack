let btn = document.getElementById('add');

btn.onclick=function CreateTask(){
    let task ={
    };

    task.name = prompt("Название задачи");
    task.time = prompt("Время на задачу");
    task.assigne = prompt("Исполняющее лицо");
    console.log(task);

    let mainTable = document.getElementById("mainTable");
    let newTask = document.createElement("tr");
    let newSection = document.createElement("td");
    
    mainTable.appendChild(newTask).appendChild(newSection).textContent=task.name;
};    

