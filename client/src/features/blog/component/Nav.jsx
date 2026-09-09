import React from 'react'
import '../component/style.css'
import { useAuth } from '../../auth/hook/useAuth'

const Nav = () => {

  const { logoutController } = useAuth()

  return (
    <nav>
        <h2>NYRB</h2>
        <button className='logout-btn'
        onClick={logoutController}>Logout</button>
    </nav>
  )
}

export default Nav
