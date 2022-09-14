import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'


export const MyPosts = () => {
  return (
    <div  >
        <div >MyPosts</div>
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove </button>
        </div>
       
        <div>
<div className={s.posts}>
  <Post></Post>
  <Post></Post>
  <Post></Post>
  <Post></Post>
</div>


        </div>
       
        
        
      
        <Post/>
    </div>
  )
}
