import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Dialogs.module.css"

  const DialogItem=(props)=>{
  return(
    
    <div className={s.dialog } >
  <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Mesagge=(props)=>{
  return(
<div className={s.dialogs}>
<NavLink >{props.message}</NavLink>
</div>
  
  )
}

export const Dialogs = (props) => {

  let dialogs=[
    {id:1 ,name:"sandor"},
    {id:2 ,name:"yula"},
    {id:3 ,name:"ender"},
    {id:4 ,name:"lenda"},
    {id:5 ,name:"mena"},
  ]

  let messages=[
    {id:1 ,mesagge:"hi"},
    {id:2 ,mesage:"how are you"},
    {id:3 ,mesage:"you"},
    {id:4 ,mesage:"le"},
    {id:5 ,mesage:"me"},
  ]

  let dialogsElements= dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
  

  let messagesElements =messages.map(m=><Mesagge message={m.mesage}/>)

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>

     {dialogsElements}

    </div>

    <div className={s.mesagges}>
      
  {messagesElements}
    </div> 
     
    </div>
  )}
