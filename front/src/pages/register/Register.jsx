import React, { useContext } from 'react'
import { GlobalContext } from '../../api/context/GlobalState'

const Register = () => {

  const {email, setEmail, password1, setPassword1,username,setUsername, password,setPassword,registerUser} = useContext(GlobalContext)

  const handleRegister = (e) => {
    // e.preventDefault()
    registerUser(username,email,password,password1)

  }

  return (
    <>
        <h1 className='mt-5'>register</h1>
        <form>
            <input type="text" placeholder='name' value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="email" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='pass1' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <input type="password" placeholder='pass2' value={password1} onChange={(e)=> setPassword1(e.target.value)}/>
            <button onClick={handleRegister}>Kayıt ol</button>
        </form>
    </>
  )
}

export default Register