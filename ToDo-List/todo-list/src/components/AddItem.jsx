import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
//import TodoList from './TodoList';
uuidv4()

export default function AddItem() {
    const [todos, setTodo] = useState([]);
    const [value,setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        console.log(value)
    }

    function addTodo(todo){
        // Prevent adding empty tasks
        if (todo.trim() !== ''){
            setTodo(t => ([...t,{id: uuidv4(),task: todo, completed: false, isEditing: false}]))
            setValue('')
        }
    }

    function deleteTask(index){
        const updatedTodos = todos.filter((_,i) => i !== index)
        setTodo(updatedTodos)
    }


    return (
        <>
            <div className="add-div">
                <h1>Add Task</h1>
                <form className="addForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add Task" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type="submit" className="todo-btn" onClick={handleSubmit}>Add Task</button>
                </form>

                <div className="list">
                    <ul>
                        {todos.map((plan, index) => {
                            return(
                                    <li key={index}>
                                        <span>{plan.task}</span>
                                        <button onClick={() => deleteTask(index)}>Delete</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
            </div>
        </>
    )
}
0