import { createBrowserRouter } from 'react-router'
import Login from '../src/features/auth/pages/Login'
import Register from './features/auth/pages/Register'

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
        element : <h1>Hello from / page.</h1>
    }
])