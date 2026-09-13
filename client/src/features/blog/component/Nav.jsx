import React from 'react'
import '../component/style.css'
import { useAuth } from '../../auth/hook/useAuth'
import { useNavigate } from 'react-router'

const Nav = () => {

  const navigate = useNavigate()

  const { logoutController } = useAuth()

  const logoutHandler = async() => {
      await logoutController()
      navigate('/login')
  }

  return (
    <nav>
        <h2>NYRB</h2>
        <div className='nav-buttons'>
        <button className='createBlog-btn'>Create Blog</button>
        <button className='logout-btn'
        onClick={logoutHandler}>Logout</button>
        </div>
    </nav>
  )
}

export default Nav
