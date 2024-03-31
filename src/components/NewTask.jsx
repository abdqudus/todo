import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const handleSave = (e) => {
        e.preventDefault()
        const arr = []
        for (const key in task) {
            if (Object.hasOwnProperty.call(task, key)) {
                const element = task[key];
                arr.push(element)
            }
        }
        if (arr.filter(e => e === '').length > 0) {
            alert('Kindly fill all field')
        } else {
            console.log(todos)
            task.id = new Date().getTime()
            todos.push(task)
            localStorage.setItem('todos', JSON.stringify(todos))
            alert('done')
            navigate('/home')
        }

    }
    console.log(task)
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
                <button onClick={handleSave}>Done</button>
            </form>
        </div >
    )
}

export default NewTask
