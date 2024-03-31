import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { handleDeleteTodo, handleTodoState } from "../utils"
import StartPage from "./StartPage"

const Task = () => {
    const user = localStorage.getItem('new-user')
    const { id } = useParams()
    const navigate = useNavigate()
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    const task = todos.find(t => t.id == id)

    if (!user) {
        return <StartPage />
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
                <button onClick={() => handleTodoState(todos, setTodos, id)}>Mark as {task.isDone ? 'Incomplete' : 'Complete'}</button>
                <button onClick={() => handleDeleteTodo(todos, id, navigate)} className="delete">Delete Task</button>
            </div>
        </div>
    )
}

export default Task
