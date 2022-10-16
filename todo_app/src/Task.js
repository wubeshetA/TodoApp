export const Task = function (props) {
    return (
    <div className="task"
    style={{ backgroundColor : props.task.completed ? "green" : "white" }}>
        <h1>{props.task.title}</h1>
        <button onClick={() => props.updateCompleted(props.task)}>{props.task.completed ? "Redo" : "Complete"}</button>
        <button onClick={() => props.deleteTask(props.task)}>X</button>
    </div>
    );
}
