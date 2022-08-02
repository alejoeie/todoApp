import React, {useState, Component} from 'react'
import styles from './TodoItem.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addTask } from '../../redux/actions'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/Notification';


export class TodoItem extends Component{
  render(){
    const state = { tasks: [], currentTask: "" };

    const {task} = this.props
    let {id, heading, description, completed} = task
    // const [completeTask, setCompletedTask] = useState(false);
    // const {heading, description} = task

    // console.log(id);

    const handleDelete = async e => {
      e.preventDefault();
      console.log(id)
      try {
        await axios.delete("http://localhost:8000/api/main/tasks/" + id)
      }catch(err){
        console.log(err.message)
      }
      
    }

    const handleComplete = async e => {
      e.preventDefault();
      // setCompletedTask(true);
      completed = true;
      const originalTasks = state.tasks;
      console.log(originalTasks)
      try{
        const tasks = [...originalTasks];
        const index = tasks.findIndex((task) => task._id === id);
        tasks[index] = { ...tasks[index] };
        tasks[index].completed = !tasks[index].completed;
        this.setState({ tasks });
        await axios.patch("http://localhost:8000/api/main/tasks/"+id, {
          completed: completed
        });
      }catch(err){
        console.log(err.message)
      }
    }
  return (
    <div>
        <div style={styles.taskContainer}>

            <div style={styles.styleWrapper}>
                <p style={styles.tasker} key={id} >{heading}</p>
                <div style={styles.iconWrapper}>
                  {completed ? (<i className="fa fa-check-circle" style={styles.completedIcon} ></i>) :
                  (<FontAwesomeIcon icon={faLightbulb} style={styles.completedIcon} onClick={handleComplete}/>)
                  }
                <FontAwesomeIcon icon={faTrashCan} style={styles.deletedIcon} onClick={handleDelete}/>
                </div>
            </div>
        </div>
    </div>
  )
  }
}
const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (task) => dispatch(addTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)