import Header from "../layout/header";
import React from "react";

export default function MyCollections(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
                <span>Collection</span>
            </div>
        </div>
    )
}