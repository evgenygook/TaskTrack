let task ={};
let button = document.getElementsByTagName("input");
let mainTable = document.getElementById("mainTable");
let newTask = document.createElement("tr");

console.log(button); 

function CreateTask(){

    task.name = prompt("Название задачи");
    task.time = prompt("Время на задачу");
    task.assigne = prompt("Исполняющее лицо");
      
    let newCell= mainTable.appendChild(newTask);
    newCell.insertCell(0).textContent=task.name;
    newCell.insertCell(1).textContent=task.time;
    newCell.insertCell(2).textContent=task.assigne;
    newCell.insertCell(3).textContent=clockString;
    newCell.insertCell(4).innerHTML="<input type='button' value='Завершить'>";
   
};

function createTime(){

    let time = new Date(),
    h = time.getHours().toString(),
    m = time.getMinutes().toString(),
    s = time.getSeconds().toString();

    if (h.length <2){
    h= "0" +h;
    }
    if (m.length <2){
    m= "0" +m;
    }
    if (s.length <2){
    s= "0" +s;
    } 

    return clockString = h + ":" + m + ":" + s;
}

button[0].addEventListener("click", function(event){
    createTime();
    CreateTask();
})



function endTime(){
    button[1].addEventListener("click", function(){
        button[1].textContent=createTime();
    });
}