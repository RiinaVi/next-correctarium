import {NextComponentType} from "next";
import React, {useEffect, useRef, useState} from "react";
import {calculateDeadline, calculatePrice, calculateTime} from "../utils/calculators";
import FormComponent from "./FormComponent";

const FormContainer: NextComponentType = () => {
    const [time, setTime] = useState('');
    const [price, setPrice] = useState(0);
    const [language, setLanguage] = useState('Ukrainian');
    const [textLength, setTextLength] = useState(0);

    const form = useRef(null);
    const file = useRef(null);
    const [res, setRes] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myFile', file.current.files[0]);
        const response = await fetch('/upload', {
            method: 'post',
            headers: {
                'Accept': 'application/json, application/xml, text/play, text/html, *.*',
            },
            body: formData
        });
        setRes((await response.json()).res);
    };

    const onChangeHandler = (setter, value):any => {
        setter(value);
    }

    useEffect(()=>{
        setPrice(calculatePrice(textLength, language));
        setTime(calculateDeadline(calculateTime(textLength, language)))
    }, [textLength, language]);

    return(
        <FormComponent

           // @ts-ignore
            onChangeHandler={onChangeHandler}
            setTextLength={setTextLength}
            textLength={textLength}
            setLanguage={setLanguage}
            language={language}
            price={price}
            time={time}
            form={form}
            file={file}
            res={res}
            setRes={setRes}
            submitHandler={submitHandler}
        />
    )

};

export default FormContainer;
