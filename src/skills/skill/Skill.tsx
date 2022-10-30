import React from 'react'
import s from './Skill.module.scss'
type PropsSkillType = {
    title:string
    description:string
    style?: {
        backgroundImage:string
    }
}
function Skill(props:PropsSkillType) {
    return <div className={s.skill}>
        <div
            className={s.icon} style={props.style}>
        </div>
        <h3 className={s.skillTitle}>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
    </div>
}

export default Skill;