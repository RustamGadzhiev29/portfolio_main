import React from 'react'
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Main from "./main/Main";
import Header from "./header/Header";
import styles from "./App.module.scss"

type NavLinkType ={
    sectionId: string
    navTitle: string
    offset: number,
    style: { marginTop: string }
}
function App() {

    const navLinks: Array<NavLinkType> = [
        {
            sectionId: "Main",
            navTitle: "Main",
            offset: -35,
            style: {marginTop: "0"}
        },
        {
            sectionId: "Skills",
            navTitle: "Skills",
            offset: 1,
            style: {marginTop: "40px"}
        },
        {
            sectionId: "Projects",
            navTitle: "Projects",
            offset: 1,
            style: {marginTop: "40px"}
        },
        {
            sectionId: "Contacts",
            navTitle: "Contacts",
            offset: 1,
            style: {marginTop: "40px"}
        }
    ]
    const modifiedData = (data: Array<NavLinkType>) => {
        return data.map((el, index) => ({
            ...el,
            id: index,
        }))
    }

    return <div className={styles.App}>
        <Header navLinks={modifiedData(navLinks)}/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
}

export default App