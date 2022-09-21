import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'


export const MyPosts = () => {
  let posts=[
    {id:1 ,mesagge:"hi,how are you",likesCount:12},
    {id:2 ,mesage:"it is my first post",likesCount:11},
    {id:2 ,mesage:"it is my first post",likesCount:11},
    {id:2 ,mesage:"it is my first post",likesCount:11}
   
  ]
  let postElements=posts.map(p=><Post mesagge={p.mesagge}likesCount={p.likesCount}/> )



  return (
    <div  className={s.postsBlock}>
        <div ><h2>MY Post</h2></div>
        <div>
          <div><textarea></textarea></div>
        <div>
        <button>Add post</button>
        </div>
          <button>Remove </button>
        </div>
       
        <div>
<div className={s.posts}>
  
  {postElements}
  
</div>


        </div>
       
        
        
      
        <Post/>
    </div>
  )
}
