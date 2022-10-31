import React from 'react'
import s from './Projects.module.scss'
import Project from "./project/Project";
import todoImage from "../Common/images/TodoList.jpg"
import socialImage from "../Common/images/SocialNetwork.jpg"
import counterImage from "../Common/images/Counter.jpg"
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
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };

    const titleButton= "View"
    const counterLink = "https://rustamgadzhiev29.github.io/counter"
    const todolistLink = "https://rustamgadzhiev29.github.io/todolist"
    const socialNetworkLink = "https://rustamgadzhiev29.github.io/social-network-log"


    return <div id={"Projects"} className={s.projectsBlock}>
        <div className={s.projectsContainer}>
            <Title title={'Projects'}/>
            <div className={s.projects}>
                <Fade direction={"up"}>
                    <Project  link ={socialNetworkLink} titleButton={titleButton} data-aos="zoom-in" data-aos-duration="900" style={social} title={'Social network'}
                             description={'Social network is a project, where you can assess my skills to learn something ' +
                                 'new. Every time I\'ve learned new feature or technology I try to implement it here. ' +
                                 'So it\'s a kind of playground of my own. Deployed on gh pages'}/>
                    <Project link ={todolistLink} titleButton={titleButton} style={todolist} title={'Todolist'}
                             description={'Here you can observe all my skills in React/Redux. This project includes Redux ' +
                                 'Thunk, Ui=>BLL=>DAL workflow, Hooks, Material UI usage. Storybook and Unit Tests have also ' +
                                 'been used. Project is deployed on gh pages'}/>
                    <Project link ={counterLink} titleButton={titleButton} style={counter} title={'Counter'}
                             description={'a project, where you can assess my skills to learn something new. Every time ' +
                                 'I\'ve learned new  or technology I try to implement it here. So it\'s a kind of' +
                                 'playground of my .  on gh pages'}/>
                </Fade>
            </div>
        </div>
    </div>
}

export default Projects;