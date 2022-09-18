import React from 'react'
import s from './Post.module.css'


export const Post = (props) => {
  return (
    
        <div >
            
            <div className={s.item} >Post</div>
            {props.mesagge}
            
            <div>
                <span>Like</span>
                
             
            </div>
           
        </div>
        
    
  )
}