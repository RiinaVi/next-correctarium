import Header from "./Header";
import React from "react";
import {NextPage} from "next";
import Head from "next/head";
import Footer from "./Footer";
import {useRouter} from 'next/router'

const Layout: NextPage = ({children}) => {
    const {pathname} = useRouter();
    let title;
    switch (pathname) {
        case '/':
            title = 'Корректура и редактирование текстов онлайн. Услуги редактора';
            break;
        case '/make-order':
            title = 'Редактирование (корректура) текстов онлайн';
            break;
        default:
            title = 'Ошибка | Correctarium';
            break;
    }
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous"/>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
            <style jsx={true}>
                {`
            font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
              .main {
                  max-width: 1140px;
                  padding: 0 15px;
                  margin: 0 auto;
             }
            `}
            </style>
        </div>
    );
}

export default Layout;
