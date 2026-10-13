import React, { useEffect } from 'react'
import { useBlog } from '../hook/useBlog'

const GetFollowingUsers = () => {
  const { fetchFollowingUsers } = useBlog()

  useEffect(() => {
    console.log("GetFollowingUsers mounted")

    fetchFollowingUsers()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default GetFollowingUsers