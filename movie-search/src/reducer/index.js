import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIE_FAILED,
} from "./types";

export const initialState = {
    loading: true,
    movie: [],
    errorMessage: null,
};

export const reducer = (state, action) => {
    console.log("u reducer-u sam", action.payload);
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case  "SEARCH_MOVIE_FAILED":
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
    
        default:
            return state;
    };
};