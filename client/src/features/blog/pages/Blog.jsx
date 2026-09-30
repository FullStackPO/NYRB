import React from 'react'
import '../styles/feed.css'
import Nav from '../component/Nav'
import GetallBlog from '../component/GetallBlog'

const Blog = () => {

  return (
    <>
      <Nav />
      <main>
        <section className='feed'>
          <GetallBlog />
        </section>
        <section className='users'>
        </section>
      </main>
    </>
  )
}

export default Blog
