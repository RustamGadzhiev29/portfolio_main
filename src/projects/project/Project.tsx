import React from 'react'
import s from './Project.module.scss'
import Button from "../../Common/Components/button/Button";

type ProjectPropsType = {
    title: string,
    style?: {
        backgroundImage: string
    }
    description: string
    link:string
    titleButton:string
}

function Project(props: ProjectPropsType) {
    return <div className={s.project}>
        <div className={s.image} style={props.style}>
            <Button  link={props.link} titleButton={props.titleButton}/>
        </div>
        <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    </div>
}

export default Project;