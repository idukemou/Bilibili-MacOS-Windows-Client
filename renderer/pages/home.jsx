import {getCountryListAction} from "../redux/actionCreators";
import React from 'react';
import Head from 'next/head';
import store from '../redux/store';
import electron from 'electron';
import Layout from "../components/layout/layout";
import Preload from "../components/layout/preload";

class Home extends React.Component{

    static async getInitialProps(ctx){
        return{
            path: await ctx.pathname
        }
    }

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    render(){
        return (
            <>
                <Preload />
                <Head>
                    <title>Bilibili</title>
                </Head>
                <Layout/>
            </>
        )
    }
}

export default Home;
