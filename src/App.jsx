import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import StartPage from './components/StartPage'
import NewTask from './components/NewTask'
import Task from './components/Task'
const App = () => {
  // localStorage.removeItem('new-user')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tasks/:id' element={<Task />} />
        <Route path='/new' element={<NewTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
