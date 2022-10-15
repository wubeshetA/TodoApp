export const Task = function (props) {
    
        return (<div>
          <h2>{props.task.id}</h2><h1>{props.task.title}</h1>
          <button>Complete</button>
          <button onClick={() => props.deleteTask(props.task)}>X</button>
        </div>);
}
