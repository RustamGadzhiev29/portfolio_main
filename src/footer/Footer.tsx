import React from 'react'
import s from './Footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedinIn, faSquareGithub, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return <div className={s.footerBlock}>
        <div className={s.footerContainer}>
                <span>
                    <div>
                        <h2 className={s.title}>
                            {"Social Networks"}
                        </h2>
                    </div>
               </span>

            <div className={s.footer}>
                <div className={s.contacts}>
                    <a href={''}>
                        <FontAwesomeIcon className={s.contact} icon={faFacebook}/>
                    </a>
                </div>
                <div className={s.contacts}>
                    <a href={''}>
                        <FontAwesomeIcon className={s.contact} icon={faTelegramPlane}/>
                    </a>
                </div>
                <div className={s.contacts}>
                    <a href={''}>
                        <FontAwesomeIcon className={s.contact} icon={faSquareGithub}/>
                    </a>
                </div>
                <div className={s.contacts}>
                    <a href={''}>
                        <FontAwesomeIcon className={s.contact} icon={faLinkedinIn}/>
                    </a>
                </div>
            </div>
            <div>
                <p className={s.copyright}>© 2022 All rights reserved </p>
            </div>
        </div>
    </div>
}

export default Footer;