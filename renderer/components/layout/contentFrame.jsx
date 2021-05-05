import React, {useEffect, useRef, useState} from "react";
import store from "../../redux/store";

export default function ContentFrame (props){
    const [availableSize, setAvailableSize] = useState(store.getState().availableSize);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setAvailableSize(store.getState().availableSize))

        return () => {
            unsubscribe();
        }
    }, [store.getState().availableSize.width, store.getState().availableSize.height]);

    return(
        <section
            className={props.className}
            style={{
                width:(`${props.children.length * 100}%`),
                height:(`${availableSize.height}px`),
                overflow: 'hidden',
                position: 'absolute',
                transition: 'left 0.3s',
                left: (`${props.activeIndex * -availableSize.width}px`)
            }}>
            {
                props.children
            }
        </section>
    )
}

export function Content(props){

    const ref = useRef(null);

    const [availableSize, setAvailableSize] = useState(store.getState().availableSize);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const [reachEnd, setReachEnd] = useState(false);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setAvailableSize(store.getState().availableSize))

        return () => {
            unsubscribe();
        };
    }, [store.getState().availableSize.width, store.getState().availableSize.height]);

    useEffect(() => {
        setClientHeight(ref.current.clientHeight);
    }, [store.getState().availableSize]);

    useEffect(() => {
        ref.current.addEventListener('scroll', () => {
            setScrollTop(ref.current.scrollTop);
            setScrollHeight(ref.current.scrollHeight);

            if (ref.current.scrollHeight - availableSize.height === ref.current.scrollTop) {
                setReachEnd(true);
            } else {
                setReachEnd(false);
            }
        }, false);
    })

    return(
        <section
            style={{
                width: availableSize.width+'px',
                height: availableSize.height+'px',
                float: "left",
                overflow: 'hidden',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'flex-start',
            }}
            className={props.className}
        >
            <section
                ref={ref}
                className='recommend-item-wrapper'
                style={{
                    width: availableSize.width+'px',
                    height: availableSize.height+'px',
                }}
            >
                {
                    React.Children.map(props.children, (child) => {
                        if (!React.isValidElement(child)) {
                            return null;
                        }
                        const childProps = {
                            ...child.props,
                            loading: reachEnd,
                            clientData: {scrollTop, clientHeight}
                        }
                        return React.cloneElement(child, childProps)
                    })
                }
            </section>
        </section>
    )
}