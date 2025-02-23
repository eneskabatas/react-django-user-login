import { createContext, useEffect, useState } from "react";
import { is_authenticated, login, logout, register } from "../apiEndPoint/api";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext()


export const GlobalProvider = ({children}) => {

    // const nav = useNavigate();

    const [isAuth, setIsAuth] = useState(false)

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password1,setPassword1] = useState('')

    

    // kullanıcı girişi
    const loginUser = async (username,password) => {
        const success = await login(username,password)
        if(success){
            setIsAuth(true)
            // nav("/")
        }
    }

    // kullanıcı giriş yaptı mı
    const get_auth = async () => {
        try{
            const success = await is_authenticated()
            setIsAuth(success)
        } catch {
            setIsAuth(false)
        }
    }

    useEffect(()=>{
        get_auth()
    },[isAuth])


    // register
    const registerUser = async (username,email,password, password1) => {
        if ( password === password1){
            try{
                await register(username, email, password)
                alert('kayıt başarılı')
            }catch{
                alert('kayıt olmadı')
            }
        }else{
            alert("parolalar eşit değil")
        }
    }



    // logout
    const handleLogout = async () => {
        const success = await logout()
        if(success){
            // nav("/login")
        }
    }

    

    const value = {
        isAuth,
        loginUser,
        handleLogout,
        registerUser,
        username,setUsername,
        password,setPassword,
        email,setEmail,
        password1,setPassword1
    }

    return(
        <GlobalContext.Provider value={value}> {children} </GlobalContext.Provider>
    )
}