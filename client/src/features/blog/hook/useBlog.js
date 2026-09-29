import { useDispatch } from 'react-redux'
import { createBlog, getBlog, getFollowingList, getUsers } from '../services/api.service'
import { setBlog, setLoading, setError, setUser } from '../blog.slice'

export const useBlog = () => {

    const dispatch = useDispatch()

    async function sendBlog({ btype, subject, content }){
        try {
          dispatch(setLoading(true))
          const data = await createBlog({ btype, subject, content })
          dispatch(setBlog(data.blogs))
        } 
        catch (err) {
            dispatch(setError(err.message))
        }
        finally {
            dispatch(setLoading(false))
        }
    }


    async function fetchBlog(){
        try{
            dispatch(setLoading(true))
            const data = await getBlog()
            dispatch(setBlog(data.blogs))
        }
        catch(err){
            dispatch(setError(err.message))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

    async function fetchUsers(){
        try{
            dispatch(setLoading(true))
            const data = await getUsers()
            dispatch(setUser(data.user))
        }
        catch(err){
            dispatch(setError(err.message))
        }
        finally{
            dispatch(setLoading(false))
        }

    }

    async function fetchFollowingUsers() {
    console.log("fetchFollowingUsers called")

    try {
        dispatch(setLoading(true))

        console.log("calling getFollowingList")

        const data = await getFollowingList()

        console.log("API response:", data)
        console.log("followedUser:", data.followedUser)

        dispatch(setUser(data.followedUser))

    } catch (err) {
        console.log("ERROR:", err)
        dispatch(setError(err.message))
    } finally {
        dispatch(setLoading(false))
    }
    }

    return { sendBlog, fetchBlog, fetchUsers, fetchFollowingUsers }

}