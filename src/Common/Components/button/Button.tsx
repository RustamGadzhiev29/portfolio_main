import React from 'react'
import style from './Button.module.scss'
type ButtonPropsType ={
    link:string
    titleButton:string
}
export const Button = (props:ButtonPropsType) => {
    return <div className={style.buttonsBlock}>
                    <a href={props.link} className={style.viewButton}>{props.titleButton}</a>
            </div>


    // <div className={s.image} style={props.style}>
    //     <button className={s.viewButton}>View</button>
    // </div>
}
export default Button