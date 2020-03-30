import React from "react";
import {NextPage} from "next";
import Layout from "../components/Layout";
import FormContainer from "../components/FormContainer";

const OrderPage: NextPage = () => {
    return (
        <>
            <Layout>
                <main className="main">
                    <FormContainer/>
                </main>
            </Layout>
            <style jsx={true}>{`
            .main {
                  max-width: 1140px;
                  padding: 0 15px;
                  margin: 0 auto;
             }
            `}</style>
        </>
    )
};

export default OrderPage;
