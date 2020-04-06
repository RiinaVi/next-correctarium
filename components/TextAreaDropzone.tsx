import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function TextAreaDropzone({onChangeHandler, setTextLength,
                              textLength, submitHandler, setRes, res, file
                          }) {
    const onDrop = useCallback(acceptedFiles => {
        setRes({'fileName': acceptedFiles[0].name, 'fileSize': acceptedFiles[0].size})
        setTextLength(acceptedFiles[0].size)
    }, []);

    const {acceptedFiles, getRootProps} = useDropzone({onDrop});


    console.log(acceptedFiles);


    return (
        <div  {...getRootProps()} className="area">
            <textarea className="area__text"
                      placeholder="Введите текст или"
                      onKeyUp={(e: any) => onChangeHandler(setTextLength, e.target.value.length)}
            />
            <label className="area__download"
                   hidden={textLength !== 0}
            >
                загрузите файл
                <input className="input" type="file"
                       ref={file}
                       name="myFile"
                       onChange={submitHandler}
                       accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"/>
            </label>


            {res &&
            <div className="area__file">
                <div className="file__name">{res.fileName} </div>
                <div className="file__length">Количество символов: {res.fileSize}</div>
                <button onClick={() => {
                    setRes(null);
                    setTextLength(0)
                }} className="file__other">загрузите файл
                </button>
            </div>
            }
            <div className="area__symbols"/>
        </div>
    )
}

export default TextAreaDropzone;
