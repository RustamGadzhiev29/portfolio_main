import React from 'react'
import s from './Header.module.scss'
import Nav from "./nav/Nav";
import BurgerNav from "./BurgerNav/BurgerNav";

type HeaderPropsType = {
    navLinks: Array<ModifiedNavLinkType>
}
export type ModifiedNavLinkType = {
    id: number
    sectionId: string
    navTitle: string
    offset: number,
    style: { marginTop: string }
}

function Header(props: HeaderPropsType) {

    return (
        <div className={s.headerBlock}>
            <Nav navLinks={props.navLinks}/>
            <BurgerNav navLinks={props.navLinks}/>
        </div>
        // <div className={s.headerBlock}>
        //     <div className={s.headerContainer}>
        //         <div className={s.header}>
        //             <Nav navLinks={props.navLinks}/>
        //             <BurgerNav navLinks={props.navLinks}/>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header;