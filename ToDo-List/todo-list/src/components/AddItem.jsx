import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons/faPenToSquare';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
uuidv4()

export default function AddItem() {
    const [todos, setTodo] = useState([]);
    const [value, setValue] = useState(''); // Initialize as empty string
    const [editId, setEditId] = useState(null); // State to track which todo is being edited

    const handleSubmit = e => {
        e.preventDefault();
        if (editId) {
            editTodo(editId); // Call editTodo if we are editing
        } else {
            addTodo(value); // Otherwise, add a new todo
        }
        setValue(''); // Clear input after submission
        setEditId(null); // Reset editId after submission
    };

    function addTodo(todo) {
        if (todo.trim() !== '') {
            setTodo(t => ([...t, { id: uuidv4(), task: todo, completed: false }]));
        }
    }

    function editTodo(id) {
        setTodo(todos.map(t => t.id === id ? { ...t, task: value } : t)); // Update task with current value
        setEditId(null); // Reset editId after editing
    }

    function deleteTask(id) {
        setTodo(todos.filter(t => t.id !== id));
    }

    function completed(id) {
        setTodo(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    }

    return (
        <>
            <div className="add-div">
                <h1>Add Task</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Add Task" 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        className="todo-input" 
                    />
                    <button type="submit" className="todo-btn">{editId ? 'Update Task' : 'Add Task'}</button>
                </form>

                <div className="todo-list">
                    <ul>
                        {todos.map(plan => (
                            <li key={plan.id} className="Todo">
                                {editId === plan.id ? (
                                    <form onSubmit={handleSubmit}>
                                        <input 
                                            type="text" 
                                            placeholder="Update Task" 
                                            value={value} 
                                                onChange={(e) => setValue(e.target.value)} 
                                            className="todo-input" 
                                        />
                                        <button type="submit" className="todo-btn">Update Task</button>
                                    </form>
                                ) : (
                                    <>
                                        <p onClick={() => completed(plan.id)} className={plan.completed ? 'completed' : ""}>{plan.task}</p>
                                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => { setEditId(plan.id); setValue(plan.task); }} className="edit-icon" />
                                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(plan.id)} className="delete-icon" />
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

