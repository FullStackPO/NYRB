import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { routes } from './App.router'
import { useAuth } from './features/auth/hook/useAuth.js'

const App = () => {

  const auth = useAuth()

  useEffect(()=>{
    auth.getmeController()
  }, [])

  return(
  <div>
     <RouterProvider router={routes} />
  </div>
  )
}

export default App
