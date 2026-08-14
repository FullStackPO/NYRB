import React from 'react'
import { RouterProvider } from 'react-router'
import { routes } from './App.router'
import { store } from './App.store.js'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store} >
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
