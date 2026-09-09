import { useDispatch } from 'react-redux'
import { register, login, getme, logout } from '../services/auth.api'
import { setUser, setLoading, setError } from '../auth.slice'
import  { useNavigate } from 'react-router'

export function useAuth(){

    const navigate = useNavigate()

    const dispatch = useDispatch()

    async function registerController({ username, email, password }){
       try {
            dispatch(setLoading(true))
            const data = await register({ username, email, password })
            dispatch(setUser(data))
       } 
       catch (error) {
            dispatch(setError(error.message))
       } 
       finally {
            dispatch(setLoading(false))
       }
    }


    async function loginController({ email, password }) {
        try{
            dispatch(setLoading(true))
            const data = await login({ email, password })
            dispatch(setUser(data))
        }
        catch (error) {
            dispatch(setError(error.message))
            throw error
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    async function getmeController(){
        try {
            dispatch(setLoading(true))
            const data = await getme()
            dispatch(setUser(data))
        }
        catch (error) {
            dispatch(setError(error.message))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    async function logoutController(){
        try{
            dispatch(setLoading(true))
            const data = await logout()
            dispatch(setUser(data))
            navigate('/login')
        }
        catch (error) {
            dispatch(setError(error.message))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

    return { registerController, loginController, getmeController, logoutController  }

}