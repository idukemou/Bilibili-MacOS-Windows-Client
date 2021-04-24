import {
    AVAILABLE_SIZE,
    GET_COUNTRY_LIST,
    GET_CATEGORY_LIST,
    GET_RECOMMEND_LIST,
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