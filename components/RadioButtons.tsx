import React from "react";
import {languages} from "../utils/calculators";

type Props = {
    onChangeHandler: any,
    setLanguage: any,
    language: string
}

const RadioButtons = ({onChangeHandler, setLanguage, language}: Props) => {
    return (
        <div className="buttons">
            {languages.map((lang, index) => {
                return (
                    <label key={index} className="container">{lang}
                        <input type="radio"
                               value={lang}
                               defaultChecked={lang === language} name="radio"
                               onFocus={e => onChangeHandler(setLanguage, e.target.defaultValue)}/>
                        <span className="checkmark"/>
                    </label>
                )
            })}
        </div>
    )
};

export default RadioButtons;
