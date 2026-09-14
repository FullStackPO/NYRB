import { createBrowserRouter } from 'react-router'
import Login from '../src/features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Blog from './features/blog/pages/Blog'
import Protected from './features/auth/components/Protected'
import CreateBlog from './features/blog/pages/CreateBlog'

export const routes = createBrowserRouter([
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/",
        element : <Protected><Blog /></Protected>
    },
    {
        path : "/create",
        element : <Protected><CreateBlog /></Protected>
    }
])