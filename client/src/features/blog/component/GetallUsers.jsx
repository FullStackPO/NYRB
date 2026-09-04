import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useBlog } from '../hook/useBlog'

const GetallUsers = () => {

  const { fetchUsers } = useBlog()

  const data = useSelector((state) => state.blog.user)

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      {data?.map((user) => (
        <div key={user._id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default GetallUsers