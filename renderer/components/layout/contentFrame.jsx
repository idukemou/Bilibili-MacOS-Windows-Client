import React from "react";
import store from "../../redux/store";

export default class ContentFrame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            availableSize: store.getState().availableSize
        }
        store.subscribe(() => this.setState({
            availableSize: store.getState().availableSize
        }))
    }


    render() {
        return(
            <section
                style={{
                    width:(`${this.props.children.length * 100}%`),
                    height:(`${this.state.availableSize.height}px`),
                    overflow: 'hidden',
                    position: 'absolute',
                    transition: 'left 0.3s',
                    left: (`${this.props.activeIndex * -this.state.availableSize.width}px`)
                }}>
                {
                    this.props.children
                }
            </section>
        )
    }
}

export class Content extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            availableSize: store.getState().availableSize,
            windowHeight: 0,
            currentHeight: 0,
            loading: false,
            scrollTop: 0
        }
        store.subscribe(() => this.setState({
            availableSize: store.getState().availableSize
        }))
    }

    componentDidMount() {
        const _this = this;
        this.ref.addEventListener('scroll', () => {

            this.setState({
                scrollTop: _this.ref.scrollTop
            })

            if(_this.ref.scrollHeight - _this.state.availableSize.height === _this.ref.scrollTop){
                this.setState({
                    loading: true
                })
            }else{
                this.setState({
                    loading: false
                })
            }
        })
    }

    render(){
        return(
            <section
                style={{
                    width: this.state.availableSize.width+'px',
                    height: this.state.availableSize.height+'px',
                    float: "left",
                    overflow: 'hidden',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                }}
            >
                <section
                    ref={ref => this.ref = ref}
                    className='recommend-item-wrapper'
                    style={{
                        width: this.state.availableSize.width+'px',
                        height: this.state.availableSize.height+'px',
                    }}
                >
                    {
                        React.Children.map(this.props.children, (child) => {
                            if (!React.isValidElement(child)) {
                                return null
                            }
                            const childProps = {
                                ...child.props,
                                loading: this.state.loading,
                                position: this.state.scrollTop
                            }
                            return React.cloneElement(child, childProps)
                        })
                    }
                </section>
            </section>
        )
    }
}