import {useState, useEffect} from "react";
import '../../styles/preload.css';
import {message} from "antd";

export default function Preload(){

    const [showPage, setShowPage] = useState(true);
    const [timer, setTimer] = useState(6);

    useEffect(() => {
        if(timer === 0 && showPage) jumpOver();
        timer > 0 && showPage && setTimeout(() => {setTimer(timer-1);}, 1000);
    }, [timer]);

    function jumpOver(){
        setShowPage(false);
    }

    return(
        <>
            {
                showPage ? (
                    <section id='preload' className={showPage ? 'preload-page-show':'preload-page-destroy'}>
                        <div id='preload-image'></div>
                        <div id='preload-logo'></div>
                        <button id='preload-btn' onClick={() => jumpOver()}>跳过 {timer}</button>
                    </section>
                ): ''
            }
        </>
    )
}