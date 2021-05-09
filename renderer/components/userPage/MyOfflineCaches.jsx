import Header from "../layout/header";
import React from "react";

export default function MyOfflineCaches(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
                <span>Offline</span>
            </div>
        </div>
    )
}