import {
    GET_DATA,
    SET_MINVALUE,
    SET_MAXVALUE,
    SET_BRANDS,
    GET_ALL,
    ERROR_DATA,
    SET_CHECKBRANDS
} from '../actions/actionTypes';

const initialState = {
    catalog: [],
    loading: false,
    min: 0,
    max: 499000,
    brands: [],
    activeBrands: [],
    error: null
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                catalog: action.payload,
                loading: false,
                error: null
            }
        case SET_MINVALUE:
            return {
                ...state,
                min: action.payload
            }
        case SET_MAXVALUE:
            return {
                ...state,
                max: action.payload
            }
        case SET_BRANDS:
            return {
                ...state,
                activeBrands: action.payload
            }
        case SET_CHECKBRANDS: 
        return {
            ...state,
            brands: action.payload.brands.items
        }    

        case GET_ALL:
            return {
                ...state,
                catalog: action.payload.catalog,
                brands: action.payload.brands
            }

        case ERROR_DATA:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default catalogReducer;
