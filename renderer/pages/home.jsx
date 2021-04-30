import React from 'react';
import Head from 'next/head';
import Layout from "../components/layout/layout";
import Preload from "../components/layout/preload";
import VideoDetail from "../components/common/videoDetail";

export default function Home(props){
    return (
        <>
            <Preload />
            <Head>
                <title>Bilibili</title>
            </Head>
            <Layout/>
            <VideoDetail/>
        </>
    )
}

