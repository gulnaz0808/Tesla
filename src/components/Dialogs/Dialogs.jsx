import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
     <div className={s.dialogsItems}>
       <div className={s.dialog + ' '+ s.active}>
        <NavLink to="/dialogs/1">Nurjigit</NavLink>
       </div>
       <div className={s.dialog}>
       <NavLink to="/dialogs/2">Nuraly</NavLink>
       </div>
       <div className={s.dialog}>
       <NavLink to="/dialogs/3">Faizaan</NavLink>
       </div>
       <div className={s.dialog}>
       <NavLink to="/dialogs/4">Cicek</NavLink>
       </div>
       <div className={s.dialog}>
        <NavLink to="/dialogs/5">Dima</NavLink>
       </div>
     </div>
     <div className={s.messages}>
      <div className={s.message}>Hello!</div>
      <div className={s.message}>How are you doing?</div>
      <div className={s.message}>I'm tring to understand better React.js</div>
     </div>
    </div>
    
  )
}

export default Dialogs;