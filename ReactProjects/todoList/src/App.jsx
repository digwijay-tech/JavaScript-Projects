import { useState } from 'react'
import './App.css'

function App() {

  const [tasks,setTasks]= useState(["Eat breakfast", "drink water", "bath nigth"]);
  const [newTasks,setNewTasks]= useState("");

  function handleInputTask(event){
   setNewTasks(event.target.value)
  }

  function addTask(){

    if(newTasks.trim() !== ""){
      setTasks(t=>[...t,newTasks]);
      setNewTasks("");
    }
    
  }

  function deleteTask(index){
    tasks.filter()
  }
 return(
  <div>
    <h1>Todo-List</h1>
    <input type="text" placeholder='Enter your Task...' value={newTasks} onChange={handleInputTask} /> 
    <button onClick={addTask}>Add</button>
   <ol>
    {tasks.map((task,index)=>
      <li key={index}>
        <span>{task}</span>
        <button onClick={()=>deleteTask(index)}>Delete</button>
      </li>
    )}
   </ol>
  </div>
 )
}

export default App
