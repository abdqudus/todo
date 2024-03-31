import { useRef, useState } from "react"
import { setActive } from "../utils"
import { Link } from "react-router-dom"
import StartPage from "./StartPage"
const Home = () => {
    const user = localStorage.getItem('new-user')
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [tasks, setTasks] = useState(todos)
    const allRef = useRef(null)
    const doneRef = useRef(null)
    const notDoneRef = useRef(null)
    const navRefs = [allRef, doneRef, notDoneRef]
    const uncompleted = todos.filter(i => !i.isDone).length

    const filterBy = (navTitle, navRefs) => {
        setActive(navTitle, navRefs)
        if (navTitle === 'not-done') {
            setTasks(todos.filter(t => !t.isDone))
        } else if (navTitle == 'done') {
            setTasks(todos.filter(t => t.isDone))
        }
        else {

            setTasks(todos)
        }
    }
    const toggleDone = (e) => {
        let parent
        if (!e.target.classList.contains('check')) {
            parent = (e.target.parentElement)
        }
        else {
            parent = e.target
        }

        const input = parent.querySelector('input')
        const taskId = input.id
        const newTodo = todos.map(t => {
            if (t.id == taskId) {
                t.isDone = input.checked
                return t
            } else {
                return t
            }
        })
        setTodos(newTodo)
        localStorage.setItem('todos', JSON.stringify(newTodo))


    }
    if (!user) {
        return <StartPage />
    }
    return (
        <div className="home__container">
            <header>
                <nav className="home__nav">
                    <div>
                        <h1>Hey, {user}</h1>
                        <p>You have <span>{uncompleted} tasks </span> to complete</p>
                    </div>
                    <div className="name__icon">
                        <p className="center">
                            <span>{user.charAt(0).toUpperCase()}</span>
                        </p>
                    </div>
                </nav>
            </header>
            <section className="todos">
                <nav>
                    <p ref={allRef} onClick={() => filterBy('all', navRefs)} className="active all">All</p>
                    <p ref={doneRef} className="done" onClick={() => filterBy('done', navRefs)}>Completed</p>
                    <p ref={notDoneRef} onClick={() => filterBy('not-done', navRefs)} className="not-done">Not Completed</p>
                </nav>
                <div className="todo__lists">
                    {tasks.map((todo, i) => {

                        return (
                            <div key={i} className="todo">
                                <Link to={`/tasks/${todo.id}`}>
                                    <h3>{todo.title}</h3>
                                    <p>
                                        Due
                                        <span className="due__day"> on {todo.dueDay} </span>
                                        <span className="due__time">at {todo.dueTime}</span>
                                    </p>
                                </Link>
                                <label onClick={toggleDone} className="check center" htmlFor={todo.id}>
                                    <img width="10" height="10" src="./check.png" alt="" />
                                    <input readOnly checked={todo.isDone} type="checkbox" className="sr-only" name="" id={todo.id} />
                                </label>
                            </div>
                        )
                    })}
                </div>
            </section>
            <button className="new__task__btn center">
                <Link to='/new'>
                    <span
                    ><img src="./plus.png" width="32" height="32" alt=""
                        /></span>
                </Link>
            </button>
        </div>
    )
}

export default Home
