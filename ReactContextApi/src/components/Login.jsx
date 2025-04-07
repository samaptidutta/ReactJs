import React , {useState,useContext} from 'react'

import UserContext from '../context/UserContext'

function Login() {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit =  (e) => {
            e.preventDefault()
            setUser({userName,password})
    }

    return (
        <div>
            <h2>Log In</h2>
            <input type="text" placeholder='username' value={userName}
            onChange={(e)=> setUsername(e.target.value)}
            />
            
            <input type="text" placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}></button>
        </div>
    )
}

export default Login
