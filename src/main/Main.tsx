import React from 'react';
import s from './Main.module.scss';
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    return (
        <div id="Main" className={s.mainBlock}>
            <div className={s.container}>
                <Fade direction="down">
                    <div className={s.greeting}>
                        <span>Hello, I'm </span>
                        <span>Rustam Gadzhiev</span>
                        <ReactTypingEffect
                            text={"Fronted Developer"}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={7000}
                            typingDelay={0}
                        />
                    </div>
                    <div className={s.photo}>
                        <div className={s.image}>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Main;