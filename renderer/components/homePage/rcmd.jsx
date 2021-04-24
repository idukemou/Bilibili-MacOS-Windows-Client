import React from 'react';
import store from "../../redux/store";
import electron from 'electron';
import {getRecommendListAction} from "../../redux/actionCreators";

const ipcRenderer = electron.ipcRenderer || false;

if(ipcRenderer){
    ipcRenderer.send('request_recommend_list');
    ipcRenderer.on('fetch_recommend_list', async (event, data) => {
        store.dispatch(await getRecommendListAction(data))
    });
}

function convertDuration(time){
    const hour = Math.floor(time / 3600 % 24);
    const min = Math.floor(time / 60 % 60);
    const sec = Math.floor(time % 60);

    if(hour >= 1 && min === 0 && sec === 0){
        return `${hour}:00:00`;
    }else if(hour >= 1 && min !== 0 && sec === 0){
        return `${hour}:${min}:00`;
    }else if(hour >= 1 && min !== 0 && sec !== 0){
        return `${hour}:${min}:${sec}`;
    }else if(min >= 1 && sec === 0){
        return `${min}:00`;
    }else if(min >= 1 && sec !== 0){
        return `${min}:${sec}`
    }else{
        return `0:${sec}`
    }

    return '0:0'
}

function convertViews(views){
    if(views < 10000){
        return views;
    }

    return (views / 10000).toFixed(1)+'万';
}

class RecommendUI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            offsetTop: 0
        }
    }

    componentDidMount() {
        this.setState({
            offsetTop: this.box.offsetTop
        })
    }

    render() {
        const data = this.props.data;

        return(
            <>
                <div
                    className='rcmd-item'
                    onClick={() => console.log('post')}
                    ref={box => this.box = box}
                    style={{
                        visibility: (
                            (this.state.offsetTop > this.props.position + 540) || (this.state.offsetTop < this.props.position - 540)
                            ? 'hidden': 'visible'
                        )
                    }}
                >
                    <div className='rcmd-item-info-wrapper'>
                        <img
                            src={data.pic}
                            alt={data.title}
                            className='rcmd-item-image'
                            style={{
                                display: (
                                    (this.state.offsetTop > this.props.position + 540) || (this.state.offsetTop < this.props.position - 540)
                                        ? 'none': 'block'
                                )
                            }}
                        />
                        <div className='rcmd-item-stat'>
                            <span className='rcmd-item-duration'>{convertDuration(data.duration)}</span>
                            <span className='rcmd-item-views'>{convertViews(data.stat.view)}观看</span>
                        </div>
                    </div>
                    <div className='rcmd-item-title-wrapper'>
                        <div className='rcmd-item-owner'>
                            <img
                                src={data.owner.face}
                                alt={data.owner.name}
                                style={{
                                    display: (
                                        (this.state.offsetTop > this.props.position + 540) || (this.state.offsetTop < this.props.position - 540)
                                            ? 'none': 'block'
                                    )
                                }}
                            />
                        </div>
                        <div className='rcmd-item-title'>
                            <strong>{data.title}</strong>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default class Recommend extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            recommendList: []
        }
    }

    componentDidMount() {
        const _this = this;
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                recommendList: store.getState().recommendList
            }, () => {
                setTimeout(()=>{
                    _this.unsubscribe();
                }, 2000)
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.loading){
            this.loadMore();
        }

        return true;
    }

    loadMore = () => {
        const _this = this;
        if(ipcRenderer){
            ipcRenderer.invoke('request_recommend_list_append')
                .then(data => {
                    _this.setState({
                        recommendList: _this.state.recommendList.concat(data.item)
                    })
                });
        }
    }

    render(){
        return(
            <>
                {
                    this.state.recommendList.map((list, index) => (
                        <RecommendUI key={index} data={list} {...this.props} />
                    ))
                }
            </>
        )
    }
}