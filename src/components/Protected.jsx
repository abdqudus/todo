import { useState } from "react"
import Home from "./Home"
import StartPage from "./StartPage"

const Protected = () => {
    const [user, setUser] = useState(localStorage.getItem('new-user') || '')
    if (user)
        return <Home user={user} />

    return (
        <StartPage user={user} setUser={setUser} />
    )
}

export default Protected
