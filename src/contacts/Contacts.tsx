import React from 'react'
import s from './Contacts.module.scss'
import Title from "../Common/Components/Title/Title";
import {Fade} from "react-awesome-reveal";
import Button from "../Common/Components/button/Button";


function Contacts() {

    return (
        <div id="Contacts" className={s.contactsBlock}>
            <Fade direction={"left"}>
                <div className={s.contactsContainer}>
                    <div>
                        <Title title={"Contacts"}/>
                    </div>
                    <form className={s.contactsForm}>
                        <input type="contact" placeholder={'Contact'} />
                        <input type="name" placeholder={'Name'}/>
                        <textarea placeholder="Comment"/>
                        {/*<Button className={s.contactsButton} titleButton={'SEND MESSAGE'} link={''} />*/}
                        <button type="submit" className={s.contactsButton}>SEND MESSAGE</button>
                    </form>
                    <div className={s.contacts}>
                    </div>

                </div>
            </Fade>
        </div>
    )
}



export default Contacts;