import {
    AVAILABLE_SIZE,
    GET_COUNTRY_LIST,
    GET_CATEGORY_LIST,
    GET_RECOMMEND_LIST,
    APPEND_RECOMMEND_LIST,
    PLAY_VIDEO_INFO,
    PLAY_VIDEO_STATUS,
    USER_INFO,
    DOWNLOADING_LIST
} from "./actionTypes";


export const countAvailableClientHeightAction = (size) => ({
    type: AVAILABLE_SIZE,
    size
})

export const getCountryListAction = (countryList) => ({
    type: GET_COUNTRY_LIST,
    countryList
});

export const getCategoryListAction = (categoryList) => ({
    type: GET_CATEGORY_LIST,
    categoryList
})

export const getRecommendListAction = (recommendList) => ({
    type: GET_RECOMMEND_LIST,
    recommendList
})

export const appendRecommendListAction = (recommendList) => ({
    type: APPEND_RECOMMEND_LIST,
    recommendList
})

export const playVideoInfoAction = (videoPlayInfo) => ({
    type: PLAY_VIDEO_INFO,
    videoPlayInfo
})

export const platVideoStatusAction = (status) => ({
    type: PLAY_VIDEO_STATUS,
    status
})

export const getUserInfoAction = (profile) => ({
    type: USER_INFO,
    profile
})

export const updateDownloadingListAction = (list) => ({
    type: DOWNLOADING_LIST,
    list
})