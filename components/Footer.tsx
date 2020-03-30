import React from "react";
import {NextPage} from "next";
import {useRouter} from 'next/router'
import footerStyle from "./style/footerStyle";

const Footer: NextPage = () => {
    const {pathname} = useRouter();
    return (
        (pathname === '/' || pathname === '/make-order') &&
        <>
            <footer className="footer">
                <nav className="footer__nav">
                    <div className="nav__item">
                        <a rel="nofollow" target="_blank" href="https://www.facebook.com/correctarium/">Facebook</a>
                    </div>
                    <div className="nav__item">
                        <a rel="nofollow" href="mailto:manager@correctarium.com">manager@correctarium.com</a>
                    </div>
                </nav>
                <div className="lang-switcher">
                    <button className="lang__item">Українська</button>
                    <button className="lang__item">Русский</button>
                </div>
            </footer>
            <style>{`${footerStyle}`}</style>
        </>
    )
};

export default Footer;
