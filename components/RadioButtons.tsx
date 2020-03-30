import React from "react";
import {NextPage} from "next";
import {languages} from "../utils/calculators";
import radioButtonsStyle from "./style/radioButtonsStyle";

type Props = {
    onChangeHandler: any,
    setLanguage: any,
    language: string
}

// @ts-ignore
const RadioButtons: NextPage = ({onChangeHandler, setLanguage, language}: Props) => {
    return (
        <>
            <div className="buttons">
                {languages.map((lang, index) => {
                    return (
                        <label className="container">{lang}
                            <input type="radio"
                                   value={lang}
                                   defaultChecked={lang === language} name="radio"
                                // @ts-ignore
                                   onClick={e => onChangeHandler(setLanguage, e.target.value)}
                                   onFocus={e => onChangeHandler(setLanguage, e.target.value)}/>
                            <span className="checkmark"/>
                        </label>
                    )
                })}
            </div>
            <style>{`${radioButtonsStyle}`}</style>
        </>
    )
};

export default RadioButtons;
