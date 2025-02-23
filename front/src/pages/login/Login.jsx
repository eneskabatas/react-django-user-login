import React, { useContext } from 'react'
import { GlobalContext } from '../../api/context/GlobalState'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

    const { loginUser, username, setUsername, password, setPassword, isAuth } = useContext(GlobalContext)

    // const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        loginUser(username, password)
        //    if(isAuth){
        //     navigate("/")
        //    }
    }

    return (
        <>
            { isAuth ?
                <Navigate to={"/"}/>
            :
                <div>
                    <h1 className='mt-5'>Login</h1>
                    <div>
                        <form>
                            <input type="text" placeholder='name' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleLogin}>Giriş yap</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Login