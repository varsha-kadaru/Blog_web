import React from 'react'
import "./single.css"
import Sidebar from "../../sidebar/sidebar"
import SinglePost from '../../singlePost/singlePost'
const single = () => {
  return (
    <div className='single'>
        <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default single
