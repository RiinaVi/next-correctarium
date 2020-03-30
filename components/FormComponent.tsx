import React, {useEffect} from "react";
import {NextPage} from "next";
import RadioButtons from "./RadioButtons";
import formStyle from "./style/formStyle";

type Props = {
    onChangeHandler: any,
    setTextLength: any,
    textLength: number,
    setLanguage: any,
    language: string,
    price: number,
    time: string

}

// @ts-ignore
const FormComponent: NextPage = ({onChangeHandler, setTextLength, textLength, setLanguage, language, price, time, form, file, res, setRes, submitHandler}: Props) => {

    useEffect(() => {
        res && setTextLength(res.fileSize)
    }, [res]);

    return (
        <>
            <form className="makeOrder" ref={form}
                  action={"/upload"}
                  onSubmit={submitHandler}
                  encType="multipart/form-data" method="POST"
            >
                <div className="makeOrder__item">
                    <section className="section ">
                        <div className="section__item "><h3 className="section__title makeOrder mb-20">Заказ
                            редактирования</h3><p className="section__p small"><span>Исправим все ошибки и огрехи, уберем все глупости из текста, перефразируем неудачные места, но сильно переписывать текст не станем. Лишних правок не будет.</span>
                            <a>Подробнее о редактировании</a></p>
                            <div className="fields__row required">
                                <input required={true}
                                       className="common__input auto"
                                       type="email" placeholder="Ваша эл. почта"
                                />
                            </div>
                            <div className="fields__row">
                                <input className="common__input auto"
                                       placeholder="Ваше имя"/>
                            </div>
                            <div className="area">
                <textarea className="area__text"
                          placeholder="Введите текст или"
                    // @ts-ignore
                          onKeyUp={e => onChangeHandler(setTextLength, e.target.value.length)}
                />
                                <label className="area__download"
                                       hidden={textLength !== 0}
                                >
                                    загрузите файл
                                    <input className="input"
                                           ref={file} onChange={submitHandler} type="file" name="myFile"
                                           accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"/>
                                </label>
                                {res &&
                                <div className="area__file">
                                    <div className="file__name">{res.fileName}</div>
                                    <div className="file__length">Количество символов: {res.fileSize}</div>
                                    <button onClick={() => {
                                        setRes(null);
                                        setTextLength(0)
                                    }} className="file__other">завантажте файл
                                    </button>
                                </div>
                                }
                                <div className="area__symbols"/>
                            </div>
                        </div>
                    </section>
                    <section className="section mt-40">
                        <div className="section__item ">
                            <h3 className="section__title makeOrder makeOrder--small mb-20">язык</h3>
                            <RadioButtons
                                // @ts-ignore
                                onChangeHandler={onChangeHandler}
                                setLanguage={setLanguage}
                                language={language}
                            />
                        </div>
                    </section>
                    <section className="section mt-40">
                        <div className="section__item ">
                            <div className="fields">
                                <div className="fields__row">
                                    <input className="common__input auto"
                                           placeholder="Короткий комментарий или ссылка"
                                           value=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="makeOrder__item">
                    <div className="submit">
                        <div className="submit__content">
                            <div className="content__price">
                                <div className="number">{price.toFixed(2)} грн</div>
                                <div hidden={!price} className="time">{time}</div>
                            </div>
                            <div className="button">
                                <button type="submit" disabled={true} className="common__button disabled">Заказать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <style>{`${formStyle}`}</style>
        </>
    );
}


export default FormComponent;
