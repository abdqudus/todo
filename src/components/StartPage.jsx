import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Home from "./Home"

const StartPage = () => {
    const [user, setUser] = useState(localStorage.getItem('new-user') || '')
    const userRef = useRef(user)
    const navigate = useNavigate()

    const handleSave = () => {
        if (user) {
            localStorage.setItem('new-user', user)
            navigate('/home')
        } else {
            alert("Kindly enter your name to continue")
        }
    }
    if (userRef.current) {
        return <Home />
    }
    return (
        <div className="intro__container">
            <h1 className="welcome">Welcome</h1>
            <p className="enter__name">Kindly Enter Your Name To Continue</p>

            <input value={user}
                onChange={(e) => setUser(e.target.value)} className="name__input" type="text" placeholder="Your Name" />

            <button onClick={handleSave} className="start__btn">
                <span> Let`&apos;s start </span>
                <img
                    width="10"
                    height="10"
                    src="./right-arrow-angle.png"
                    alt=""
                />
            </button>
        </div>
    )
}

export default StartPage
