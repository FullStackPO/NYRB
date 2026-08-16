import { useDispatch } from 'react-redux'
import { register, login, getme } from '../services/auth.api'
import { setUser, setLoading, setError } from '../auth.slice'

export function useAuth(){

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

    return { registerController, loginController, getmeController }

}