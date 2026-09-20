import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useBlog } from '../hook/useBlog'

const GetallBlog = () => {

    const { fetchBlog } = useBlog()

    const blog = useSelector((state) => state.blog.blog)

    useEffect(() => {
        fetchBlog()
    }, [])

    console.log(blog)

  return (
    <div className="blog">
    {blog?.map((data) => (
    <div className="blog-card" key={data._id}>
      
      <div className="user-info">
        <div className="user">
          <div className="avatar">
            {data.user.username.charAt(0).toUpperCase()}
          </div>

          <div className="details">
            <h3>{data.user.username}</h3>
            <p>{data.user.email}</p>
          </div>
        </div>

        <span className="btype">
          {data.btype}
        </span>
      </div>

      <div className="blog-content">
        <p>{data.content}</p>
      </div>

    </div>
  ))}
</div>
  )
}

export default GetallBlog
