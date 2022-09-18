import React from 'react'
import s from "./Navbar.module.css"
import {  NavLink } from "react-router-dom"



export const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to ='/Profile'>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`} >
            <NavLink to ='/Dialogs' >Dialogs</NavLink>
        </div>
        <div >
            <a  className={s.item} href="News">News</a>
        </div>
        <div >
            <a className={s.item} href="Music">Music</a>
        </div>
        <div>
            <a  className={s.item} href="Setings">Setings</a></div>
    </nav>
  )
}
