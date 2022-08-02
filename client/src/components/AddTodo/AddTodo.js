import React, { useEffect, useState } from 'react'
import styles from './AddTodo.styles'
import axios from 'axios'

function AddTodo({ addTodo }) {
  const [addTask, setAddTask] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [todo, setTodo] = useState("");
  const handleNewTask = (e, editor) =>{
    const newTask = e.target.value;
    setAddTask(newTask);
  }
  const getDate = async e => {
    e.preventDefault()

   const date = e.target.value;
   setDate(date);
  }

  const handleDescription = async e => {
    e.preventDefault();
    const description = e.target.value;
    setDescription(description);
  }
  const handleClick = async e =>{
    e.preventDefault()

    console.log(addTask);
    setAddTask(addTask);
    try{
      const res = await axios.post("http://localhost:8000/api/main/tasks", 
      {heading: addTask, description: description, deadline: date})

      console.log(res.data)
      addTodo(todo);

    }catch(err){
      console.log(err.message)
    }
  }


  // console.log(addTask);
  return (
    <div>
        <input style={styles.inputField} placeholder="Enter task name" onChange={handleNewTask} value-={addTask}/>
        <input style={styles.inputField} placeholder="Enter Description (e.g. For growing skills)" onChange={handleDescription} value={description}/>
        <input style={styles.inputField} type="date" onChange={getDate} value={date}/>

        <div>
          <button style={styles.submitButton} onClick={handleClick}>Add Task</button>
        </div>
    </div>
  )
}

export default AddTodo