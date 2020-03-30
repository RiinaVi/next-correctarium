const formStyle = `           .makeOrder {
    display: grid;
    grid-template-columns: 75% auto;
    grid-gap: 20px;
}
.section {
    margin-top: 55px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.section.mt-40 {
    margin-top: 40px;
}
.section__item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 15px;
}
.section .section__title.mb-20 {
    margin-bottom: 20px;
}
.section .section__title.makeOrder {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 700;
    letter-spacing: normal;
}
.section .section__title {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: EB Garamond,serif;
    margin: 0;
    padding: 0;
}
.section .section__p.small {
    font-size: 15px;
}
.section .section__p {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 0 0 8px;
}
span.no-wrap {
    white-space: nowrap;
}
.section .section__p a {
    text-decoration: none;
    color: #4a90e2;
}
a {
    background-color: rgba(0,0,0,0);
}
.makeOrder__item .fields__row {
    margin-bottom: 10px;
    border-radius: 2px;
    height: 35px;
    position: relative;
}
.makeOrder__item .fields__row.required:before {
    content: "*";
    position: absolute;
    color: red;
    top: -5px;
    left: -12px;
    font-size: 18px;
    font-weight: 700;
}
.common__input.auto {
    height: auto;
    min-height: 100%;
    font-size: inherit;
    font-family: inherit;
    border-radius: inherit;
}
.common__input {
    height: 40px;
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    font-size: 20px;
    font-family: EB Garamond,serif;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
.makeOrder__item .area {
    position: relative;
}
.makeOrder__item .area .area__text {
    resize: none;
    width: 100%;
    min-height: 250px;
    border-radius: 2px;
    border: 1px solid #eaeaea;
    outline: none;
    padding: 10px;
}
textarea {
    overflow: auto;
}
.makeOrder__item .area .area__download {
    position: absolute;
    top: 11px;
    left: 155px;
    color: #4a90e2;
    cursor: pointer;
}
.makeOrder__item .area .area__download .input {
    display: none;
}
.makeOrder__item .area .area__symbols {
    position: absolute;
    bottom: -12px;
    left: 2px;
    color: #999;
    font-weight: 700;
    font-size: 12px;
    background-color: #fff;
}
.section .section__title.makeOrder--small {
    font-size: 13px;
}
.section .section__title.makeOrder {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 700;
    letter-spacing: normal;
}
.makeOrder__item .buttons {
    display: grid;
    grid-gap: 15px;
}
.makeOrder__item .buttons__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
    transition: .2s;
}

.makeOrder__item .fields__row:last-child {
    margin-bottom: none;
}
.makeOrder__item .fields__row {
    margin-bottom: 10px;
    border-radius: 2px;
    height: 35px;
    position: relative;
}
.makeOrder__item .submit {
    position: relative;
    height: 100%;
}
.makeOrder__item .submit__content {
    position: sticky;
    top: 10px;
    margin-top: 93px;
    border-top: 1px solid #eaeaea;
}
.makeOrder__item .submit__content .content__price {
    padding: 0 20px;
    margin-top: 30px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}
.makeOrder__item .submit__content .button {
    width: 100%;
    height: 35px;
    position: relative;
}
.makeOrder__item .submit__content .content__price .number {
    color: #333;
    font-size: 22px;
    font-weight: 700;
}
.makeOrder__item .submit__content .content__price .time {
    color: #999;
    font-size: 15px;
    margin-bottom: 10px;
    min-height: 17px;
}
.common__button.disabled {
    cursor: auto;
    background-color: #1b5dab;
}
.common__button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #4a90e2;
    text-align: center;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    outline: none;
    -webkit-transition: .2s linear;
    -o-transition: .2s linear;
    transition: .2s linear;
}
[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
.makeOrder__item .area .area__file {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #eaeaea;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}
.makeOrder__item .area .area__file .file__other {
    font-size: 13px;
    border-bottom: 1px dashed #999;
    color: #999;
    cursor: pointer;
    margin-top: 5px;
    border-right: hidden;
}
.makeOrder__item .area .area__file .file__name {
    font-weight: 700;
    font-size: 20px;
}
.makeOrder__item .area .area__file .file__length {
    font-size: 15px;
}`;

export default formStyle;
