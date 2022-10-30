import React from 'react'
import style from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import {ModifiedNavLinkType} from "../Header";


export type NavType = {
    navLinks: Array<ModifiedNavLinkType>
}

function Nav(props: NavType) {

    return (
        <div className={style.nav}>
            {props.navLinks.map(nav => {
                    return (
                        <Link
                            activeClass={style.active}
                            key={nav.id}
                            to={nav.sectionId}
                            href=""
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}>
                            {nav.navTitle}
                        </Link>
                    )
                }
            )
            }
        </div>
    )
}

export default Nav