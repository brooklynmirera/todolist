
import React, { useState } from 'react';

function Todolist() {

const [tasks, setTasks] = useState(["cleanshoes","clean house","go to the gym"]);
const [task, setNewTask] = useState("")

function AddTask(){
     
    if(task.trim() !==""){
        setTasks([...tasks,task])
    }
     setNewTask("")
  }

 function removeTask(indexToRemove) {
  setTasks(tasks.filter((_, index) => index !== indexToRemove));
}
console.log(removeTask)

  return (
    <div>
      <h1>My Todo List</h1>
       
       <input 
       type="text" 
       value ={task}
       placeholder="Enter something ..."
       onChange={(e)=>setNewTask(e.target.value)} />

        <button 
        onClick={AddTask}>Add</button>
        <div>
          <ol>
           {tasks.map((task,index) =>(
            <li key={index}>
                <span>{task}</span>
                <button onClick={removeTask}>Delete</button>
                <button>Up</button>
                <button>Down</button>
            </li>
            
           ))}
          </ol>
        </div>

      <div>
       
    </div>
    </div>
    
  );



}

export default Todolist;







