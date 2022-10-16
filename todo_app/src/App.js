import './App.css';
import {useState} from 'react';
import {Task} from './Task';

function App() {

  const [tasksList, addTaskList] = useState([]);
  const [newTask, addNewTask] = useState("");

  function hundleChange(event) {
    if (event.target.target !== ""){
      addNewTask(event.target.value);
    }
  }

  function addToList(event){
    const task = {
      'id': tasksList.length === 0 ? 1 : tasksList[tasksList.length - 1].id + 1,
      'title': newTask,
      'completed': false
    }
    const allTasks = [...tasksList, task];
    addTaskList(allTasks);
    console.log(allTasks);
  }

  function deleteTask(task) {
    addTaskList(tasksList.filter(thisTask => thisTask.id !== task.id));
  }

  function updateCompleted(completedTask) {
    addTaskList(
      tasksList.map((task) => {
        if (task.id === completedTask.id) {
          if (completedTask.completed) {
            return {...task, completed: false};
          } else if (!completedTask.completed) {
            return {...task, completed: true};
          }
          
        } else {
          return task
        }
        
      })
    );  
    
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onInput={hundleChange}></input>
        <button onClick={addToList}>Add task</button>
      </div>
      <div className='lists'>
        {tasksList.map((task) => {
          return (<Task task={task} deleteTask={deleteTask} 
          updateCompleted={updateCompleted}></Task>)
        })
        }
      </div>
    </div>
  );
}

export default App;