import React, { useEffect } from 'react'
import '../component/users.css'
import { useSelector } from 'react-redux'
import { useBlog } from '../hook/useBlog'

const GetallUsers = () => {

  const { fetchUsers } = useBlog()

  const data = useSelector((state) => state.blog.user)

  useEffect(() => {
    fetchUsers() 
  }, [])

  return (
    <div className='outer'>
      {data?.map((user) => (
        <div className='user-card' key={user._id}>
          <h4>{user.username}</h4>
          <button className='follow-btn'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default GetallUsers