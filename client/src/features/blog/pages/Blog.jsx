import React from 'react'
import '../styles/feed.css'
import Nav from '../component/Nav'
import GetallUsers from '../component/GetallUsers'

const Blog = () => {

  return (
    <>
      <Nav />
      <main>
        <section className='feed'>
          <h1>Loading Feed...</h1>
        </section>
        <section className='users'>
          <GetallUsers />
        </section>
      </main>
    </>
  )
}

export default Blog
