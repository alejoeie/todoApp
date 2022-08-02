import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo/AddTodo'
import styles from './Main.style'
import axios from 'axios'
import TodoItem from '../components/TodoItem/TodoItem'
import { addTask } from '../redux/actions'
function Main() {
    const [task, setTask] = useState();
    const [isloaded, setLoaded] = useState(false)

    useEffect(() => {
      
        axios.get("http://localhost:8000/api/main/tasks").then((response) => {
          // console.log(response.data)
          if(response.status >= 200 && response.status<300){
            const {data} = response.data
            let newTaskData = []
            data.forEach((task)=>{
              task.map(item => {
                 let taskObject = {
                    id: item._id,
                    heading: item.heading,
                    description: item.description,
                    completed: item.completed
                  }
                  
                  newTaskData.push(taskObject)
                  // console.log(newTaskData);
              })
            });

            let currentTask = []
            newTaskData.forEach((item) => {
              let tasksObj = {
                id : item.id,
                heading: item.heading,
                completed: item.completed,
                description: item.description,
              }
              currentTask.push(tasksObj)
            })
            setTask(currentTask);
          }
        })
        
    }, [])
    // console.log("Redux todos: " + this.props.taskItems)
    // task?.map((task, id)=>{
    //   console.log(task)
    // })
    return (
      <div style={styles.appContainer}>
          <div style={styles.container}>
              <h1 style={styles.title}>To Do List</h1>
              {task ? (
                <div style={styles.inputWrapper}>
                  <AddTodo addTodo={(todo) => {this.props.addTodo(todo)}}/>
                  <hr style={styles.separator}></hr>
                  {task.map((task, item) => {
                    return (
                      <TodoItem task={task} id={task.id} key={item}/>
                    )
                  })}
                  </div>
              ) : <h1>Loading...</h1>}
          </div>
      </div>
    )
  }

const mapStateToProps = (state) => ({
  taskItem: state.taskItems
})

const mapDispatchToProps = (dispatch) =>({
  addTodo: (todo) => dispatch(addTask(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(Main);

