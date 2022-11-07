import React, {useState} from "react"
import s2 from "../../s1-main/App.module.css"
import s from "./HW13.module.css"
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton"
import axios from "axios"
import success200 from "./images/200.svg"
import error400 from "./images/400.svg"
import error500 from "./images/500.svg"
import errorUnknown from "./images/error.svg"

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState("")
    const [text, setText] = useState("")
    const [info, setInfo] = useState("")
    const [image, setImage] = useState("")
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? "https://xxxxxx.ccc" // имитация запроса на не корректный адрес
                : "https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test"

        setCode("")
        setImage("")
        setText("")
        setInfo("...loading")
        setButtonDisabled(true);

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode("Код 200!");
                setImage(success200);
                // дописать
                setText(`${res.data.errorText}`);
                setInfo(`${res.data.info}`);
                setButtonDisabled(false);
            })
            .catch((error) => {
                // дописать
                switch (error.code) {
                    case ("ERR_BAD_RESPONSE"):
                        setCode("Ошибка 500!");
                        setImage(error500);
                        setText(`${error.response ? error.response.data.errorText : error.message}`);
                        setInfo(`${error.response ? error.response.data.info : ""}`);
                        setButtonDisabled(false);
                        break;
                    case ("ERR_BAD_REQUEST"):
                        setCode("Ошибка 400!");
                        setImage(error400);
                        setText(`${error.response ? error.response.data.errorText : error.message}`);
                        setInfo(`${error.response ? error.response.data.info : ""}`);
                        setButtonDisabled(false);
                        break;
                    default:
                        setCode("Error!");
                        setImage(errorUnknown);
                        setText(`${error.message}`);
                        setInfo(`${error.name}`);
                        setButtonDisabled(false);
                        break;
                }
            });
    }

    return (
        <div id={"hw13"}>
            <hr/>
            <div className={s2.hwTitle}>Homework #13</div>
            <hr/>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={"hw13-send-true"}
                        onClick={send(true)}
                        xType={"secondary"}
                        // дописать
                        disabled={isButtonDisabled}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={"hw13-send-false"}
                        onClick={send(false)}
                        xType={"secondary"}
                        // дописать
                        disabled={isButtonDisabled}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={"hw13-send-undefined"}
                        onClick={send(undefined)}
                        xType={"secondary"}
                        // дописать
                        disabled={isButtonDisabled}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={"hw13-send-null"}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={"secondary"}
                        // дописать
                        disabled={isButtonDisabled}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={"hw13-code"} className={s.code}>
                            {code}
                        </div>
                        <div id={"hw13-text"} className={s.text}>
                            {text}
                        </div>
                        <div id={"hw13-info"} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
