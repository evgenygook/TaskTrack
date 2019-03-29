let btn = document.getElementById('add');



btn.onclick=function CreateTask(){
    let task ={};

    task.name = prompt("Название задачи");
    task.time = prompt("Время на задачу");
    task.assigne = prompt("Исполняющее лицо");
    console.log(task);

    let mainTable = document.getElementById("mainTable");
    let newTask = document.createElement("tr");
    
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
    
    let clockString = h + ":" + m + ":" + s; 


    let newCell= mainTable.appendChild(newTask);
    newCell.insertCell(0).textContent=task.name;
    newCell.insertCell(1).textContent=task.time;
    newCell.insertCell(2).textContent=task.assigne;
    newCell.insertCell(3).textContent=clockString;
};    

