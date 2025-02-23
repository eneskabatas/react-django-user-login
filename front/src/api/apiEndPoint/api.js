import axios from 'axios'

const USER_URL = "http://127.0.0.1:8000/api/"
const LOGIN_URL = `${USER_URL}token/`
const REFRESH_URL = `${USER_URL}token/refresh/`
const LOGOUT_URL = `${USER_URL}logout/`
const AUTH_URL = `${USER_URL}authenticated/`
const REGISTER_URL = `${USER_URL}register/`

// login
export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL,
        {username:username, password:password},
        {withCredentials:true}
    )
    return response.data.success
}

// refresh token
export const refresh_token = async () => {
    try{
        await axios.post(REFRESH_URL,
            {},
            {withCredentials: true}
        )
        return true
    }catch(error){
        return false
    }
}


// kullanıcı çıkış yapmadıysa refresh_token yenileme
const call_refresh = async (error, func) => {
    if(error.response && error.response.status === 401){
        const tokenRefreshed = await refresh_token()
    
        if(tokenRefreshed){
            const retryResponse = await func()
            return retryResponse.data
        }
    }

    return false
}

// kullanıcı giriş yaptı mı
export const is_authenticated = async () => {
    try{
        await axios.post(AUTH_URL,
            {},
            {withCredentials:true}
        )
        return true
    }catch(error) {
        return false
    }
}

// register
export const register = async (username, email, password) => {
    const response = axios.post(REGISTER_URL,
        {username:username, email:email, password:password},
        {withCredentials:true}
    )
    return response.data
}


// logout
export const logout = async () => {
    try{
        await axios.post(LOGOUT_URL,
            {},
            {withCredentials:true}
        )
        return true
    }catch(error){
        return false
    }
}