import React from 'react';
import Head from 'next/head';
import Layout from "../components/layout/layout";
import Preload from "../components/layout/preload";
import MediaPage from "../components/mediaPlayer/MediaPage";
import MediaTaskHandler from "../utils/cache";

global.MediaHandler = new MediaTaskHandler();

export default function Home(props){
    return (
        <>
            <Preload />
            <Head>
                <title>Bilibili</title>
            </Head>
            <Layout/>
            <MediaPage/>
        </>
    )
}

