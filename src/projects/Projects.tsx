import React from 'react'
import s from './Projects.module.scss'
import Project from "./project/Project";
import todoImage from "../Common/images/TodoList.jpg"
import socialImage from "../Common/images/SocialNetwork.jpg"
import Title from "../Common/Components/Title/Title";
import {Fade} from "react-awesome-reveal";

export type ProjectType = {
    id: string
    projectTitle: string
    projectDescription: string
    stackTechnology: string
    viewCodeLink: string
    social: { backgroundImage: string }
}

function Projects() {

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };

    return <div id={"Projects"} className={s.projectsBlock}>
        <div className={s.projectsContainer}>
            <Title title={'Projects'}/>
            <div className={s.projects}>
                <Fade direction={"up"}>
                    <Project data-aos="zoom-in" data-aos-duration="900" style={social} title={'Social network'}
                             description={'Social network is a project, where you can assess my skills to learn something ' +
                                 'new. Every time I\'ve learned new feature or technology I try to implement it here. ' +
                                 'So it\'s a kind of playground of my own. Deployed on gh pages'}/>
                    <Project style={todolist} title={'Todolist'}
                             description={'Here you can observe all my skills in React/Redux. This project includes Redux ' +
                                 'Thunk, Ui=>BLL=>DAL workflow, Hooks, Material UI usage. Storybook and Unit Tests have also ' +
                                 'been used. Project is deployed on gh pages'}/>
                    <Project title={'Counter'}
                             description={'a project, where you can assess my skills to learn something new. Every time ' +
                                 'I\'ve learned new  or technology I try to implement it here. So it\'s a kind of' +
                                 'playground of my .  on gh pages'}/>
                </Fade>
            </div>
        </div>
    </div>
}

export default Projects;