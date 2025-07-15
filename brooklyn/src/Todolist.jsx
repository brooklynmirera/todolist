import React from 'react';
import React, { useState } from 'react';

const [todoList, setTodoList] = useState([]);

const [newTodoList, setNewTodoList] = useState("")



function Todolist() {
  return (
    <div>
      <h1>My Todo List</h1>

      <div>
        <input type="text"  />
        <button onclick={addTodoList}>Add</button>
        <ol>
            {todoList.map((todoList,index)=>(
                <li key={index}>{todoList}</li>
            ))}
        </ol>
    </div>
    </div>
    
  );

function addTodoList(){

  }
function removeTodoList(){

}
}

export default Todolist;







