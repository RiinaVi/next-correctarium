import React from 'react'
import Link from "next/link";
import {NextPage} from "next";
import Layout from "../components/Layout";

const ErrorPage: NextPage = () => (
    <Layout>
        <div className="error__page">
            <div className="error">
                <div className="top">OOPS!
                    <div className="colored">404</div>
                </div>
                <div className="bottom">Страница не найдена.</div>
                <div className="buttonWrap">
                    <Link href={'/'}>
                        <a>
                            <button className="common__button">Главная</button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
);

export default ErrorPage;

