const headerStyle = `       * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box; 
}
                .header {
                     padding: 15px 0 25px;
                     background-color: #000;
                }
                .header .container {
                    padding: 0 10px;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    height: 60px;
                    width: 100%;
                    padding: 0 15px;
                    margin: 0 auto;
                }
                .header .container__item {
                    display: -webkit-box;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                }
                .header .container__item .logo {
                    padding: 0 16px;
                }
                a {
                    background-color: rgba(0,0,0,0);
                }
                .header .container__item .menu__link {
                    color: #fff;
                    padding: 5px;
                    font-weight: 600;
                    font-size: 15px;
                    text-decoration: none;
                    cursor: pointer;
                }
                .header .container__item .buttonWrap {
                    width: 200px;
                    height: 40px;
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
            button {
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-family: inherit;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }`;

export default headerStyle;
