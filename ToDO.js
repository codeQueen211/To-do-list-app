const addButton= document.getElementById("addTask");
const taskInput =document.getElementById("taskInput");
const taskElement= document.getElementById("taskList");

addButton.addEventListener('click',AddTask);
taskElement.addEventListener('click',REmoveTask);
function AddTask(){
    const taskText = taskInput.value.trim();
    if(taskText!==' '){
        const listItem =document.createElement('li');
        listItem.innerHTML=`
        <span>${taskText}</span>
        
        <button class="delete-button">Delete</button>
    `;
    taskElement.appendChild(listItem);
    }
   
    taskInput.value='';
    

}

function REmoveTask(e){
    if (e.target.classList.contains('delete-button')) {
        const listItem = e.target.parentElement;
        taskList.removeChild(listItem);
    }

}