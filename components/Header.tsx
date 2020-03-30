import Link from 'next/link';
import React from "react";
import {NextPage} from "next";
// @ts-ignore
import Logo from '../public/cr_logo_w.svg'
import headerStyle from "./style/headerStyle";


const Header: NextPage = () => (
    <>
        <style>{`${headerStyle}`}</style>
        <header className="header">
            <div className="container">
                <div className="container__item">
                    <Link href={'/'}>
                        <a className={'logo active'}>
                            <Logo/>
                        </a>
                    </Link>
                    <div className="menu">
                        <Link href={"/how-it-works"}>
                            <a className="menu__link">О нас</a>
                        </Link>
                        <Link href={"/price"}>
                            <a className="menu__link">Цены</a>
                        </Link>
                        <Link href={"/who"}>
                            <a className="menu__link">Редакторы</a>
                        </Link>
                        <a href="https://blog.correctarium.com/" className="menu__link" rel="nofollow">Блог</a>
                    </div>
                </div>
                <div className="container__item">
                    <div className="buttonWrap">
                        <Link href={'/make-order'}>
                            <a>
                                <button className="common__button">Проверить текст</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </>
);

export default Header;
