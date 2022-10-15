import './App.css';
import {useState} from 'react';
function App() {
  const [tasksList, addTaskList] = useState([]);
  const [currentTask, addCurrentTask] = useState([]);

  function catchCurrentTask (event) {
    addCurrentTask(event.target.value);
  }
  function addToList(event){
    const allTasks = [...tasksList, currentTask];
    addTaskList(allTasks);
    console.log(allTasks);
  }
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={catchCurrentTask}></input>
        <button onClick={addToList}>Add task</button>
      </div>
      <div className='lists'>
        {tasksList.map((task) => {
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
