import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Task = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    const task = todos.find(t => t.id == id)
    const handleDelete = () => {
        const filteredTodos = todos.filter(t => t.id != id)
        localStorage.setItem('todos', JSON.stringify(filteredTodos))
        navigate('/home')
    }
    const handleMark = () => {
        const newTodo = todos.map(t => {
            if (t.id == id) {
                t.isDone = !t.isDone
                return t
            } else {
                return t
            }
        })
        localStorage.setItem('todos', JSON.stringify(newTodo))
        setTodos(newTodo)

    }
    return (
        <div className="task">
            <h1>{task.title}</h1>
            <div className="task__description">

                <p>{task.description}</p>
            </div>
            <div className="due__schedule">
                <p>Due Date: {task.dueDay}</p>
                <p>Due Time: {task.dueTime}</p>
            </div>
            <div className="btn__div">
                <button onClick={handleMark}>Mark as {task.isDone ? 'Incomplete' : 'Complete'}</button>
                <button onClick={handleDelete} className="delete">Delete Task</button>
            </div>
        </div>
    )
}

export default Task
