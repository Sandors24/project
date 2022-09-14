import React from 'react'
import s from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div >
            <a className={s.item} href="Profile">Profile</a>
        </div>
        <div >
            <a  className={s.item} href="Mesagges">Messages</a>
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
