import { sortPizzasAPI } from '../../api/api';

//========================================================================================================================================================

const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADED = 'SET_LOADED';

//========================================================================================================================================================

const initialState = {
    items: [],
    isLoaded: false,
}

//=============REDUCER===========================================================================================================================================

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS: {
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        }
        case SET_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTION CREATOR============================================================================================================================================

export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items,
    }
}

export const setLoaded = (payload) => {
    return {
        type: SET_LOADED,
        payload
    }
}

//============THUNKS============================================================================================================================================

export const fetchPizzas = (sortBy, category) => {
    return async (dispatch) => {
        dispatch(setLoaded(false));
        const data = await sortPizzasAPI.sortPizzas(category, sortBy);
        dispatch(setPizzas(data));
    }
}

//========================================================================================================================================================

export default pizzasReducer;
