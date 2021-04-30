import {
    AVAILABLE_SIZE,
    GET_COUNTRY_LIST,
    GET_CATEGORY_LIST,
    GET_RECOMMEND_LIST,
    PLAY_VIDEO_INFO,
    APPEND_RECOMMEND_LIST,
    PLAY_VIDEO_STATUS, USER_INFO
} from './actionTypes';

const defaultState = {
    availableSize: {
        width: 0,
        height: 0
    },
    countryList: [],
    categoryList: {},
    recommendList: [],
    videoInfo: {
        info: {},
        url: {}
    },
    playVideoStatus: false,
    userInfo: {
        isLogin: false
    }
};

export default function reducerHandler(state = defaultState, action) {

    let newState = JSON.parse(JSON.stringify(state));

    if(action.type === AVAILABLE_SIZE){
        newState.availableSize = action.size;
        return newState;
    }
    else if(action.type === GET_COUNTRY_LIST){
        newState.countryList = action.countryList.data['common'].concat(action.countryList.data.others);
        return newState;
    }
    else if(action.type === GET_CATEGORY_LIST){
        newState.categoryList = action.categoryList;
        return newState;
    }
    else if(action.type === GET_RECOMMEND_LIST){
        newState.recommendList = action.recommendList.item;
        return newState;
    }
    else if(action.type === APPEND_RECOMMEND_LIST){
        newState.recommendList = action.recommendList;
        return newState;
    }
    else if(action.type === PLAY_VIDEO_INFO){
        newState.videoInfo = action.videoPlayInfo;
        return newState;
    }
    else if(action.type === PLAY_VIDEO_STATUS){
        newState.playVideoStatus = action.status;
        return newState;
    }
    else if(action.type === USER_INFO){
        newState.userInfo = action.profile;
        return newState;
    }

    return state;
}