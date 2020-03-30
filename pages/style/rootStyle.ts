const rootStyle = `     
          .main {
   max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
}
.section {
    flex-wrap: wrap;
    margin-top: 55px;
    display: flex;
}
.section.jc-sb {
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.section__item {
-webkit-box-flex: 1;
    flex: 1;
    padding: 0 15px;
}

.section .h1 {
    font-size: 48px;
    font-family: EB Garamond,serif;
    font-style: italic;
    line-height: 48px;
    font-weight: 600;
    margin: 0 0 18px;
}

.contactUs__h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 24px;
}

.contactUs__buttonWrap {
    display: block;
    width: 210px;
    height: 55px;
    font-size: 18px;
    position: relative;
}

.common__button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
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

.section .section__title.mb-13 {
    margin-bottom: 13px;
}

.section .section__title.txc {
    text-align: center;
}

.section .section__title.mb-8 {
    margin-bottom: 8px;
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

.section .section__p {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 26px;
    margin: 0 0 8px;
}
.section .section__p a {
    text-decoration: none;
    color: #4a90e2;
}
a {
    background-color: rgba(0,0,0,0);
}

.common__redNumber .number {
    font-family: EB Garamond,serif;
}

.common__redNumber .number .big {
    font-size: 144px;
    line-height: 125px;
    font-weight: 300;
    font-style: italic;
    margin-left: -5px;
    color: #f44336;
}
.common__redNumber .number .small {
    font-style: italic;
    font-weight: 600;
    font-size: 32px;
    margin-left: -4px;
    color: #f44336;
}

.common__redNumber .text {
    font-family: EB Garamond,serif;
    display: block;
    font-style: italic;
    font-size: 20px;
    line-height: 20px;
    color: #f44336;
    max-width: 205px;
}
.section .section__title.mb-24 {
    margin-bottom: 24px;
}
.section .section__title.italic {
    font-size: 22px;
    font-style: italic;
    text-transform: none;
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

.trust a {
    text-decoration: none;
    color: #b0bec5;
    font-family: EB Garamond,serif;
    font-weight: 600;
    display: inline-block;
    margin-right: 32px;
    margin-bottom: 22px;
    font-size: 28px;
}
.section .section__p .non-break {
    display: inline-block;
}

.cards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.cards .card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
    -webkit-box-shadow: 0 8px 18px 0 rgba(0,0,0,.15);
    box-shadow: 0 8px 18px 0 rgba(0,0,0,.15);
    border-radius: 18px;
    min-height: 460px;
    text-align: left;
}
.cards .card__top.red {
    background-color: rgba(244,67,54,.4);
}
.cards .card__top {
    height: 10px;
    border-top-right-radius: 18px;
    border-top-left-radius: 18px;
}
.cards .card__content {
    padding: 24px 40px 93px 20px;
}
.section .section__p.color .yellow {
    background-color: #ff0;
}
.section .section__p.color .gray {
    background-color: #d3d3d3;
}
cards .card__content .showMistakes {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 16px;
}
.cards .card__content .showMistakes.show .toggle {
    background-color: #5a656b;
    border-color: #5a656b;
}
.cards .card__content .showMistakes .toggle {
    border: 1px solid #bdc3c7;
    background-color: #fff;
    border-radius: 60px;
    width: 30px;
    height: 18px;
    -webkit-transition: .2s linear;
    -o-transition: .2s linear;
    transition: .2s linear;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 2px;
    margin-right: 5px;
}
.cards .card__content .showMistakes.show .toggle .circle {
    background-color: #fff;
    margin-left: 12px;
}
.cards .card__content .showMistakes .toggle .circle {
    -webkit-transition: .2s linear;
    -o-transition: .2s linear;
    transition: .2s linear;
    border-radius: 50%;
    background-color: #bdc3c7;
    height: 12px;
    width: 12px;
}
.cards .card__top.green {
    background-color: rgba(126,221,33,.4);
}

.subscribe {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: rgba(224,245,255,.45);
    padding: 25px 60px 50px;
    margin-top: 125px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.subscribe__item.max-w680 {
    max-width: 680px;
}

.subscribe__item {
    padding: 0 15px;
}

.section__item.min-w635 {
    min-width: 635px;
}╝
.subscribe__item .links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 24px;
}
.subscribe__item .links .link {
    text-decoration: none;
    color: #333;
    margin-right: 22px;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.subscribe__item .links .link .image {
    min-width: 30px;
    width: 30px;
    min-height: 30px;
    height: 30px;
    margin-right: 10px;
}
.subscribe__item .links .link .text .title {
    font-size: 18px;
    margin-bottom: 2.5px;
}
.subscribe__item .links .link .text .subTitle {
    font-size: 10px;
    color: #487b95;
    line-height: 10px;
}

.subscribe__item .item__image {
    display: block;
    max-width: 187px;
    height: auto;
    margin-top: -113px;
}
.section img {
    display: block;
    max-width: 100%;
}
img {
    border-style: none;
}

.image svg {
height: 30px;
width: 30px;
}`

export default rootStyle;
