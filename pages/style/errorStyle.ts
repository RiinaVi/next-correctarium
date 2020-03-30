const errorStyle = `
        .error__page, .error__page .error {
    display: flex;
    justify-content: center;
    align-items: center;
}
.error__page {
    margin-top: 100px;
}
* {
    box-sizing: border-box;
    color: #212529;
}

.error__page .error {
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.error__page, .error__page .error {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.error__page .error .top {
    font-size: 50px;
    text-transform: uppercase;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-weight: 700;
}
.error__page .error .top .colored {
    margin: 0 10px;
    color: #4a90e2;
}
.error__page .error .bottom {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
}
.error__page .error .buttonWrap {
    width: 185px;
    height: 50px;
    position: relative;
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
button, select {
    text-transform: none;
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
`;

export default errorStyle;
