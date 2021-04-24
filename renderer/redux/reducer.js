import {
    AVAILABLE_SIZE,
    GET_COUNTRY_LIST,
    GET_CATEGORY_LIST,
    GET_RECOMMEND_LIST,
} from './actionTypes';

const defaultState = {
    availableSize: {
        width: 0,
        height: 0
    },
    countryList: {},
    categoryList: {},
    recommendList: []
};

export default function reducerHandler(state = defaultState, action) {

    let newState = JSON.parse(JSON.stringify(state));

    if(action.type === AVAILABLE_SIZE){
        newState.availableSize = action.size;
        return newState;
    }
    else if(action.type === GET_COUNTRY_LIST){
        newState.countryList = action.countryList;
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

    return state;
}