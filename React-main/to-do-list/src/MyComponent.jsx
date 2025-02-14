import {useState} from 'react'
import './MyComponent.css'

function MyComponent(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => ([...t, newTask]))
            setNewTask("")
        }
    }

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        //setCars(c => c.filter((_,i) => i !== index))

        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index - 1]
            updatedTasks[index - 1] = temp
            // [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index + 1]
            updatedTasks[index + 1] = temp
            // [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <>
            <div className="to-do-list">
                <h1>My Tasks</h1>

                <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input>

                    <button className="add-button" onClick={addTask}>Add</button>
                </div>

                <ol>
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                    )}
                </ol>

            </div>
        </>
    )
}
export default MyComponent