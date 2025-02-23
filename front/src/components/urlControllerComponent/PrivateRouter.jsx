import { useContext } from 'react'
import { GlobalContext } from '../../api/context/GlobalState'
import {  useNavigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
  
    const {isAuth} = useContext(GlobalContext)
    const nav = useNavigate()

    if(isAuth){
        return children
    }
    else{
        nav("/")
        location.pathname="/"
    }

}

export default PrivateRouter