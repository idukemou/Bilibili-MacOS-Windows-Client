import React from 'react';
import '../../styles/header.css'

export default function Header(props){
    return(
        <section className="header-container">
            <div className="header-left-wrapper">{props.left}</div>
            <div className="header-center-wrapper">{props.center}</div>
            <div className="header-right-wrapper">{props.right}</div>
        </section>
    )
}