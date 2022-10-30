import React from 'react'
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../Common/Components/Title/Title";
import reactImage from "../assets/react.svg";
import cssImage from "../assets/css3.svg";
import jsImage from "../assets/square-js.svg";
import gitImage from "../assets/git.svg";
import htmlImage from "../assets/html5.svg";
import fluxImage from "../assets/flux.svg";

import {Fade} from "react-awesome-reveal";


const react = {
    backgroundImage: `url(${reactImage})`,
};
const css = {
    backgroundImage: `url(${cssImage})`,
};
const js = {
    backgroundImage: `url(${jsImage})`,
};

const git = {
    backgroundImage: `url(${gitImage})`,
};
const html = {
    backgroundImage: `url(${htmlImage})`,
};
const flux = {
    backgroundImage: `url(${fluxImage})`,
};


function Skills() {
    return <div id="Skills" className={s.skillsBlock}>

        <div className={s.skillsContainer}>

            <Title title={"Skills"}/>
            <div className={s.skills}>
                <Fade direction={"up"}>
                    <Skill style={js} title={"JS"}
                           description={" Good knowledge of JavaScript + experience with TypeScript." +
                               " Daily practicing with codewars. Understanding of objects, function expression and function declaration," +
                               " promises. Deep object and array copying. Familiar with ES6 syntax, arrow functions etc."}/>
                    <Skill style={react} title={"REACT+REDUX"}
                           description={"Professional usage of React library. Class components, including life-cycles and" +
                               " local state managing, HOCs, container components. Functional components and Hooks. " +
                               "State management using React-Redux library."}/>
                    <Skill style={html} title={"HTML"}
                           description={"Deep knowledge of HTML 5 structure and semantic tags. Correct usage of block" +
                               " names to create corresponding page layout. Familiarity with W3C standards."}/>
                    <Skill style={git} title={"GIT"}
                           description={"Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application."}/>
                    <Skill style={css} title={"CSS"}
                           description={"Knowledge of all main CSS 3 features, including shadows, gradients, transitions " +
                               "or animations, as well as new layouts like multi-columns," +
                               " flexible box or grid layouts. Deep understanding of flex-based design. " +
                               "Knowledge of SASS/SCSS prepros."}/>
                    <Skill style={flux} title={"FLUX"}
                           description={"FLUX workflow, state management, Middlewares, Redux Thunk knowledge, Actions and" +
                               " Action creators, reducers, createStore, dispatch, immutable state changing. Deep " +
                               "understanding of UI => BLL => DAL workflow."}/>

                </Fade>
            </div>
        </div>
    </div>
}

export default Skills;