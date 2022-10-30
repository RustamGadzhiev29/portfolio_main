import React from 'react'
import style from './Title.module.scss'
type PropsTitle = {
    title:string
}
function Title (props:PropsTitle) {
    return <div >
        <h2 className={style.title}>
            {props.title}
        </h2>
    </div>
}

export default Title;