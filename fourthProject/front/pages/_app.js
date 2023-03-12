import React from "react";
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from "../store/configureStore";
import '../pages/css/calendar.css';
import'../pages/css/applayout.css';

const  Fashionary= ({Component}) => {

    return(
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Fashionary</title>
        </Head>
        <Component />
        </>
    );

};
//_app.js는 pages들의 공통 부분
export default wrapper.withRedux(Fashionary);