import React, {useState} from 'react'
import style from './BurgerNav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import {ModifiedNavLinkType} from "../Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "../../footer/Footer.module.scss";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faBurger, faTabletButton} from "@fortawesome/free-solid-svg-icons";


export type NavType = {
    navLinks: Array<ModifiedNavLinkType>
}

function BurgerNav(props: NavType) {

    let [burgerMenu, setBurgegMenu] = useState(false)
    let onBtnBurger = () => {
        setBurgegMenu(!burgerMenu)
    }

    return (
        <div className={style.burgerNav}>
            {props.navLinks.map(nav => {
                    return (
                        <div className={burgerMenu ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                            <Link
                                activeClass={style.active}
                                key={nav.id}
                                to={nav.sectionId}
                                href=""
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >{nav.navTitle}
                            </Link>
                        </div>
                    )
                }
            )
            }
            <div onClick={onBtnBurger} className={style.burgerBtn}>
                <svg viewBox='0 0 10 8' width='40' opacity={0.5}>
                    <path d='M1 1h8M1 4h 8M1 7h8'
                          stroke='#000'
                          stroke-width='2'
                          stroke-linecap='round'/>
                </svg>
            </div>
        </div>
    )
}

export default BurgerNav