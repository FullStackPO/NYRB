import { useDispatch } from 'react-redux'
import { createBlog, getBlog } from '../services/api.service'
import { setBlog, setLoading, setError } from '../blog.slice'

export const useBlog = () => {

    const dispatch = useDispatch()

    async function sendBlog({ btype, subject, content }){
        try {
          dispatch(setLoading(true))
          const data = await createBlog({ btype, subject, content })
          dispatch(setBlog(data.blog))
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
            dispatch(setBlog(data.blog))
        }
        catch(err){
            dispatch(setError(err.message))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

    return { sendBlog, fetchBlog }

}