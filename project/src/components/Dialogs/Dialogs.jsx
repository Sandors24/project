import React from 'react'
import s from "./Dialogs.module.css"

export const Dialogs = (props) => {
  return (
    <div className={s.dialogs}><div className={s.mesagges}>
      <div className={s.mesaje}>hi</div>
      <div className={s.mesaje}>how are you</div>
      <div className={s.mesaje}>you</div>

    </div> 

      <div className={s.dialogsItems}>
        <div className={s.dialog}>
      sandor
        </div>

        <div className={s.dialog}>
      yula
        </div>
        <div className={s.dialog}>
      ender
        </div>
        <div className={s.dialog}>
      motor
        </div>
        <div className={s.dialog}>
      hela
        </div>
      </div>


    </div>
  )}
