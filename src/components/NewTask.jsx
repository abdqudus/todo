import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSaveTodo } from '../utils'

const NewTask = () => {
    const navigate = useNavigate()
    const [task, setTask] = useState({ title: '', description: '', id: null, isDone: false, dueDay: '', dueTime: '' })
    let todos = JSON.parse(localStorage.getItem('todos'))
    if (!todos) {
        todos = []
    }
    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    return (
        < div className="new__task__page center" >
            <form>
                <div className="form__div">
                    <label htmlFor="title">Title :</label>
                    <input required onChange={handleChange} name='title' type="text" id="title" placeholder="Title" />
                </div>
                <div className="description form__div">
                    <label htmlFor="description">Description :</label>
                    <textarea required onChange={handleChange} name='description' id="description"></textarea>
                </div>
                <div className="due__date__div form__div">
                    <label htmlFor="due__day">Due Day :</label>
                    <input required onChange={handleChange} name='dueDay' type="date" id="due__day" />
                </div>
                <div className="due__time__div form__div">
                    <label htmlFor="due__time">Due Time :</label>
                    <input required onChange={handleChange} name='dueTime' step="3600" type="time" id="due__time" />
                </div>
                <button onClick={(e) => handleSaveTodo(e, task, navigate, todos)}>Done</button>
            </form>
        </div >
    )
}

export default NewTask
